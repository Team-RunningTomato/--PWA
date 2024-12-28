import styled from '@emotion/styled';

import { Map } from 'react-kakao-maps-sdk';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 4.75rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const KM = styled.p`
  ${({ theme }) => theme.typo.body1B};
  color: ${({ theme }) => theme.color.main[700]};
`;

export const InfoBox = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const TopBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AuthorInfoBox = styled.div`
  margin-top: 0.75rem;
  display: flex;
  gap: 0.88rem;
  align-items: center;
`;

export const AuthorName = styled.p`
  ${({ theme }) => theme.typo.caption2R};
  color: ${({ theme }) => theme.color.gray[700]};
`;

export const AuthorLevel = styled.p`
  ${({ theme }) => theme.typo.caption2R};
  color: ${({ theme }) => theme.color.gray[300]};
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.body1B};
  color: ${({ theme }) => theme.color.black};
  margin-top: 1rem;
`;

export const BottomBox = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 0.88rem;
  align-items: start;
`;

export const RunningMember = styled.div`
  ${({ theme }) => theme.typo.caption2R};
  color: ${({ theme }) => theme.color.gray[600]};
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const PromiseTime = styled.p`
  ${({ theme }) => theme.typo.caption1R};
  color: ${({ theme }) => theme.color.gray[300]};
`;

export const ApplicationButton = styled.button`
  ${({ theme }) => theme.typo.body2B};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.main2[800]};
  width: 20.5rem;
  height: 3.125rem;
  position: absolute;
  bottom: 4.5rem;
  border-radius: 0.5rem;
`;

export const CancelButton = styled(ApplicationButton)``;

export const KakaoMap = styled(Map)`
  height: 17.5rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray[100]};
`;

export const MapBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

export const Location = styled.div`
  ${({ theme }) => theme.typo.caption2R};
  color: ${({ theme }) => theme.color.gray[300]};
  display: flex;
  gap: 0.25rem;
  align-items: center;
`;

export const MeetingLocation = styled(PromiseTime)``;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 20.5rem;
  justify-content: space-between;
  position: absolute;
  bottom: 4.5rem;
`;

export const EditButton = styled(ApplicationButton)`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.main2[600]};
  width: 10rem;
  position: static;
`;

export const DeleteButton = styled(EditButton)`
  color: ${({ theme }) => theme.color.error};
  border: 0.0625rem solid ${({ theme }) => theme.color.error};
  background-color: transparent;
`;
