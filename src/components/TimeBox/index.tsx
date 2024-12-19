'use client';

import { useState } from 'react';

import * as S from './style';

const TimeBox = () => {
  const [AMPM, setAMPM] = useState<'AM' | 'PM' | null>(null);
  const [hour, setHour] = useState<number | null>(null);

  const handleNumberInput = (
    e: React.FormEvent<HTMLInputElement>,
    max: number
  ) => {
    let value = e.currentTarget.value.replace(/[^0-9]/g, '');

    if (Number(value) > max) value = max.toString();

    value = value.padStart(2, '0').slice(-2);

    e.currentTarget.value = value;
    return value ? Number(value) : null;
  };

  const handleHourInput = (e: React.FormEvent<HTMLInputElement>) => {
    const value = handleNumberInput(e, 12);
    setHour(value);
  };

  const handleMinuteInput = (e: React.FormEvent<HTMLInputElement>) => {
    const max = hour === 12 ? 0 : 59;
    handleNumberInput(e, max);
  };

  return (
    <S.Wrapper>
      <S.TimeText>시간</S.TimeText>
      <S.TimeBox>
        <S.AMPMBox>
          <S.AMPMText selected={AMPM === 'AM'} onClick={() => setAMPM('AM')}>
            오전
          </S.AMPMText>
          <S.AMPMText selected={AMPM === 'PM'} onClick={() => setAMPM('PM')}>
            오후
          </S.AMPMText>
        </S.AMPMBox>

        <S.MinuteBox>
          <S.MinuteInput
            type='text'
            placeholder='00'
            onInput={handleHourInput}
          />
          <S.MiddleText>:</S.MiddleText>
          <S.MinuteInput
            type='text'
            placeholder='00'
            onInput={handleMinuteInput}
          />
        </S.MinuteBox>
      </S.TimeBox>
    </S.Wrapper>
  );
};

export default TimeBox;
