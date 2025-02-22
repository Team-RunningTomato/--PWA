import styled from '@emotion/styled';

export const Wrapper = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.75rem;
  padding: 6rem 1rem 0 1rem;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.625rem 0 2rem 0;
`;

export const RightText = styled.p`
  ${({ theme }) => theme.typo.caption1B};
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.695rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typo.body1B}
  color: ${({ theme }) => theme.color.black};
  display: inline;
  margin-bottom: 0.375rem;
`;

export const Button = styled.button`
  ${({ theme }) => theme.typo.caption1R};
  color: ${({ theme }) => theme.color.gray[300]};
  padding: 0.875rem 1.125rem;
  flex-direction: column;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray[100]};
  border-radius: 0.5rem;
  width: 100%;
  text-align: left;
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1.12rem;
  height: 1.25rem;
`;

export const InputButton = styled.button`
  width: 100%;
`;

export const ConfirmButton = styled.button`
  ${({ theme }) => theme.typo.body2B};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  width: 20.5rem;
  height: 3rem;
  border-radius: 0.5rem;
`;
