'use client';

import useTimeStore from '@/stores/timeStore';

import * as S from './style';

const TimeBox = () => {
  const { AMPM, hour, setAMPM, setHour, setMinute } = useTimeStore();

  const handleNumberInput = (
    e: React.FormEvent<HTMLInputElement>,
    max: number
  ) => {
    let value = e.currentTarget.value.replace(/[^0-9]/g, '');

    if (Number(value) > max) value = max.toString();

    if (value.length === 1) {
      value = `0${value}`;
    } else if (value.length > 2) {
      value = value.slice(-2);
    }

    e.currentTarget.value = value;
    return value ? Number(value) : null;
  };

  const handleHourInput = (e: React.FormEvent<HTMLInputElement>) => {
    const value = handleNumberInput(e, 12);
    setHour(value);
  };

  const handleMinuteInput = (e: React.FormEvent<HTMLInputElement>) => {
    const max = hour === 12 ? 0 : 59;
    const value = handleNumberInput(e, max);
    setMinute(value);
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
