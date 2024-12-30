'use client';

import { usePathname } from 'next/navigation';

import { HomeIcon, PencilIcon, ProfileIcon, WingIcon } from '@/assets';
import { Path } from '@/types';

import * as S from './style';

const BottomBar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      icon: <HomeIcon isFill={pathname === Path.MAIN} />,
      text: '홈',
      path: Path.MAIN,
    },
    {
      icon: <WingIcon isFill={pathname === Path.MEASUREMENT} />,
      text: '측정',
      path: Path.MEASUREMENT,
    },
    {
      icon: <PencilIcon isFill={pathname === Path.MATE} />,
      text: '모집',
      path: Path.MATE,
    },
    {
      icon: <ProfileIcon isFill={pathname === Path.MYPAGE} />,
      text: '내 정보',
      path: Path.MYPAGE,
    },
  ];

  return (
    <S.Container>
      {menuItems.map(({ icon, text, path }, index) => (
        <S.Button isLocated={path === pathname} href={path} key={index}>
          {icon}
          {text}
        </S.Button>
      ))}
    </S.Container>
  );
};

export default BottomBar;
