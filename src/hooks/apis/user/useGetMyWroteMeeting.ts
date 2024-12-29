import { AxiosError } from 'axios';

import { get, userQueryKeys, userUrls } from '@/libs';
import { RunningBoardType } from '@/types';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

export const useGetMyWroteMeeting = (
  options?: Omit<
    UseQueryOptions<RunningBoardType[], AxiosError>,
    'queryKey' | 'queryFn'
  >
) =>
  useQuery({
    queryKey: userQueryKeys.getMyWroteMeeting(),
    queryFn: () => get<RunningBoardType[]>(userUrls.getMyWroteMeeting()),
    ...options,
  });
