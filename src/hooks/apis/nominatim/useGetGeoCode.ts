import { AxiosError } from 'axios';

import { get, nominatimQueryKeys, nominatimUrls } from '@/libs';
import { BaseUrl, GeoCodeType } from '@/types';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

export const useGetGeoCode = (
  address: string,
  options?: Omit<
    UseQueryOptions<GeoCodeType[], AxiosError>,
    'queryKey' | 'queryFn'
  >
) =>
  useQuery({
    queryKey: nominatimQueryKeys.getGeoCode(address),
    queryFn: () =>
      get<GeoCodeType[]>(nominatimUrls.getGeoCode(address), {
        baseURL: BaseUrl.NOMINATIM,
      }),
    ...options,
  });
