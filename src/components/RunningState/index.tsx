'use client';

import { RunningShoesIcon, SwipeIcon } from '@/assets';

import * as S from './style';

const RunningState = () => {
  return (
    <S.Wrapper>
      <S.TitleText>런닝 레벨</S.TitleText>
      <S.RunningStateContainer>
        <S.SwipeContainer>
          <S.SwipeBox>
            <S.LeftContent>
              <S.LeftBox>
                <S.LVImgBox>
                  <RunningShoesIcon />
                </S.LVImgBox>
                <S.LVText>Lv 1</S.LVText>
              </S.LeftBox>
            </S.LeftContent>

            <S.RunningHistoryBox>
              <S.HistoryContent>
                <S.HistoryTitle>총 거리</S.HistoryTitle>
                <S.KMText>15km</S.KMText>
              </S.HistoryContent>
            </S.RunningHistoryBox>
          </S.SwipeBox>
        </S.SwipeContainer>

        <S.SwipeHintBox>
          <S.SwipeText>옆으로 넘겨서 신청목록 확인</S.SwipeText>
          <SwipeIcon />
        </S.SwipeHintBox>
      </S.RunningStateContainer>
    </S.Wrapper>
  );
};
export default RunningState;
