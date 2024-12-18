import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TitleText = styled.p`
  width: 8.125rem;
  ${({ theme }) => theme.typo.body1B};
  color: ${({ theme }) => theme.color.black};
`;

export const RunningStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

export const SwipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
`;

export const SwipeHintBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const SwipeText = styled.p`
  ${({ theme }) => theme.typo.caption2R};
  color: ${({ theme }) => theme.color.gray[400]};
`;
