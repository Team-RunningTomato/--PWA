import styled from '@emotion/styled';

export const Container = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75rem 1rem 0 1rem;
`;

export const MiddleBox = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  height: 2.25rem;
  width: 4.125rem;
  position: relative;
`;

export const Description = styled.h1`
  margin-top: 0.75rem;
  ${({ theme }) => theme.typo.title2B};
  color: ${({ theme }) => theme.color.black};
`;

export const InputBox = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ConfirmButton = styled.button`
  ${({ theme }) => theme.typo.body2B};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  width: 20.5rem;
  height: 3rem;
  border-radius: 0.5rem;
  position: absolute;
  bottom: 5.13rem;
`;
