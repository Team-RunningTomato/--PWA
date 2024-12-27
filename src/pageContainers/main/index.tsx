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
import { useLVStore } from '@/stores';

import { useEffect, useMemo, useState } from 'react';

import * as S from './style';

const MainPage = () => {
  const { setLV } = useLVStore();

  const { data: myInfo } = useGetMyInfo();

  const { data: myRunningApplicationList } = useGetMyRunningApplication();
  const { data: meetingData } = useGetMeetings();

  const [runningLocation, setRunningLocation] = useState<string | undefined>(
    ''
  );

  const [runningTitle, setRunningTitle] = useState<string | undefined>('');

  const [meetingLocations, setMeetingLocations] = useState<
    Map<string, string | undefined>
  >(new Map());

  const { runningUser } = myInfo || {};
  const { totalDistance, bestDistance, worstDistance, level } =
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

  useEffect(() => {
    setLV(level! + 1);
  }, [level]);

  const reverseGeocode = async (
    lat: number,
    lon: number
  ): Promise<{ fullAddress: string; shortAddress: string } | undefined> => {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { province, town, village, road } = data.address;

      const fullAddress = `${province} ${town} ${village} ${road}`.trim();
      const shortAddress = `${province} ${town} ${village}`.trim();

      return { fullAddress, shortAddress };
    } catch (error) {}
  };

  useEffect(() => {
    if (closestApplication) {
      reverseGeocode(startLatitude!, startLongitude!).then((result) => {
        if (result) {
          const { fullAddress, shortAddress } = result;
          setRunningTitle(fullAddress);
          setRunningLocation(shortAddress);
        }
      });
    }
  }, [closestApplication, startLatitude, startLongitude]);

  useEffect(() => {
    if (meetingData && meetingData.length > 0) {
      meetingData.forEach((meeting) => {
        const { id, startLocation } = meeting;
        const { startLatitude, startLongitude } = startLocation;

        reverseGeocode(startLatitude, startLongitude).then((result) => {
          if (result) {
            setMeetingLocations((prev) =>
              new Map(prev).set(id, result.shortAddress)
            );
          }
        });
      });
    }
  }, [meetingData]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Box>
          <TopBar />
          <RunningState
            location={runningLocation!}
            distance={distance!}
            title={runningTitle!}
            date={startAt!}
            level={level!}
            totalDistance={totalDistance!}
            bestDistance={bestDistance!}
            worstDistance={worstDistance!}
            todayRunning={todayRunning}
          />
          <S.RecruitWrapper>
            <S.RecruitContainer>
              <S.RecruitText>런닝 모집</S.RecruitText>
              <SelectFilter />
            </S.RecruitContainer>
            <S.RecruitBox>
              {meetingData?.map(({ id, distance, startAt }) => (
                <MateBox
                  key={id}
                  distance={distance}
                  title={meetingLocations.get(id)!}
                  time={startAt}
                />
              ))}
            </S.RecruitBox>
          </S.RecruitWrapper>
        </S.Box>
        <BottomBar />
      </S.Container>
    </S.Wrapper>
  );
};

export default MainPage;
