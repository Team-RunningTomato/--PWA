'use client';

import Link from 'next/link';

import { LocationIcon } from '@/assets';

import * as S from './style';

interface MateBoxProps {
  distance: string;
  location: string;
  title: string;
  date: string;
  time: string;
}

const MateBox = ({ distance, location, title, date, time }: MateBoxProps) => {
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
          <S.TimeText>
            {date} / {time}
          </S.TimeText>
        </S.Container>
      </S.Wrapper>
    </Link>
  );
};

export default MateBox;
