import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
`;

export const Title = styled.p`
  display: inline;
  ${({ theme }) => theme.typo.body1B}
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 0.375rem;
`;

export const ErrorMessage = styled.p`
  height: 1.125rem;
  ${({ theme }) => theme.typo.caption2R};
  color: ${({ theme }) => theme.color.error};
`;

export const SuccessMessage = styled.p`
  height: 1.125rem;
  ${({ theme }) => theme.typo.caption2R};
  color: ${({ theme }) => theme.color.success};
`;
