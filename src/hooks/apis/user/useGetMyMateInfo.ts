import { AxiosError } from 'axios';

import { get, userQueryKeys, userUrls } from '@/libs';
import { MyMateInfoType } from '@/types';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

export const useGetMyMateInfo = (
  options?: Omit<
    UseQueryOptions<MyMateInfoType[], AxiosError>,
    'queryKey' | 'queryFn'
  >
) =>
  useQuery({
    queryKey: userQueryKeys.getMyMateInfo(),
    queryFn: () => get<MyMateInfoType[]>(userUrls.getMyMateInfo()),
    ...options,
  });
