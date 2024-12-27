import { AxiosError } from 'axios';

import { get, userQueryKeys, userUrls } from '@/libs';
import { RunningBoardType } from '@/types';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

export const useGetMyRunningApplication = (
  options?: Omit<
    UseQueryOptions<RunningBoardType[], AxiosError>,
    'queryKey' | 'queryFn'
  >
) =>
  useQuery({
    queryKey: userQueryKeys.getMyRunningApplication(),
    queryFn: () => get<RunningBoardType[]>(userUrls.getMyRunningApplication()),
    ...options,
  });
