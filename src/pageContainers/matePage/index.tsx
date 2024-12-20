'use client';

import { DetailLocationIcon } from '@/assets';
import { Button, Input, MateBottomSheet, NavigationHeader } from '@/components';
import { useMateSheetStore } from '@/stores';

import * as S from './style';

const MatePage = () => {
  const { isMateSheetOpen, openMateSheet } = useMateSheetStore();

  return (
    <>
      <NavigationHeader navigateUrl={'/'} title={'런닝 모집하기'} />
      <S.Wrapper>
        <Input inputTitle='제목' placeholder='제목을 입력해주세요.' />
        <S.InputContainer>
          <Input
            inputTitle='장소'
            placeholder='상세 주소를 알려주세요.'
            rightArea={<DetailLocationIcon />}
          />
          <Input placeholder='장소를 알려주세요.' />
        </S.InputContainer>
        <Input
          inputTitle='거리'
          placeholder='런닝 거리 입력해주세요.'
          rightArea={<S.RightText>km</S.RightText>}
        />
        <S.ButtonContainer>
          <S.Title>약속</S.Title>
          <S.Button onClick={openMateSheet}>만날 시간을 입력해주세요.</S.Button>
        </S.ButtonContainer>
        <S.ButtonWrapper>
          <Button
            title={'확인'}
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </S.ButtonWrapper>
      </S.Wrapper>
      {isMateSheetOpen && <MateBottomSheet />}
    </>
  );
};

export default MatePage;
