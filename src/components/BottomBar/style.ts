import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0.375rem 2.375rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
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
