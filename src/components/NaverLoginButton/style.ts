import styled from '@emotion/styled';
import Link from 'next/link';

export const Button = styled(Link)`
  ${({ theme }) => theme.typo.body2B};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.naver};
  width: 20.5rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;
