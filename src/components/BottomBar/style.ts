import styled from '@emotion/styled';
import Link from 'next/link';

export const Container = styled.div`
  height: 3.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.375rem 2.375rem;
  background: ${({ theme }) => theme.color.white};
  border-top: 0.0625rem solid ${({ theme }) => theme.color.gray[100]};
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
`;

export const Button = styled(Link)<{ isLocated: boolean }>`
  ${({ theme }) => theme.typo.caption2R};
  color: ${({ theme, isLocated }) =>
    isLocated ? theme.color.main2[800] : theme.color.main2[500]};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
`;
