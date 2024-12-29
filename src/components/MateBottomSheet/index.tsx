'use client';

import { Button, Calender, TimeBox } from '@/components';
import { useMateSheetStore } from '@/stores';

import * as S from './style';

interface MateBottomSheet {
  onClick: () => void;
}

const MateBottomSheet = ({ onClick }: MateBottomSheet) => {
  const { closeMateSheet } = useMateSheetStore();

  const MateSheetHandler = () => {
    onClick();
    closeMateSheet();
  };

  return (
    <S.Backdrop>
      <S.Wrapper>
        <S.Container>
          <S.Box>
            <Calender />
            <TimeBox />
          </S.Box>
          <Button title={'확인'} onClick={MateSheetHandler} />
        </S.Container>
      </S.Wrapper>
    </S.Backdrop>
  );
};

export default MateBottomSheet;
