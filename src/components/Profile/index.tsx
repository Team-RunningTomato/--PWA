'use client';

import Image from 'next/image';

import { KebabMenuIcon } from '@/assets';

import * as S from './style';

interface ProfileProps {
  name: string;
}

const Profile = ({ name }: ProfileProps) => {
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
              <S.Text>Lv 1</S.Text>
            </S.TextContainer>

            <S.TextContainer>
              <S.Text>00kg</S.Text>
            </S.TextContainer>

            <S.HeightContainer>
              <S.Text>000cm</S.Text>
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
