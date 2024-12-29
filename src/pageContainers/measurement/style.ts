import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem 3.75rem 1rem;
  gap: 2.5rem;
`;

export const Text = styled.h1`
  ${({ theme }) => theme.typo.title3B};
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 1rem;
`;

export const TopBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BottomBox = styled(TopBox)``;

export const AppliedMeetingBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: scroll;
  width: 100%;
  height: 22rem;
`;
