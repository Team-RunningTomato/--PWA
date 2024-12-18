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
  height: 10.625rem;
  position: relative;
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
  height: 100%;
`;

export const LeftContent = styled.div<{
  dragX: number;
  isRightPosition: boolean;
}>`
  display: flex;
  height: 100%;
  padding: ${({ isRightPosition }) =>
    isRightPosition ? '1rem 0.5rem' : '2rem 1.5rem'};
  flex-direction: column;
  justify-content: center;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray[100]};
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0.25rem 0.25rem 0.375rem 0rem rgba(0, 0, 0, 0.24);
  transform: ${({ dragX }) => `translateX(${dragX}px)`};
  transition: ${({ dragX }) =>
    dragX === 0 ? 'transform 0.3s ease-in-out' : 'none'};
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
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
  color: ${({ theme }) => theme.color.main2[800]};
`;

export const RunningHistoryBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.75rem;
`;

export const HistoryContent = styled.div<{ isRightPosition: boolean }>`
  display: flex;
  width: 9.125rem;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.isRightPosition &&
    `
    .HistoryTitle {
      visibility: hidden;
    }

    .KMText {
      visibility: hidden;
    }
  `}
`;

export const HistoryTitle = styled.p`
  ${({ theme }) => theme.typo.caption1R};
  color: ${({ theme }) => theme.color.white};
`;

export const KMText = styled.p`
  ${({ theme }) => theme.typo.caption2B};
  color: ${({ theme }) => theme.color.gray[300]};
`;

export const RunningList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 8.625rem;
`;

export const RunningListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

export const TodayRunningText = styled.h2`
  ${({ theme }) => theme.typo.caption3B};
  color: ${({ theme }) => theme.color.main2[800]};
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ListContent = styled.p`
  width: 7.125rem;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${({ theme }) => theme.typo.caption3R};
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const SeeMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const SeeMoreText = styled.p`
  ${({ theme }) => theme.typo.caption2B};
  color: ${({ theme }) => theme.color.main[700]};
`;

export const AppearContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  left: 1rem;
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LocationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4375rem;
`;

export const LocationText = styled.p`
  ${({ theme }) => theme.typo.caption3R};
  color: ${({ theme }) => theme.color.gray[300]};
`;

export const IntendKM = styled.p`
  ${({ theme }) => theme.typo.body2B};
  color: ${({ theme }) => theme.color.sneakers[1]};
`;

export const JoinTextBox = styled.div`
  width: 9.125rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const JoinTitle = styled.p`
  ${({ theme }) => theme.typo.caption2B};
  color: ${({ theme }) => theme.color.white};
`;

export const DateText = styled.p`
  ${({ theme }) => theme.typo.caption3R};
  color: ${({ theme }) => theme.color.gray[400]};
`;
