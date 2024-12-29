'use client';

import { NaverLogo } from '@/assets';

import * as S from './style';

const NaverLoginButton = () => (
  <S.Button href={`${process.env.NEXT_PUBLIC_NAVER_LOGIN_URL}`}>
    <NaverLogo />
    네이버로 시작하기
  </S.Button>
);

export default NaverLoginButton;
