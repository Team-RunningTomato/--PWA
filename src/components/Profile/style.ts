import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const Name = styled.p`
  ${({ theme }) => theme.typo.caption1B};
  color: ${({ theme }) => theme.color.black};
`;

export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  padding: 0rem 0.5rem;
  justify-content: center;
  align-items: center;
  border-right: 0.0625rem solid ${({ theme }) => theme.color.gray[100]};
`;

export const HeightContainer = styled.div`
  display: flex;
  padding: 0rem 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  ${({ theme }) => theme.typo.caption1R};
  color: ${({ theme }) => theme.color.gray[300]};
`;

export const Button = styled.button`
  height: 1.5rem;
`;
