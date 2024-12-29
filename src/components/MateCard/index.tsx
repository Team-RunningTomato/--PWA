'use client';

import { MeasurementButton } from '@/components';
import { MateCardType } from '@/types';
import { formatDate } from '@/utils';

import * as S from './style';

const MateCard = ({
  distance,
  title,
  startAt,
  isApplied,
  url,
}: MateCardType) => {
  return (
    <S.Container href={url}>
      <S.Distance>{distance}km</S.Distance>
      <S.Title>{title}</S.Title>
      <S.BottomBox>
        <S.TimeText>{formatDate(startAt)}</S.TimeText>
        {isApplied && <MeasurementButton state='on' url={url} />}
      </S.BottomBox>
    </S.Container>
  );
};

export default MateCard;
