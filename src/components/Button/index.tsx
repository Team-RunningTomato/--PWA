'use client';

import * as S from './style';

interface Props {
  title: string;
}

const Button: React.FC<Props> = ({ title }) => {
  return (
    <S.Wrapper>
      <S.Text>{title}</S.Text>
    </S.Wrapper>
  );
};

export default Button;
