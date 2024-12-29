import styled from '@emotion/styled';
import Link from 'next/link';

export const Button = styled(Link)<{ isOn: boolean }>`
  ${({ theme }) => theme.typo.caption2R};
  color: ${({ theme, isOn }) =>
    isOn ? theme.color.main2[800] : theme.color.gray[500]};
  border: 0.0625rem solid
    ${({ theme, isOn }) =>
      isOn ? theme.color.main[500] : theme.color.gray[500]};
  background-color: ${({ theme, isOn }) =>
    isOn ? theme.color.main[500] : 'transparent'};
  width: 3.875rem;
  height: 1.625rem;
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  align-items: center;
  border-radius: 0.5rem;

  .clock {
    stroke: ${({ theme, isOn }) =>
      isOn ? theme.color.main2[800] : theme.color.gray[500]};
  }
`;
