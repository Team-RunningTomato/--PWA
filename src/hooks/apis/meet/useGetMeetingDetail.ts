import { AxiosError } from 'axios';

import { get, meetingQueryKeys } from '@/libs';
import { meetingUrls } from '@/libs';
import { MeetBoardDetailType } from '@/types';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

export const useGetMeetingDetail = (
  id: string,
  options?: Omit<
    UseQueryOptions<MeetBoardDetailType, AxiosError>,
    'queryKey' | 'queryFn'
  >
) =>
  useQuery({
    queryKey: meetingQueryKeys.getMeetingDetail(id),
    queryFn: () => get<MeetBoardDetailType>(meetingUrls.getMeetingDetail(id)),
    ...options,
  });
