'use client';

import Image from 'next/image';

import { NaverLoginButton } from '@/components';

import * as S from './style';

const logoImgSrc = '/imgs/loginPageLogo.png';

const LoginPage = () => {
  return (
    <S.Container>
      <S.LogoWrapper>
        <S.LogoBox>
          <Image src={logoImgSrc} alt='로고 이미지' fill />
        </S.LogoBox>
        <S.Description>
          러닝할래에서 사람들과의 경험을 나누고,
          <br />
          서로의 목표를 응원하세요.
        </S.Description>
      </S.LogoWrapper>
      <S.ButtonWrapper>
        <NaverLoginButton />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default LoginPage;
