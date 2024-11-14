'use client';

import * as S from './style';

interface Props {
  title?: string;
  errorMessage?: string | null;
  successMessage?: string | null;
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({
  title,
  errorMessage,
  successMessage,
  children,
}) => (
  <S.Container>
    {title && <S.Title>{title}</S.Title>}
    {children}
    {(successMessage || errorMessage) && errorMessage ? (
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
    ) : (
      <S.SuccessMessage>{successMessage}</S.SuccessMessage>
    )}
  </S.Container>
);

export default Wrapper;
