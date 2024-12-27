import styled from '@emotion/styled';

import { Map } from 'react-kakao-maps-sdk';

export const CountDownContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.main2[800]};
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const KakaoMap = styled(Map)`
  height: 18.75rem;
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const ImgWrapper = styled.div`
  position: relative;
  height: 5.375rem;
  width: 17rem;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 18.75rem);
  width: 100%;
  background-color: ${({ theme }) => theme.color.main2[800]};
  padding: 2.5rem 1rem;
  align-items: center;
  justify-content: space-between;
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TotalKMWrapper = styled.div`
  ${({ theme }) => theme.typo.body2R};
  color: ${({ theme }) => theme.color.gray[400]};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

export const RemainedKMWrapper = styled(TotalKMWrapper)``;

export const CaloryWrapper = styled(TotalKMWrapper)``;

export const TotalKM = styled.p`
  ${({ theme }) => theme.typo.title3B};
  color: ${({ theme }) => theme.color.white};
`;

export const RemainedKM = styled(TotalKM)``;

export const Calory = styled(TotalKM)``;

export const Timer = styled.h1`
  ${({ theme }) => theme.typo.title0};
  color: ${({ theme }) => theme.color.main[700]};
`;

export const StopButton = styled.button`
  ${({ theme }) => theme.typo.body2B};
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.main[700]};
  border-radius: 0.5rem;
  width: 100%;
  height: 3.125rem;
`;

export const StartButton = styled(StopButton)`
  color: ${({ theme }) => theme.color.main[700]};
  border: 0.0625rem solid ${({ theme }) => theme.color.main[700]};
  background-color: transparent;
`;
