'use client';

import { KebabMenuIcon } from '@/assets';

import * as S from './style';

interface ProfileProps {
  name: string;
  level: string;
  kg: string;
  height: string;
}

const Profile = ({ name, level, kg, height }: ProfileProps) => {
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
