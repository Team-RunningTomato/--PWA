'use client';

import { CheckIcon, XIcon } from '@/assets';

import * as S from './style';

interface AlarmProps {
  name: string;
  title: string;
  isApplied: boolean;
}

const Alarm = ({ name, title, isApplied }: AlarmProps) => {
  return (
    <S.Wrapper>
      <S.AlarmContainer>
        <div>{isApplied ? <CheckIcon /> : <XIcon />}</div>
        <S.AlarmContent>
          <S.Title>
            {name}님의 &quot;{title}&quot; 신청을 {isApplied ? '성공' : '실패'}{' '}
            하였습니다.
          </S.Title>
          <S.GuideText>런닝 페이지에서 확인해주세요</S.GuideText>
        </S.AlarmContent>
      </S.AlarmContainer>
    </S.Wrapper>
  );
};

export default Alarm;
