import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  padding: 0.75rem 1rem;
  flex-direction: column;
  gap: 0.625rem;
  border-radius: 0.5rem;
  background: var(--g-300, #fafafa); //색깔 변경시 추후 변경
`;

export const AlarmContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const AlarmContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typo.caption2B};
  color: ${({ theme }) => theme.color.black};
`;

export const GuideText = styled.p`
  ${({ theme }) => theme.typo.caption2R};
  color: ${({ theme }) => theme.color.gray[400]};
`;
