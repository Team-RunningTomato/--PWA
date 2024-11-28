'use client';

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
  );
};

export default MateBox;
