import { useState } from 'react';

import * as S from './style';

const TimeDial = () => {
  const [startY, setStartY] = useState<number | null>(null);
  const [offset, setOffset] = useState(0);
  const [selected, setSelected] = useState<'AM' | 'PM'>('AM');

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setStartY(clientY);
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (startY !== null) {
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const delta = clientY - startY;
      setOffset(delta);
    }
  };

  const handleEnd = () => {
    if (offset > 10) {
      setSelected('AM');
    } else if (offset < -10) {
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
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
          style={{
            transform: `translateY(${offset + (selected === 'AM' ? 0 : -45)}px)`,
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

export default TimeDial;
