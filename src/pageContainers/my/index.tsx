'use client';

import { BottomBar, MateCard, Profile, RunningLevelBox } from '@/components';
import { useGetMyInfo, useGetMyMateInfo } from '@/hooks';
import { Path } from '@/types';

import * as S from './style';

const MyPage = () => {
  const { data: myInfo } = useGetMyInfo();

  const { data: myMateInfo } = useGetMyMateInfo();

  const { name, weight, height, runningUser } = myInfo || {};
  const {
    totalDistance,
    longestDistance,
    shortestDistance,
    levelPercentage,
    level,
  } = runningUser || {};

  const defaultString = '';
  const defaultNumber = 0;

  return (
    <S.Wrapper>
      <S.Container>
        <Profile
          name={name ?? defaultString}
          level={level ?? defaultNumber}
          kg={weight ?? defaultString}
          height={height ?? defaultString}
        />
        <RunningLevelBox
          totalDistance={totalDistance ?? defaultNumber}
          longestDistance={longestDistance ?? defaultNumber}
          shortestDistance={shortestDistance ?? defaultNumber}
          percent={levelPercentage ?? defaultNumber}
        />
        <S.MateWrapper>
          <S.Title>내가 모집한 런닝</S.Title>
          <S.MateContainer>
            {myMateInfo?.map((mate) => (
              <MateCard
                url={`${Path.MATE}/${mate.id}`}
                key={mate.id}
                {...mate}
              />
            ))}
          </S.MateContainer>
        </S.MateWrapper>
        <BottomBar />
      </S.Container>
    </S.Wrapper>
  );
};

export default MyPage;
