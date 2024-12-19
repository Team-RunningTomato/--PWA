'use client';

import { useRouter } from 'next/router';

import { HomeIcon, JoinIcon, ProfileIcon, WingIcon } from '@/assets';

import * as S from './style';

const BottomBar = () => {
  const { push } = useRouter();

  const menuItems = [
    { icon: <HomeIcon />, text: '홈', path: '/' },
    { icon: <WingIcon />, text: '측정', path: '/measure' },
    { icon: <JoinIcon />, text: '모집', path: '/recruit' },
    { icon: <ProfileIcon />, text: '내 정보', path: '/profile' },
  ];

  const handleNavigation = (path: string) => {
    push(path);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Box>
          {menuItems.map((item, index) => (
            <S.IconContainer
              key={index}
              onClick={() => handleNavigation(item.path)}
            >
              <S.IconBox>{item.icon}</S.IconBox>
              <S.Text>{item.text}</S.Text>
            </S.IconContainer>
          ))}
        </S.Box>
      </S.Container>
    </S.Wrapper>
  );
};

export default BottomBar;
