'use client';

import { BottomBar, MateCard, TopBar } from '@/components';
import { useGetMyRunningApplication } from '@/hooks';
import { Path } from '@/types';
import { formatDate } from '@/utils';

import * as S from './style';

const MeasurementPage = () => {
  const { data: appliedMeetingList } = useGetMyRunningApplication();

  const currentDate = formatDate(
    new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
  ).split('/')[0];

  const todayMeetingList = appliedMeetingList?.filter(
    ({ startAt }) => currentDate === formatDate(startAt).split('/')[0]
  );

  return (
    <>
      <S.Container>
        <TopBar />
        <S.TopBox>
          <S.Text>오늘의 런닝 🏃</S.Text>
          {todayMeetingList &&
            todayMeetingList.map((meeting) => (
              <MateCard
                key={meeting.id}
                url={`${Path.RUNNING}/${meeting.id}`}
                {...meeting}
                isApplied
              />
            ))}
        </S.TopBox>
        <S.BottomBox>
          <S.Text>신청한 런닝</S.Text>
          <S.AppliedMeetingBox>
            {appliedMeetingList?.map((meeting) => (
              <MateCard
                key={meeting.id}
                url={`${Path.MATE}/${meeting.id}`}
                {...meeting}
              />
            ))}
          </S.AppliedMeetingBox>
        </S.BottomBox>
      </S.Container>
      <BottomBar />
    </>
  );
};

export default MeasurementPage;
