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

import { useEffect } from 'react';

import * as S from './style';

const MainPage = () => {
  const { LV, setLV } = useLVStore();

  const { data: myInfo } = useGetMyInfo();

  const { data: myRunningApplicationList } = useGetMyRunningApplication();

  const { data: meetingData } = useGetMeetings();

  console.log(meetingData);

  const { runningUser } = myInfo || {};
  const { totalDistance, bestDistance, worstDistance, level } =
    runningUser || {};

  const todayRunning = myRunningApplicationList
    ? myRunningApplicationList.slice(0, 3).map((app) => app.title)
    : ['신청한 런닝이 없습니다.'];

  useEffect(() => {
    setLV(level! + 1);
  }, [level]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Box>
          <TopBar />
          <RunningState
            location={''}
            intendKM={''}
            title={''}
            date={''}
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
              {meetingData?.map(({ id, title, distance, startAt }) => (
                <MateBox
                  key={id}
                  distance={distance}
                  title={title}
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
