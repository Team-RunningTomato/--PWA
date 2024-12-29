'use client';

import Link from 'next/link';

import { BackArrowIcon } from '@/assets';
import { Path } from '@/types';

import * as S from './style';

interface HeaderProps {
  navigateUrl: Path;
  title?: string;
}

const NavigationHeader = ({ navigateUrl, title }: HeaderProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.LinkContainer>
          <Link href={navigateUrl}>
            <BackArrowIcon />
          </Link>
        </S.LinkContainer>
        <S.Text>{title}</S.Text>
      </S.Container>
    </S.Wrapper>
  );
};

export default NavigationHeader;
