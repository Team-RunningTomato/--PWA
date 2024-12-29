import { AxiosError } from 'axios';

import { get, userQueryKeys, userUrls } from '@/libs';
import { MyInfoType } from '@/types';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

export const useGetMyInfo = (
  options?: Omit<
    UseQueryOptions<MyInfoType, AxiosError>,
    'queryKey' | 'queryFn'
  >
) =>
  useQuery({
    queryKey: userQueryKeys.getMyInfo(),
    queryFn: () => get<MyInfoType>(userUrls.getMyInfo()),
    ...options,
  });
