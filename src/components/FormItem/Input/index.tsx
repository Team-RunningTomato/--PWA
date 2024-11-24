'use client';

import { Wrapper } from '@/components';

import { forwardRef } from 'react';

import * as S from './style';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputTitle?: string;
  errorMessage?: string;
  successMessage?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ inputTitle, errorMessage, successMessage, ...attributes }, ref) => (
    <Wrapper
      title={inputTitle}
      errorMessage={errorMessage}
      successMessage={successMessage}
    >
      <S.CustomInput
        ref={ref}
        isError={!!errorMessage}
        isSuccess={!!successMessage}
        {...attributes}
      />
    </Wrapper>
  )
);

Input.displayName = 'Input';

export default Input;
