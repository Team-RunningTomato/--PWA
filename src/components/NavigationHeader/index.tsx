'use client';

import Link from 'next/link';

import { BackArrowIcon } from '@/assets';

import * as S from './style';

interface HeaderProps {
  navigateUrl: string;
  title: string | undefined;
}

const NavigationHeader = ({ navigateUrl, title }: HeaderProps) => {
  return (
    <S.Wrapper>
      <S.LinkContainer>
        <Link href={navigateUrl}>
          <BackArrowIcon />
        </Link>
      </S.LinkContainer>
      <S.Text>{title}</S.Text>
    </S.Wrapper>
  );
};

export default NavigationHeader;
