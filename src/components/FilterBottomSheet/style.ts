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
  background: ${({ theme }) => theme.color.white};
  overflow: hidden;
`;

export const Options = styled.button`
  display: flex;
  padding: 1rem 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.color.main[200]};
  }

  &:active {
    background: ${({ theme }) => theme.color.main[200]};
  }
`;

export const Text = styled.p<{ isCancle?: boolean }>`
  ${({ theme }) => theme.typo.body2R};
  color: ${({ theme, isCancle = false }) =>
    isCancle ? theme.color.error : theme.color.black};
`;
