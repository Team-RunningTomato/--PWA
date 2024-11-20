import styled from '@emotion/styled';

export const CustomInput = styled.input<{
  isError: boolean;
  isSuccess: boolean;
}>`
  ${({ theme }) => theme.typo.caption1R};
  color: ${({ theme }) => theme.color.black};
  padding: 0.875rem 1.125rem;
  flex-direction: column;
  border: 0.0625rem solid
    ${({ theme, isError, isSuccess }) =>
      isError
        ? theme.color.error
        : isSuccess
          ? theme.color.success
          : theme.color.gray[100]};
  border-radius: 0.5rem;

  ::placeholder {
    ${({ theme }) => theme.typo.caption1R};
    color: ${({ theme }) => theme.color.gray[300]};
  }

  :focus {
    outline: none;
    border: 0.0625rem solid
      ${({ theme, isError, isSuccess }) =>
        isError
          ? theme.color.error
          : isSuccess
            ? theme.color.success
            : theme.color.gray[100]};
  }
`;
