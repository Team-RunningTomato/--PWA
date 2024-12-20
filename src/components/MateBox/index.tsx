'use client';

import Link from 'next/link';

import { LocationIcon } from '@/assets';
import MateBoxType from '@/types/mateBoxType';
import { formatDate } from '@/utils';

import * as S from './style';

const MateBox = ({ distance, location, title, time }: MateBoxType) => {
  return (
    <Link href={''}>
      <S.Wrapper>
        <S.Container>
          <S.MainBox>
            <S.RunningInfoBox>
              <S.Distance>{distance}km</S.Distance>
              <S.LocationBox>
                <LocationIcon />
                <S.LocationText>{location}</S.LocationText>
              </S.LocationBox>
            </S.RunningInfoBox>
            <S.Title>{title}</S.Title>
          </S.MainBox>
          <S.TimeText>{formatDate(time)}</S.TimeText>
        </S.Container>
      </S.Wrapper>
    </Link>
  );
};

export default MateBox;
