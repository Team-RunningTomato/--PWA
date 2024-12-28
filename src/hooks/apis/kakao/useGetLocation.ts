import { AxiosError } from 'axios';

import { get, kakaoQueryKeys, kakaoUrls } from '@/libs';
import { AddressDetailType, BaseUrl } from '@/types';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

export const useGetLocation = (
  x: number,
  y: number,
  options?: Omit<
    UseQueryOptions<AddressDetailType, AxiosError>,
    'queryKey' | 'queryFn'
  >
) =>
  useQuery({
    queryKey: kakaoQueryKeys.getLocation(x, y),
    queryFn: () =>
      get<AddressDetailType>(kakaoUrls.getLocation(x, y), {
        baseURL: BaseUrl.KAKAO,
      }),
    ...options,
  });
