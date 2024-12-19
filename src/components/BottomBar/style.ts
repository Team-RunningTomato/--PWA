import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0.375rem 2.375rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 10;
  background: ${({ theme }) => theme.color.white};
  border-top: 0.0625rem solid ${({ theme }) => theme.color.gray[100]};
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const IconContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
`;

export const IconBox = styled.div`
  display: flex;
  padding: 0.1875rem 0.25rem;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  ${({ theme }) => theme.typo.caption2R};
  color: ${({ theme }) => theme.color.main2[800]};
`;
