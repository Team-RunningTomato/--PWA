'use client';

import {
  BottomBar,
  MateBox,
  RunningState,
  SelectFilter,
  TopBar,
} from '@/components';
import { MateBoxType, RunningStateType } from '@/types';

import * as S from './style';

interface MainPageProps {
  recruitData: MateBoxType[];
  runningState: RunningStateType;
}

const MainPage = ({ recruitData, runningState }: MainPageProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Box>
          <TopBar />
          <RunningState {...runningState} />
          <S.RecruitWrapper>
            <S.RecruitContainer>
              <S.RecruitText>런닝 모집</S.RecruitText>
              <SelectFilter />
            </S.RecruitContainer>
            <S.RecruitBox>
              {recruitData.map((item, index) => (
                <MateBox key={index} {...item} />
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
