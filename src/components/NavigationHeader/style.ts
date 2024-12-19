import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 3.75rem;
`;

export const Text = styled.h1`
  ${({ theme }) => theme.typo.title3R};
  color: ${({ theme }) => theme.color.black};
`;

export const Button = styled.button`
  height: 2.25rem;
`;
