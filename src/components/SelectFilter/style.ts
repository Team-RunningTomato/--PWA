import styled from '@emotion/styled';

export const Wrapper = styled.button<{ isFilterModalOpen: boolean }>`
  display: flex;
  padding: 0.25rem 0.5rem;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.main2[800]};
  background: ${({ theme, isFilterModalOpen }) =>
    isFilterModalOpen ? theme.color.black : theme.color.white};
  gap: 0.25rem;
  width: fit-content;
  cursor: pointer;
`;

export const Text = styled.p<{ isFilterModalOpen: boolean }>`
  ${({ theme }) => theme.typo.caption2R};
  color: ${({ theme, isFilterModalOpen }) =>
    isFilterModalOpen ? theme.color.white : theme.color.main2[800]};
`;
