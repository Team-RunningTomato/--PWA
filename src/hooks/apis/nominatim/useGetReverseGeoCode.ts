import { AxiosError } from 'axios';

import { get, nominatimQueryKeys, nominatimUrls } from '@/libs';
import { BaseUrl, GeoCodeType, ReverseGeoCodeType } from '@/types';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

export const useGetReverseGeoCode = (
  locations: { lat: number; lon: number }[],
  options?: Omit<
    UseQueryOptions<ReverseGeoCodeType[], AxiosError>,
    'queryKey' | 'queryFn'
  >
) =>
  useQuery({
    queryKey: ['reverseGeoCode', locations],
    queryFn: async () => {
      const results = await Promise.all(
        locations.map(({ lat, lon }) =>
          get<ReverseGeoCodeType>(nominatimUrls.getReverseGeoCode(lat, lon), {
            baseURL: BaseUrl.NOMINATIM,
          })
        )
      );
      return results;
    },
    ...options,
  });
