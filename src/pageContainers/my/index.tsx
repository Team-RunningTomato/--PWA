'use client';

import { BottomBar, MateBox, Profile, RunningLevelBox } from '@/components';
import { useGetMyInfo, useGetMyMateInfo } from '@/hooks';
import { MateBoxType } from '@/types';

import * as S from './style';

interface MyPageProps {
  mateBoxData: MateBoxType[];
}

const MyPage = ({ mateBoxData }: MyPageProps) => {
  const { data: myInfo } = useGetMyInfo();

  const { data: myMateInfo } = useGetMyMateInfo();

  const { name, weight, height, runningUser } = myInfo || {};
  const { totalDistance, bestDistance, worstDistance, levelPercentage, level } =
    runningUser || {};

  const { title, distance, startAt, startLocation } = myMateInfo || {};
  const { startLongitude, startLatitude } = startLocation || {};

  console.log(myMateInfo);

  return (
    <S.Wrapper>
      <S.Container>
        <Profile name={name!} level={level!} kg={weight!} height={height!} />
        <RunningLevelBox
          totalDistance={totalDistance!}
          longestDistance={bestDistance!}
          shortestDistance={worstDistance!}
          percent={levelPercentage!}
        />
        <S.MateWrapper>
          <S.Title>내가 모집한 런닝</S.Title>
          <S.MateContainer>
            {mateBoxData.map((item, index) => (
              <MateBox key={index} {...item} />
            ))}
          </S.MateContainer>
        </S.MateWrapper>
        <BottomBar />
      </S.Container>
    </S.Wrapper>
  );
};

export default MyPage;
