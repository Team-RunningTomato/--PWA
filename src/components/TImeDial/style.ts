import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const Text = styled.p`
  ${({ theme }) => theme.typo.body1B};
  color: ${({ theme }) => theme.color.black};
`;

export const TimeBox = styled.div`
  position: relative;
  width: 10rem;
  height: 5.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.color.gray[200]};
  border-radius: 0.5rem;
  border: none;
`;

export const AMPMBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  cursor: grab;
  user-select: none;
  outline: none;
`;

export const SelectText = styled.p`
  ${({ theme }) => theme.typo.body1R};
  color: ${({ theme }) => theme.color.gray[100]};
  font-size: 1.25rem;
  transition: color 0.3s ease-in-out;
  font-weight: bold;
`;
