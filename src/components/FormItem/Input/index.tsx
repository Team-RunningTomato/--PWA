'use client';

import { Wrapper } from '@/components';

import { forwardRef } from 'react';

import * as S from './style';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputTitle?: string;
  errorMessage?: string;
  successMessage?: string;
  rightArea?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    { inputTitle, errorMessage, successMessage, rightArea, ...attributes },
    ref
  ) => (
    <Wrapper
      title={inputTitle}
      errorMessage={errorMessage}
      successMessage={successMessage}
    >
      <S.WrapperContainer>
        <S.CustomInput
          ref={ref}
          isError={!!errorMessage}
          isSuccess={!!successMessage}
          {...attributes}
        />
        <S.RightAreaContainer>{rightArea}</S.RightAreaContainer>
      </S.WrapperContainer>
    </Wrapper>
  )
);

Input.displayName = 'Input';

export default Input;
