'use client';

import Image from 'next/image';

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
        <Image
          src='/imgs/ProfileImg.png'
          alt='Profile Image'
          width={54}
          height={54}
          priority
        />
        <S.UserInfoContainer>
          <S.Name>{name}</S.Name>
          <S.StatsContainer>
            <S.TextContainer>
              <S.Text>Lv {level}</S.Text>
            </S.TextContainer>

            <S.TextContainer>
              <S.Text>{kg}kg</S.Text>
            </S.TextContainer>

            <S.HeightContainer>
              <S.Text>{height}cm</S.Text>
            </S.HeightContainer>
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
