'use client';

import { SwipeIcon } from '@/assets';

import * as S from './style';

const RunningState = () => {
  return (
    <S.Wrapper>
      <S.TitleText>런닝 레벨</S.TitleText>
      <S.RunningStateContainer>
        <S.SwipeContainer></S.SwipeContainer>

        <S.SwipeHintBox>
          <S.SwipeText>옆으로 넘겨서 신청목록 확인</S.SwipeText>
          <SwipeIcon />
        </S.SwipeHintBox>
      </S.RunningStateContainer>
    </S.Wrapper>
  );
};
export default RunningState;
