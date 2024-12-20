'use client';

import { DetailLocationIcon } from '@/assets';
import { Button, Input, MateBottomSheet, NavigationHeader } from '@/components';
import { useDateStore, useMateSheetStore } from '@/stores';

import { useState } from 'react';

import * as S from './style';

const MatePage = () => {
  const { isMateSheetOpen, openMateSheet } = useMateSheetStore();
  const { selectedDates } = useDateStore();

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const formatDate = (month: number, date: number) => `${month}월 ${date}일`;

  const renderDateRange = () => {
    if (selectedDates.length === 1) {
      const { month, date } = selectedDates[0];
      return formatDate(month, date);
    } else if (selectedDates.length > 1) {
      const { month: startMonth, date: startDate } = selectedDates[0];
      const { month: endMonth, date: endDate } =
        selectedDates[selectedDates.length - 1];
      return `${formatDate(startMonth, startDate)} - ${formatDate(endMonth, endDate)}`;
    }
    return '만날 시간을 입력해주세요.';
  };

  console.log(renderDateRange());

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
          <S.Button onClick={openMateSheet}>{renderDateRange()}</S.Button>
        </S.ButtonContainer>
        <S.ButtonWrapper>
          <Button title={'확인'} onClick={() => setIsClicked(true)} />
        </S.ButtonWrapper>
      </S.Wrapper>
      {isMateSheetOpen && <MateBottomSheet />}
    </>
  );
};

export default MatePage;
