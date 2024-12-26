import styled from '@emotion/styled';

export const PositionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 22.5rem;
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 1rem;
`;

export const Container = styled.div`
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
