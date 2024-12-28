import { AxiosError } from 'axios';

import { get, meetingQueryKeys, meetingUrls } from '@/libs';
import { RunningBoardType } from '@/types';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

export const useGetMeetings = (
  options?: Omit<
    UseQueryOptions<RunningBoardType[], AxiosError>,
    'queryKey' | 'queryFn'
  >
) =>
  useQuery({
    queryKey: meetingQueryKeys.getMeetings(),
    queryFn: () => get<RunningBoardType[]>(meetingUrls.getMeetings()),
    ...options,
  });
