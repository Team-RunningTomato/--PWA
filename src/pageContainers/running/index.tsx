'use client';

import Image from 'next/image';
import { number } from 'zod';

import { NavigationHeader } from '@/components';
import { useGetMeetingDetail, useGetMyInfo, usePostRunRecord } from '@/hooks';
import { theme } from '@/styles';
import { Path } from '@/types';

import { useEffect, useState } from 'react';
import { MapMarker, Polyline } from 'react-kakao-maps-sdk';

import * as S from './style';

const oneImgSrc = '/imgs/1.png';
const twoImgSrc = '/imgs/2.png';
const threeImgSrc = '/imgs/3.png';
const startImgSrc = '/imgs/start.png';
const markerSrc = '/icons/markerIcon.png';

interface RunningPage {
  id: string;
}

interface PositionType {
  lat: number;
  lng: number;
}

const RunningPage = ({ id }: RunningPage) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [setIntervalId, setSetIntervalId] = useState<NodeJS.Timeout | null>(
    null
  );
  const [count, setCount] = useState<number>(3);
  const [runningRoute, setRunningRoute] = useState<PositionType[]>([]);
  const [distance, setDistance] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const [isStart, setIsStart] = useState<boolean>(true);
  const lastIndex = runningRoute.length - 1;
  const min = String(Math.floor(timer / 60)).padStart(2, '0');
  const sec = String(timer % 60).padStart(2, '0');
  const { data: meetingDetail } = useGetMeetingDetail(id);
  const { data: myInfo } = useGetMyInfo();
  const calory = ((Number(myInfo?.weight) * distance) / 1000).toFixed(1);
  const remainedKM = (
    Number(meetingDetail?.distance) -
    distance / 1000
  ).toFixed(2);

  const imageSrc = (() => {
    switch (count) {
      case 3:
        return threeImgSrc;

      case 2:
        return twoImgSrc;

      case 1:
        return oneImgSrc;

      case 0:
      default:
        return startImgSrc;
    }
  })();

  const { mutate } = usePostRunRecord();

  const getPosition = () =>
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        const currentRoute = { lat: latitude, lng: longitude };
        setRunningRoute((prev) => [...prev, currentRoute]);
      }
    );

  const start = () =>
    setInterval(() => {
      if (Number(remainedKM) <= 0) {
        clearInterval(id);

        return mutate(); // 백엔드 파트와 body에 관한 이야기가 필요함
      }

      startTimer();
      getPosition();
    }, 1000);

  const startTimer = () => {
    setTimer((prev) => prev + 1);
  };

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleStartButtonClick = () => {
    setIsStart(true);

    const id = start();

    setSetIntervalId(id);
  };

  const handleStopButtonClick = () => {
    setIsStart(false);

    if (setIntervalId) clearInterval(setIntervalId);
  };

  const init = async () => {
    // countdown 코드
    setIsModal(true);

    await delay(1000);
    setCount(2);

    await delay(1000);
    setCount(1);

    await delay(1000);
    setCount(0);
    getPosition();

    await delay(500);
    setIsModal(false);

    const id = start();

    setSetIntervalId(id);
  };

  useEffect(() => {
    init();
  }, []);

  return isModal ? (
    <S.CountDownContainer>
      <S.ImgWrapper>
        <Image src={imageSrc} alt='카운트 다운 이미지' fill />
      </S.ImgWrapper>
    </S.CountDownContainer>
  ) : (
    <S.Container>
      <NavigationHeader title='런닝 측정' navigateUrl={Path.MATE} />
      {runningRoute[lastIndex] && (
        <S.KakaoMap center={runningRoute[lastIndex]}>
          <MapMarker
            position={runningRoute[lastIndex]}
            image={{ src: markerSrc, size: { width: 24, height: 24 } }}
          />
          <Polyline
            strokeWeight={7}
            strokeColor={theme.color.main[700]}
            strokeOpacity={1}
            path={runningRoute}
            onCreate={(polyline) => setDistance(polyline.getLength())}
          />
        </S.KakaoMap>
      )}
      <S.InfoBox>
        <S.TopBox>
          <S.TotalKMWrapper>
            <S.TotalKM>{meetingDetail?.distance}</S.TotalKM>
            킬로미터(km)
          </S.TotalKMWrapper>
          <S.RemainedKMWrapper>
            <S.RemainedKM>{remainedKM}</S.RemainedKM>
            남은 거리(km)
          </S.RemainedKMWrapper>
          <S.CaloryWrapper>
            <S.Calory>{calory}</S.Calory>
            칼로리(cal)
          </S.CaloryWrapper>
        </S.TopBox>
        <S.Timer>
          {min}:{sec}
        </S.Timer>

        {isStart ? (
          <S.StopButton onClick={handleStopButtonClick}>멈추기</S.StopButton>
        ) : (
          <S.StartButton onClick={handleStartButtonClick}>시작</S.StartButton>
        )}
      </S.InfoBox>
    </S.Container>
  );
};

export default RunningPage;
