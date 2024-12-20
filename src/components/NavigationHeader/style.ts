import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 2.75rem;
`;

export const Text = styled.h1`
  ${({ theme }) => theme.typo.title3R};
  color: ${({ theme }) => theme.color.black};
`;

export const LinkContainer = styled.div`
  position: absolute;
  left: 0;
  height: 2.25rem;
`;
