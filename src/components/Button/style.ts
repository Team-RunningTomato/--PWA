import styled from '@emotion/styled';

export const Wrapper = styled.button`
  display: flex;
  width: 20.5rem;
  padding: 0.875rem 9.375rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: #1c1c1c; //추후 theme변경 시에 theme로 변경
  transition: background 0.3s ease;

  &:hover {
    background: #383838;
  }
`;

export const Text = styled.p`
  ${({ theme }) => theme.typo.body2B};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
`;
