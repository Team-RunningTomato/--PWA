import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typo.body1B};
  color: ${({ theme }) => theme.color.black};
`;

export const GrayBar = styled.div`
  width: 20.5rem;
  height: 0.0625rem;
  background: ${({ theme }) => theme.color.gray[100]};
`;

export const CalenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const DayOfWeekText = styled.p`
  width: 1.75rem;
  text-align: center;
  ${({ theme }) => theme.typo.caption2R};
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const GreenLine = styled.div<{ left: string; width: string }>`
  position: absolute;
  height: 1.75rem;
  background-color: ${({ theme }) => theme.color.main[400]};
  border-radius: 1rem;
  left: ${({ left }) => left};
  width: ${({ width }) => width};
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

export const DateBox = styled.button<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  z-index: 1;
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.color.sneakers[1] : ''};
`;

export const DateText = styled.p<{ isSelected: boolean }>`
  ${({ theme }) => theme.typo.caption1R};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.white : theme.color.black};
`;

export const TodayText = styled.p`
  width: 1.75rem;
  text-align: center;
  ${({ theme }) => theme.typo.caption2B};
  color: ${({ theme }) => theme.color.main2[800]};
`;
