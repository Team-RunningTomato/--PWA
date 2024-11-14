'use client';

import { forwardRef } from 'react';

import { Wrapper } from '@/components';

import * as S from './style';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputTitle: string;
  errorMessage?: string | null;
  successMessage?: string | null;
}

const InputFormItem = forwardRef<HTMLInputElement, Props>(
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

InputFormItem.displayName = 'Input';

export default InputFormItem;
