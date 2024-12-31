import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const TimeText = styled.h2`
  ${({ theme }) => theme.typo.body1B};
  color: ${({ theme }) => theme.color.black};
`;

export const TimeBox = styled.div`
  display: flex;
  padding: 0rem 0.5rem;
  gap: 5.5rem;
`;

export const AMPMBox = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const AMPMText = styled.p<{ selected: boolean }>`
  ${({ theme }) => theme.typo.body1R};
  color: ${({ theme, selected }) =>
    selected ? theme.color.black : theme.color.gray[500]};
  cursor: pointer;
`;

export const MinuteBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const MinuteInput = styled.input`
  ${({ theme }) => theme.typo.body1B};
  color: ${({ theme }) => theme.color.black};
  border: none;
  width: 2.25rem;
  text-align: center;

  ::placeholder {
    color: ${({ theme }) => theme.color.gray[500]};
  }

  :focus {
    outline: none;
  }
`;

export const MiddleText = styled.p`
  ${({ theme }) => theme.typo.body2B};
  color: ${({ theme }) => theme.color.black};
`;
