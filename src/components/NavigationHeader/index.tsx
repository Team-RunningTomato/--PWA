'use client';

import { useRouter } from 'next/router';

import { LeftArrow } from '@/assets';

import * as S from './style';

interface HeaderProps {
  navigateUrl: string;
  title: string;
}

const NavigationHeader = ({ navigateUrl, title }: HeaderProps) => {
  const { push } = useRouter();
  return (
    <S.Wrapper>
      <S.Button onClick={() => push(navigateUrl)}>
        <LeftArrow />
      </S.Button>
      <S.Text>{title}</S.Text>
    </S.Wrapper>
  );
};

export default NavigationHeader;
