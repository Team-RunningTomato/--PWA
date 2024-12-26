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
  ${({ theme }) => theme.typo.title2B};
  color: ${({ theme }) => theme.color.black};
`;

export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StatItem = styled.div<{ border?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ border = true, theme }) =>
    border && `border-right: 0.0625rem solid ${theme.color.gray[100]};`}

  &:last-child {
    border-right: none;
  }
`;

const BaseStatText = styled.p`
  ${({ theme }) => theme.typo.caption1R};
  color: ${({ theme }) => theme.color.gray[300]};
  padding: 0rem 0.5rem;
`;

export const Level = styled(BaseStatText)`
  padding-left: 0;
`;
export const Weight = styled(BaseStatText)``;
export const Height = styled(BaseStatText)``;

export const Button = styled.button`
  height: 1.5rem;
`;
