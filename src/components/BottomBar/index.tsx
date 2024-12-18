'use client';

import { HomeIcon, JoinIcon, ProfileIcon, WingIcon } from '@/assets';

import * as S from './style';

const BottomBar = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.IconContainer>
          <S.IconBox>
            <HomeIcon />
          </S.IconBox>
          <S.Text>홈</S.Text>
        </S.IconContainer>

        <S.IconContainer>
          <S.IconBox>
            <WingIcon />
          </S.IconBox>
          <S.Text>측정</S.Text>
        </S.IconContainer>

        <S.IconContainer>
          <S.IconBox>
            <JoinIcon />
          </S.IconBox>
          <S.Text>모집</S.Text>
        </S.IconContainer>

        <S.IconContainer>
          <S.IconBox>
            <ProfileIcon />
          </S.IconBox>
          <S.Text>내 정보</S.Text>
        </S.IconContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default BottomBar;
