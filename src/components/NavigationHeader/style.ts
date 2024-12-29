import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 22.5rem;
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 3.25rem;
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
