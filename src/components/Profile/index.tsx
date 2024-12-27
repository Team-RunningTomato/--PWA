'use client';

import { KebabMenuIcon } from '@/assets';
import { ProfileType } from '@/types';

import * as S from './style';

const Profile = ({ name, level, kg, height }: ProfileType) => {
  return (
    <S.Wrapper>
      <S.ProfileContainer>
        <S.UserInfoContainer>
          <S.Name>{name}</S.Name>
          <S.StatsContainer>
            <S.StatItem>
              <S.Level>Lv {level}</S.Level>
            </S.StatItem>

            <S.StatItem>
              <S.Weight>{kg}kg</S.Weight>
            </S.StatItem>

            <S.StatItem border={false}>
              <S.Height>{height}cm</S.Height>
            </S.StatItem>
          </S.StatsContainer>
        </S.UserInfoContainer>
      </S.ProfileContainer>
      <S.Button>
        <KebabMenuIcon />
      </S.Button>
    </S.Wrapper>
  );
};

export default Profile;
