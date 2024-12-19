import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const RecruitWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 4.5rem;
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
`;
