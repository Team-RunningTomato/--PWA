'use client';

import { ClockIcon } from '@/assets';

import * as S from './style';

interface MeasurementButtonProps {
  state: 'on' | 'off';
  url: string;
}

const MeasurementButton = ({ state, url }: MeasurementButtonProps) => {
  return (
    <S.Button href={url} isOn={state === 'on'}>
      <ClockIcon />
      측정
    </S.Button>
  );
};

export default MeasurementButton;
