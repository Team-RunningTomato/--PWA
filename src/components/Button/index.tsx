'use client';

import * as S from './style';

interface Props {
  title: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ title, onClick }) => {
  return (
    <S.Wrapper onClick={onClick}>
      <S.Text>{title}</S.Text>
    </S.Wrapper>
  );
};

export default Button;
