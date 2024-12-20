'use client';

import { Button, Calender, TimeBox } from '@/components';
import { useMateSheetStore } from '@/stores';

import * as S from './style';

const MateBottomSheet = () => {
  const { closeMateSheet } = useMateSheetStore();

  return (
    <S.Backdrop>
      <S.Wrapper>
        <S.Container>
          <S.Box>
            <Calender />
            <TimeBox />
          </S.Box>
          <Button title={'확인'} onClick={closeMateSheet} />
        </S.Container>
      </S.Wrapper>
    </S.Backdrop>
  );
};

export default MateBottomSheet;
