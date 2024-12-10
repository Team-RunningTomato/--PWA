import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;
`;

export const LogoBox = styled.div`
  height: 5.375rem;
  width: 16.375rem;
  position: relative;
`;

export const LogoImg = styled.img``;

export const Description = styled.p`
  ${({ theme }) => theme.typo.body2R};
  color: ${({ theme }) => theme.color.gray[800]};
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 5.13rem;
`;
