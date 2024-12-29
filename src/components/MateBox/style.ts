import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  padding: 0.75rem;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.white};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray[100]};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TimeText = styled.p`
  ${({ theme }) => theme.typo.caption1R};
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const RunningInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8125rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.body1B};
  color: ${({ theme }) => theme.color.black};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Distance = styled.p`
  ${({ theme }) => theme.typo.body2B};
  color: ${({ theme }) => theme.color.sneakers[1]};
`;

export const LocationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const LocationText = styled.p`
  ${({ theme }) => theme.typo.caption1R};
  color: ${({ theme }) => theme.color.gray[200]};
`;
