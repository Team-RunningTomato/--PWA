'use client';

import { DetailLocationIcon } from '@/assets';
import { Button, Input, MateBottomSheet, NavigationHeader } from '@/components';
import { useDateStore, useMateSheetStore, useTimeStore } from '@/stores';

import { useState } from 'react';

import * as S from './style';

const MatePage = () => {
  const { isMateSheetOpen, openMateSheet } = useMateSheetStore();
  const { selectedDates } = useDateStore();
  const { AMPM, hour, minute } = useTimeStore();

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const formatDate = (month: number, date: number) => `${month}월 ${date}일`;

  const isNull = AMPM === null || hour === null || minute === null;

  const formatTime = (
    AMPM: string | null,
    hour: number | null,
    minute: number | null
  ) => {
    const period = AMPM === 'AM' ? '오전' : '오후';
    const formattedHour = hour?.toString().padStart(2, '0');
    const formattedMinute = minute?.toString().padStart(2, '0');
    return `${period} ${formattedHour}시 ${formattedMinute}분`;
  };

  const renderDateRange = () => {
    if (isClicked === true && isNull === false) {
      if (selectedDates.length === 1) {
        const { month, date } = selectedDates[0];
        return `${formatDate(month, date)} ${formatTime(AMPM, hour, minute)}`;
      } else if (selectedDates.length > 1) {
        const { month: startMonth, date: startDate } = selectedDates[0];
        const { month: endMonth, date: endDate } =
          selectedDates[selectedDates.length - 1];
        return `${formatDate(startMonth, startDate)} - ${formatDate(endMonth, endDate)}`;
      }
    }
    return '만날 시간을 입력해주세요.';
  };

  const handleBottomSheet = () => {
    if (
      selectedDates.length !== 0 &&
      AMPM !== null &&
      hour !== null &&
      minute !== null
    ) {
      setIsClicked(true);
    }
  };

  return (
    <>
      <NavigationHeader navigateUrl={'/'} title={'런닝 모집하기'} />
      <S.Wrapper>
        <Input inputTitle='제목' placeholder='제목을 입력해주세요.' />
        <S.InputContainer>
          <Input
            inputTitle='장소'
            placeholder='위치를 알려주세요.'
            icon={<DetailLocationIcon />}
          />
          <Input placeholder='상세주소를 알려주세요.' />
        </S.InputContainer>
        <Input
          inputTitle='거리'
          placeholder='런닝 거리 입력해주세요.'
          unit={'km'}
        />
        <S.ButtonContainer>
          <S.Title>약속</S.Title>
          <S.Button onClick={openMateSheet}>{renderDateRange()}</S.Button>
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
      {isMateSheetOpen && <MateBottomSheet onClick={handleBottomSheet} />}
    </>
  );
};

export default MatePage;
