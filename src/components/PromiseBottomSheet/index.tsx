'use client';

import { Button, Calender, TimeBox } from '@/components';
import usePromiseSheetStore from '@/stores/pomiseSheetStore';

import * as S from './style';

const PromiseBottomSheet = () => {
  const { closePromiseSheet } = usePromiseSheetStore();

  return (
    <S.Backdrop>
      <S.Wrapper>
        <S.Container>
          <S.Box>
            <Calender />
            <TimeBox />
          </S.Box>
          <Button title={'확인'} onClick={closePromiseSheet} />
        </S.Container>
      </S.Wrapper>
    </S.Backdrop>
  );
};

export default PromiseBottomSheet;
