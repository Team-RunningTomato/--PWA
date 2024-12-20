import styled from '@emotion/styled';

export const CustomInput = styled.input<{
  isError: boolean;
  isSuccess: boolean;
}>`
  width: 100%;
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
            : theme.color.gray[800]};
  }
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Unit = styled.p`
  width: 1.25rem;
  height: 1.25rem;
  ${({ theme }) => theme.typo.caption1B};
  color: ${({ theme }) => theme.color.gray[500]};
  top: 50%;
  transform: translateY(-50%);
  right: 1.12rem;
  position: absolute;
`;

export const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  top: 0.88rem;
  top: 50%;
  right: 1.12rem;
  transform: translateY(-50%);
  position: absolute;
`;
