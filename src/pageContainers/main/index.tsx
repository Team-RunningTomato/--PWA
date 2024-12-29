'use client';

import {
  BottomBar,
  MateBox,
  RunningState,
  SelectFilter,
  TopBar,
} from '@/components';
import {
  useGetMeetings,
  useGetMyInfo,
  useGetMyRunningApplication,
} from '@/hooks';
import { useGetReverseGeoCode } from '@/hooks/apis/nominatim';
import { useLVStore } from '@/stores';
import usePeriodStore from '@/stores/periodStore';

import { useEffect, useMemo, useState } from 'react';

import * as S from './style';

const MainPage = () => {
  const { setLV } = useLVStore();
  const { sortPeriod } = usePeriodStore();
  console.log(sortPeriod);
  const { data: myInfo } = useGetMyInfo();
  const { data: myRunningApplicationList } = useGetMyRunningApplication();
  const { data: meetingData } = useGetMeetings();

  const [runningLocation, setRunningLocation] = useState<string>('');
  const [runningTitle, setRunningTitle] = useState<string>('');

  const { runningUser } = myInfo || {};
  const { totalDistance, longestDistance, shortestDistance, level } =
    runningUser || {};

  const todayRunning = myRunningApplicationList
    ? myRunningApplicationList.slice(0, 3).map((app) => app.title)
    : ['신청한 런닝이 없습니다.'];

  const closestApplication = useMemo(() => {
    if (!myRunningApplicationList || myRunningApplicationList.length === 0) {
      return null;
    }

    const now = new Date();
    return myRunningApplicationList.reduce((closest, current) => {
      const currentStartAt = new Date(current.startAt);
      const closestStartAt = new Date(closest.startAt);
      const currentDiff = Math.abs(currentStartAt.getTime() - now.getTime());
      const closestDiff = Math.abs(closestStartAt.getTime() - now.getTime());

      return currentDiff < closestDiff ? current : closest;
    });
  }, [myRunningApplicationList]);

  const { distance, startAt, startLocation } = closestApplication || {};
  const { startLatitude, startLongitude } = startLocation || {};

  const { data: reverseGeoData, isSuccess: reverseGeoSuccess } =
    useGetReverseGeoCode(
      startLatitude && startLongitude
        ? [{ lat: startLatitude, lon: startLongitude }]
        : [],
      { enabled: !!startLatitude && !!startLongitude }
    );

  const { data: meetingLocations } = useGetReverseGeoCode(
    meetingData?.map(({ startLocation }) => ({
      lat: startLocation.startLatitude,
      lon: startLocation.startLongitude,
    })) || [],
    { enabled: !!meetingData?.length }
  );

  useEffect(() => {
    setLV(level! + 1);
  }, [level]);

  useEffect(() => {
    if (reverseGeoSuccess && reverseGeoData?.length) {
      const { address } = reverseGeoData[0];
      const { province, town, village, road } = address || {};
      setRunningTitle(
        `${province || ''} ${town || ''} ${village || ''}`.trim()
      );
      setRunningLocation(
        `${province || ''} ${town || ''} ${village || ''} ${road || ''}`.trim()
      );
    }
  }, [reverseGeoSuccess, reverseGeoData]);

  const sortedMeetingData = useMemo(() => {
    if (!meetingData) return [];

    return [...meetingData].sort((a, b) => {
      const aDate = new Date(a.startAt).getTime();
      const bDate = new Date(b.startAt).getTime();

      if (sortPeriod === 'latest') {
        return bDate - aDate;
      } else if (sortPeriod === 'oldest') {
        return aDate - bDate;
      }
      return 0;
    });
  }, [meetingData, sortPeriod]);

  const defaultString = '';
  const defaultNumber = 0;

  return (
    <S.Wrapper>
      <S.Container>
        <S.Box>
          <TopBar />
          <RunningState
            location={runningLocation ?? defaultString}
            distance={distance ?? defaultNumber}
            title={runningTitle ?? defaultString}
            date={startAt ?? defaultString}
            level={level ?? defaultNumber}
            totalDistance={totalDistance ?? defaultNumber}
            longestDistance={longestDistance ?? defaultNumber}
            shortestDistance={shortestDistance ?? defaultNumber}
            todayRunning={todayRunning ?? defaultString}
          />
          <S.RecruitWrapper>
            <S.RecruitContainer>
              <S.RecruitText>런닝 모집</S.RecruitText>
              <SelectFilter />
            </S.RecruitContainer>
            <S.RecruitBox>
              <S.RecruitBox>
                {sortedMeetingData?.map(({ id, distance, startAt }, index) => {
                  const address = meetingLocations?.[index]?.address;
                  const { province, town, village } = address || {};

                  const locationTitle =
                    `${province || ''} ${town || ''} ${village || ''}`.trim();

                  return (
                    <MateBox
                      key={id}
                      distance={distance}
                      title={locationTitle}
                      time={startAt}
                    />
                  );
                })}
              </S.RecruitBox>
            </S.RecruitBox>
          </S.RecruitWrapper>
        </S.Box>
        <BottomBar />
      </S.Container>
    </S.Wrapper>
  );
};

export default MainPage;
