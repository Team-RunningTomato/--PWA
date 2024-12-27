import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 3.75rem);
  padding: 1rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;
`;

export const MateWrapper = styled.div`
  height: calc(100% - 22.5rem);
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  flex: 1;
`;

export const MateContainer = styled.div`
  display: flex;
  overflow-y: auto;
  max-height: 100%;
  flex-direction: column;
  gap: 0.75rem;
  padding-bottom: 0.75rem;
  overflow: scroll;
`;

export const Title = styled.div`
  ${({ theme }) => theme.typo.title3B};
  color: ${({ theme }) => theme.color.black};
`;
