'use client';

import { useDateStore } from '@/stores';

import React, { useEffect, useState } from 'react';

import * as S from './style';

interface DateItem {
  day: string;
  date: number;
}

const Calender: React.FC = () => {
  const { setSelectedDates } = useDateStore();

  const dates: DateItem[] = (() => {
    const dates: DateItem[] = [];
    const today = new Date();

    for (let i = 0; i < 8; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        day: date.toLocaleDateString('ko-KR', { weekday: 'short' }),
        date: date.getDate(),
      });
    }

    return dates;
  })();

  const today = new Date().getDate();
  const todayIndex = dates.findIndex((d) => d.date === today);

  const [startIndex, setStartIndex] = useState<number | null>(null);
  const [endIndex, setEndIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(todayIndex);
  const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const selectedDate = {
      month: new Date().getMonth() + 1,
      date: today,
    };
    setSelectedDates([selectedDate]);
  }, [setSelectedDates, today]);

  const handleMouseDown = (index: number) => {
    const timeout = setTimeout(() => {
      setStartIndex(index);
      setEndIndex(index);
      setIsDragging(true);
      setSelectedIndex(null);
    }, 150);

    setClickTimeout(timeout);
  };

  const handleMouseEnter = (index: number) => {
    if (isDragging) {
      setEndIndex(index);
    }
  };

  const handleMouseUp = (index: number) => {
    if (!isDragging) {
      setSelectedIndex(index);
      setStartIndex(null);
      setEndIndex(null);

      const selectedDate = {
        month: new Date().getMonth() + 1,
        date: dates[index].date,
      };
      setSelectedDates([selectedDate]);
    } else {
      const minIndex = Math.min(startIndex ?? 0, index);
      const maxIndex = Math.max(startIndex ?? 0, index);
      const selectedDates = dates
        .slice(minIndex, maxIndex + 1)
        .map(({ date }) => ({
          month: new Date().getMonth() + 1,
          date,
        }));

      setSelectedDates(selectedDates);
    }

    setIsDragging(false);

    if (clickTimeout) {
      clearTimeout(clickTimeout);
      setClickTimeout(null);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
      if (clickTimeout) {
        clearTimeout(clickTimeout);
        setClickTimeout(null);
      }
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [clickTimeout]);

  const getLinePosition = () => {
    if (startIndex === null || endIndex === null)
      return { left: '0', width: '0' };

    const boxWidth = 1.75;
    const boxGap = 1.0;
    const unitWidth = boxWidth + boxGap;

    const left = `${Math.min(startIndex, endIndex) * unitWidth}rem`;
    const width = `${
      (Math.abs(startIndex - endIndex) + 1) * boxWidth +
      Math.abs(startIndex - endIndex) * boxGap
    }rem`;

    return { left, width };
  };

  const firstDraggedIndex =
    startIndex !== null && endIndex !== null
      ? Math.min(startIndex, endIndex)
      : null;

  return (
    <S.Wrapper>
      <S.Title>날짜</S.Title>
      <S.GrayBar />
      <S.CalenderContainer>
        <S.DateContainer>
          {dates.map((d, idx) => (
            <S.DayOfWeekText key={`day-${idx}`}>{d.day}</S.DayOfWeekText>
          ))}
        </S.DateContainer>

        <S.DateContainer>
          <S.GreenLine {...getLinePosition()} />
          {dates.map(({ date }, idx) => (
            <S.DateBox
              key={`date-${idx}`}
              onMouseDown={() => handleMouseDown(idx)}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseUp={() => handleMouseUp(idx)}
              isSelected={selectedIndex === idx || firstDraggedIndex === idx}
            >
              <S.DateText
                isSelected={selectedIndex === idx || firstDraggedIndex === idx}
              >
                {date}
              </S.DateText>
            </S.DateBox>
          ))}
        </S.DateContainer>
        <S.TodayText>오늘</S.TodayText>
      </S.CalenderContainer>
    </S.Wrapper>
  );
};

export default Calender;
