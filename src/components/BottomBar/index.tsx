'use client';

import { HomeIcon, JoinIcon, ProfileIcon, WingIcon } from '@/assets';

import * as S from './style';

const BottomBar = () => {
  const menuItems = [
    { icon: <HomeIcon />, text: '홈' },
    { icon: <WingIcon />, text: '측정' },
    { icon: <JoinIcon />, text: '모집' },
    { icon: <ProfileIcon />, text: '내 정보' },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        {menuItems.map((item, index) => (
          <S.IconContainer key={index}>
            <S.IconBox>{item.icon}</S.IconBox>
            <S.Text>{item.text}</S.Text>
          </S.IconContainer>
        ))}
      </S.Container>
    </S.Wrapper>
  );
};

export default BottomBar;
