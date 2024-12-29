'use client';

import {
  AlarmIcon,
  RunningHallaeIcon,
  RunningHallaeText,
  SearchIcon,
} from '@/assets';

import * as S from './style';

const TopBar = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.LogoContainer>
          <S.LogoBox>
            <RunningHallaeIcon />
          </S.LogoBox>
          <RunningHallaeText />
        </S.LogoContainer>
        <S.IconContainer>
          <S.Button>
            <SearchIcon />
          </S.Button>
          <S.Button>
            <AlarmIcon />
          </S.Button>
        </S.IconContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default TopBar;
