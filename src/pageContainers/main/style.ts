import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 3.75rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem 1rem 0 1rem;
`;

export const RecruitWrapper = styled.div`
  width: 100%;
  height: calc(100% - 22.5rem);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RecruitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RecruitText = styled.h2`
  ${({ theme }) => theme.typo.title3B};
  color: ${({ theme }) => theme.color.black};
`;

export const RecruitBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
  max-height: 100%;
  padding-bottom: 0.75rem;
`;
