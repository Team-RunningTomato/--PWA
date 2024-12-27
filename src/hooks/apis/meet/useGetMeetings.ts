import { AxiosError } from 'axios';

import { get, meetingQueryKeys, meetingUrls } from '@/libs';
import { MeetingsType } from '@/types';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

export const useGetMeetings = (
  options?: Omit<
    UseQueryOptions<MeetingsType[], AxiosError>,
    'queryKey' | 'queryFn'
  >
) =>
  useQuery({
    queryKey: meetingQueryKeys.getMeetings(),
    queryFn: () => get<MeetingsType[]>(meetingUrls.getMeetings()),
    ...options,
  });
