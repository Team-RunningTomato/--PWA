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
  background: #1c1c1c;
  padding-right: 1.5rem;
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

export const SwipeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;
`;

export const LeftContent = styled.div`
  display: flex;
  padding: 2rem 1.5rem;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray[100]};
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0.25rem 0.25rem 0.375rem 0rem rgba(0, 0, 0, 0.24);
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const LVImgBox = styled.div`
  display: flex;
  width: 5.125rem;
  height: 2.375rem;
  padding: 0.25rem 0.4375rem 0.28025rem 0.375rem;
  justify-content: center;
  align-items: center;
`;

export const LVText = styled.h1`
  ${({ theme }) => theme.typo.title1};
  color: #121212;
`;

export const RunningHistoryBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.75rem;
`;

export const HistoryContent = styled.div`
  display: flex;
  width: 9.125rem;
  justify-content: space-between;
  align-items: center;
`;

export const HistoryTitle = styled.p`
  ${({ theme }) => theme.typo.caption1R};
  color: ${({ theme }) => theme.color.white};
`;

export const KMText = styled.p`
  ${({ theme }) => theme.typo.caption2B};
  color: ${({ theme }) => theme.color.gray[300]};
`;
