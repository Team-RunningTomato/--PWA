import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 22.5rem;
  flex-direction: column;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  padding: 1rem;
  background: ${({ theme }) => theme.color.white};
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.125rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
