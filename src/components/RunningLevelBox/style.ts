import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 1.125rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.title3B};
  color: ${({ theme }) => theme.color.black};
`;

export const Container = styled.div`
  display: flex;
  padding: 0.875rem;
  flex-direction: column;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray[100]};
  background: ${({ theme }) => theme.color.white};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MiniCircleBox = styled.div`
  display: flex;
  position: relative;
  width: 9rem;
  height: 9rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HistoryBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 8.75rem;
`;

export const Contents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Inventory = styled.p`
  ${({ theme }) => theme.typo.caption1R};
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const KM = styled.p`
  ${({ theme }) => theme.typo.caption2B};
  color: ${({ theme }) => theme.color.black};
`;

export const ShoesBox = styled.div`
  display: flex;
  bottom: 2.5%;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

export const Percent = styled.p`
  ${({ theme }) => theme.typo.caption2B};
  color: ${({ theme }) => theme.color.white};
`;
