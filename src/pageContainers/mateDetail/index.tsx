'use client';

import { CoordinateIcon, PeopleIcon } from '@/assets';
import { MeasurementButton, NavigationHeader } from '@/components';
import { useGetMeetingDetail } from '@/hooks';
import useGetLocation from '@/hooks/apis/kakao/useGetLocation';
import usePostMeetingApplication from '@/hooks/apis/meet/usePostMeetingApplication';
import { useGetMyRunningApplication } from '@/hooks/apis/user/useGetMyRunningApplication';
import { Path } from '@/types';
import { formatDate } from '@/utils';

import { useEffect, useState } from 'react';

import * as S from './style';

interface MateDetailPageProps {
  id: string;
}

interface CoordinateType {
  lat: number;
  lng: number;
}

const markerSrc = '/icons/markerIcon.png';

const MateDetailPage = ({ id }: MateDetailPageProps) => {
  const [coordinate, setCoordinate] = useState<CoordinateType>({
    lat: 0,
    lng: 0,
  });

  const { data: meetingDetail, refetch: meetingDetailRefetch } =
    useGetMeetingDetail(id);
  const { data: locationDetail } = useGetLocation(
    coordinate.lng,
    coordinate.lat,
    {
      enabled: !!meetingDetail,
    }
  );

  const { data: myRunningApplicationList } = useGetMyRunningApplication();

  const { mutate: postMeetingApplication } = usePostMeetingApplication(id, {
    onSuccess: () => {
      meetingDetailRefetch();
    },
  });

  useEffect(() => {
    if (!meetingDetail) return;

    setCoordinate({
      lat: meetingDetail.startLocation.startLatitude,
      lng: meetingDetail.startLocation.startLongitude,
    });
  }, [meetingDetail]);

  return (
    <S.Container>
      <NavigationHeader title='글 자세히보기' navigateUrl={Path.MAIN} />
      {meetingDetail && (
        <S.MapBox>
          <S.KakaoMap center={coordinate}>
            <S.Marker
              position={coordinate}
              image={{ src: markerSrc, size: { width: 24, height: 24 } }}
            />
          </S.KakaoMap>
          <S.Location>
            <CoordinateIcon /> {locationDetail?.address_name}
          </S.Location>
        </S.MapBox>
      )}
      <S.InfoBox>
        <S.TopBox>
          <S.KM>{meetingDetail?.distance}km</S.KM>

          {myRunningApplicationList && (
            <MeasurementButton
              state={
                myRunningApplicationList.some(
                  (application) => application.id === id
                )
                  ? 'on'
                  : 'off'
              }
              url={`${Path.RUNNING}/${id}`}
            />
          )}
        </S.TopBox>

        <S.AuthorInfoBox>
          <S.AuthorName>{meetingDetail?.author.name}</S.AuthorName>
          <S.AuthorLevel>Lv {meetingDetail?.author.level}</S.AuthorLevel>
        </S.AuthorInfoBox>
        <S.Title>{meetingDetail?.title}</S.Title>
        <S.BottomBox>
          <S.RunningMember>
            <PeopleIcon />
            {meetingDetail?.memberNum}
          </S.RunningMember>
          <S.RightBox>
            <S.PromiseTime>
              약속시간 :{' '}
              {meetingDetail?.startAt && formatDate(meetingDetail.startAt)}
            </S.PromiseTime>
            <S.MeetingLocation>
              만나는 장소 : {meetingDetail?.addressDetail}
            </S.MeetingLocation>
          </S.RightBox>
        </S.BottomBox>
      </S.InfoBox>
      <S.Button onClick={() => postMeetingApplication()}>신청</S.Button>
    </S.Container>
  );
};

export default MateDetailPage;
