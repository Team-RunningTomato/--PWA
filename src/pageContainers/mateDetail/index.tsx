'use client';

import { useRouter } from 'next/navigation';

import { CoordinateIcon, PeopleIcon } from '@/assets';
import { MeasurementButton, NavigationHeader } from '@/components';
import {
  useDeleteMeetingBoard,
  useDeleteMeetingCancel,
  useGetLocation,
  useGetMeetingDetail,
  useGetMyRunningApplication,
  useGetMyWroteMeeting,
  usePostMeetingApplication,
} from '@/hooks';
import { Path } from '@/types';
import { formatDate } from '@/utils';

import { useEffect, useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';

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
  const { push } = useRouter();

  const { data: meetingDetail } = useGetMeetingDetail(id, {});
  const { data: locationDetail } = useGetLocation(
    coordinate.lng,
    coordinate.lat,
    {
      enabled: !!meetingDetail,
    }
  );
  const {
    data: myRunningApplicationList,
    refetch: myRunningApplicationListRefetch,
  } = useGetMyRunningApplication();
  const { data: myWroteMeetingList } = useGetMyWroteMeeting();

  const { mutate: postMeetingApplication } = usePostMeetingApplication(id, {
    onSuccess: () => {
      myRunningApplicationListRefetch();
    },
  });
  const { mutate: deleteMeetingCancel } = useDeleteMeetingCancel(id, {
    onSuccess: () => {
      myRunningApplicationListRefetch();
    },
  });
  const { mutate: deleteMeetingBoard } = useDeleteMeetingBoard(id, {
    onSuccess: () => push(Path.MAIN),
  });

  const isMyMeeting = myWroteMeetingList
    ? myWroteMeetingList.some((meeting) => meeting.id === id)
    : false;
  const isApplied = myRunningApplicationList
    ? myRunningApplicationList.some((meeting) => meeting.id === id)
    : false;

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
            <MapMarker
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
              state={isApplied ? 'on' : 'off'}
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
      {isMyMeeting ? (
        <S.ButtonBox>
          <S.EditButton onClick={() => push(`${Path.MATE}?id=${id}`)}>
            수정하기
          </S.EditButton>
          <S.DeleteButton onClick={() => deleteMeetingBoard()}>
            삭제하기
          </S.DeleteButton>
        </S.ButtonBox>
      ) : isApplied ? (
        <S.CancelButton onClick={() => deleteMeetingCancel()}>
          취소
        </S.CancelButton>
      ) : (
        <S.ApplicationButton onClick={() => postMeetingApplication()}>
          신청
        </S.ApplicationButton>
      )}
    </S.Container>
  );
};

export default MateDetailPage;
