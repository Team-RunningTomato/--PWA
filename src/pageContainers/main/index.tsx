'use client';

import {
  BottomBar,
  MateCard,
  RunningState,
  SelectFilter,
  TopBar,
} from '@/components';
import { MateCardType, RunningStateType } from '@/types';

import * as S from './style';

interface MainPageProps {
  runningStateData: RunningStateType;
  mateBoxData: MateCardType[];
}

const MainPage = ({ runningStateData, mateBoxData }: MainPageProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Box>
          <TopBar />
          <RunningState {...runningStateData} />
          <S.RecruitWrapper>
            <S.RecruitContainer>
              <S.RecruitText>런닝 모집</S.RecruitText>
              <SelectFilter />
            </S.RecruitContainer>
            <S.RecruitBox>
              {mateBoxData.map((item, index) => (
                <MateCard key={index} {...item} />
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
