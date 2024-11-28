'use client';

import { useState } from 'react';

import * as S from './style';

const TimeScrollBox = () => {
  const [startY, setStartY] = useState<number | null>(null);
  const [offset, setOffset] = useState(0);
  const [selected, setSelected] = useState<'AM' | 'PM'>('AM');

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setStartY(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (startY !== null) {
      const delta = e.clientY - startY;
      setOffset(delta);
    }
  };

  const handleMouseUp = () => {
    if (offset > 20) {
      setSelected('AM');
    } else if (offset < -20) {
      setSelected('PM');
    }

    setOffset(0);
    setStartY(null);
  };

  return (
    <S.Wrapper>
      <S.TextBox>
        <S.Text>시간</S.Text>
      </S.TextBox>
      <S.TimeBox>
        <S.AMPMBox
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{
            transform: `translateY(${offset}px)`,
            transition: startY === null ? 'transform 0.3s ease-out' : 'none',
          }}
        >
          <S.SelectText
            style={{
              color: selected === 'AM' ? '#000' : '#ccc',
            }}
          >
            오전
          </S.SelectText>
          <S.SelectText
            style={{
              color: selected === 'PM' ? '#000' : '#ccc',
            }}
          >
            오후
          </S.SelectText>
        </S.AMPMBox>
      </S.TimeBox>
    </S.Wrapper>
  );
};

export default TimeScrollBox;
