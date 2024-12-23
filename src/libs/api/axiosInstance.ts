import axios from 'axios';

import { BaseUrl } from '@/types';
import { getCookie } from '@/utils';

export const axiosInstance = axios.create({
  baseURL: BaseUrl.MAIN,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  if (config.baseURL === BaseUrl.MAIN) {
    config.headers.authorization = getCookie('accessToken');
  }

  if (config.baseURL === BaseUrl.KAKAO)
    config.headers.authorization = `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`;

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (!(response.status >= 200 && response.status <= 300))
      Promise.reject(response.data);

    console.log(response);

    if (response.config.url?.includes('/local/geo/coord2address.json')) {
      return response.data.documents[0].road_address;
    }

    return response.data;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
