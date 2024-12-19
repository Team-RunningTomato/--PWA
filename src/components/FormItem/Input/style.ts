import styled from '@emotion/styled';

export const WrapperContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

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
  width: 100%;

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

export const RightAreaContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;
