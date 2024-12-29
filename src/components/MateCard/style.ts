import styled from '@emotion/styled';
import Link from 'next/link';

export const Container = styled(Link)`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray[100]};
  display: flex;
  width: 20.5rem;
  flex-direction: column;
  gap: 0.625rem;

  :active {
    border: 0.0625rem solid ${({ theme }) => theme.color.main[700]};
  }

  @media (max-width: 359px) {
    width: 100%;
  }
`;

export const TimeText = styled.p`
  ${({ theme }) => theme.typo.caption1R};
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.body1B};
  color: ${({ theme }) => theme.color.black};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Distance = styled.p`
  ${({ theme }) => theme.typo.body2B};
  color: ${({ theme }) => theme.color.sneakers[1]};
`;

export const BottomBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;
