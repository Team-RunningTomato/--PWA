'use client';

import { BottomBar, MateBox, Profile, RunningLevelBox } from '@/components';
import { useGetMyInfo, useGetMyMateInfo } from '@/hooks';

import * as S from './style';

const MyPage = () => {
  const { data: myInfo } = useGetMyInfo();

  const { data: myMateInfo } = useGetMyMateInfo();

  const { name, weight, height, runningUser } = myInfo || {};
  const { totalDistance, bestDistance, worstDistance, levelPercentage, level } =
    runningUser || {};

  return (
    <S.Wrapper>
      <S.Container>
        <Profile
          name={name ?? ''}
          level={level ?? 0}
          kg={weight ?? ''}
          height={height ?? ''}
        />
        <RunningLevelBox
          totalDistance={totalDistance ?? 0}
          longestDistance={bestDistance ?? 0}
          shortestDistance={worstDistance ?? 0}
          percent={levelPercentage ?? 0}
        />
        <S.MateWrapper>
          <S.Title>내가 모집한 런닝</S.Title>
          <S.MateContainer>
            {myMateInfo?.map(({ title, distance, startAt }, index) => (
              <MateBox
                key={index}
                distance={distance}
                title={title}
                time={startAt}
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
