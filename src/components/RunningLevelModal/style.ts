import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 1.5rem;
  align-items: center;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.white};
`;

export const Container = styled.div`
  display: flex;
  width: 15.375rem;
  flex-direction: column;
  align-items: center;
  gap: 1.375rem;
`;

export const Button = styled.button`
  ${({ theme }) => theme.typo.body2B};
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.main2[800]};
  display: flex;
  width: 100%;
  padding: 0.875rem 0;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 15rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Content = styled.p`
  ${({ theme }) => theme.typo.body2R};
  color: ${({ theme }) => theme.color.gray[500]};
  text-align: center;
`;

export const LV = styled.p`
  ${({ theme }) => theme.typo.body1B};
  color: ${({ theme }) => theme.color.black};
`;

export const LVBox = styled.div`
  position: relative;
  display: flex;
  height: 12.5rem;
  padding: 0.3125rem 3.125rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ShoesBox = styled.div`
  display: flex;
  bottom: 5%;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const Percent = styled.p`
  ${({ theme }) => theme.typo.body2B};
  color: ${({ theme }) => theme.color.white};
`;
