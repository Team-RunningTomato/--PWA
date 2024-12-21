'use client';

import Link from 'next/link';

import { BackArrowIcon } from '@/assets';

import * as S from './style';

interface HeaderProps {
  navigateUrl: string;
  title?: string;
}

const NavigationHeader = ({ navigateUrl, title }: HeaderProps) => {
  return (
    <S.PositionWrapper>
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
    </S.PositionWrapper>
  );
};

export default NavigationHeader;
