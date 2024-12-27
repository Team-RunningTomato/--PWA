'use client';

import { BottomBar, MateBox, Profile, RunningLevelBox } from '@/components';
import { MateBoxType, ProfileType, RunningLevelBoxType } from '@/types';

import * as S from './style';

interface MyPageProps {
  profileData: ProfileType;
  runningLevelBoxData: RunningLevelBoxType;
  mateBoxData: MateBoxType[];
}

const MyPage = ({
  profileData,
  runningLevelBoxData,
  mateBoxData,
}: MyPageProps) => {
  return (
    <>
      <S.Wrapper>
        <Profile {...profileData} />
        <RunningLevelBox {...runningLevelBoxData} />
        <S.MateWrapper>
          <S.Title>내가 모집한 런닝</S.Title>
          <S.MateContainer>
            {mateBoxData.map((item, index) => (
              <MateBox key={index} {...item} />
            ))}
          </S.MateContainer>
        </S.MateWrapper>
      </S.Wrapper>
      <BottomBar />
    </>
  );
};

export default MyPage;
