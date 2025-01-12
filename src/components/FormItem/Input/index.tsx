'use client';

import { Wrapper } from '@/components';

import { ReactNode, forwardRef } from 'react';

import * as S from './style';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputTitle?: string;
  errorMessage?: string;
  successMessage?: string;
  unit?: string;
  icon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    { inputTitle, errorMessage, successMessage, unit, icon, ...attributes },
    ref
  ) => (
    <Wrapper
      title={inputTitle}
      errorMessage={errorMessage}
      successMessage={successMessage}
    >
      <S.Container>
        <S.CustomInput
          ref={ref}
          isError={!!errorMessage}
          isSuccess={!!successMessage}
          {...attributes}
        />
        {!!unit ? <S.Unit>{unit}</S.Unit> : !!icon && <S.Icon>{icon}</S.Icon>}
      </S.Container>
    </Wrapper>
  )
);

Input.displayName = 'Input';

export default Input;
