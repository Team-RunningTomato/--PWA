'use client';

import { CheckIcon, XIcon } from '@/assets';

import * as S from './style';

interface AlarmProps {
  title: string;
  isApplied: boolean;
}

const Alarm = ({ title, isApplied }: AlarmProps) => {
  return (
    <S.Wrapper>
      <S.AlarmContainer>
        <div>{isApplied ? <CheckIcon /> : <XIcon />}</div>
        <S.AlarmContent>
          <S.Title>{title}</S.Title>
          <S.GuideText>런닝 페이지에서 확인해주세요</S.GuideText>
        </S.AlarmContent>
      </S.AlarmContainer>
    </S.Wrapper>
  );
};

export default Alarm;
