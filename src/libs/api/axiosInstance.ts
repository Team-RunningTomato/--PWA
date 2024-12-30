import axios from 'axios';

import { authUrls, patch } from '@/libs';
import { BaseUrl, Path, TokenInfoType } from '@/types';
import { getCookie } from '@/utils';

export const axiosInstance = axios.create({
  baseURL: BaseUrl.MAIN,
  withCredentials: true,
});

let isRefreshing = false;

const waitRefreshEnd = () =>
  new Promise<void>(async (resolve) => {
    const refreshEndCheck = () => {
      if (isRefreshing === false) {
        return resolve();
      } else {
        setTimeout(() => refreshEndCheck(), 1000);
      }
    };

    refreshEndCheck();
  });

axiosInstance.interceptors.request.use((config) => {
  // refresh 요청일때
  if (config.url === authUrls.patchRefresh()) {
    config.headers.refreshToken = getCookie('refreshToken');

    return config;
  }

  if (config.baseURL === BaseUrl.MAIN) {
    config.headers.authorization = getCookie('accessToken');

    return config;
  }

  if (config.baseURL === BaseUrl.KAKAO) {
    config.headers.authorization = `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`;

    return config;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (!(response.status >= 200 && response.status <= 300))
      Promise.reject(response.data);

    if (response.config.url?.includes('/local/geo/coord2address.json')) {
      return response.data.documents[0].road_address
        ? response.data.documents[0].road_address
        : response.data.documents[0].address;
    }

    return response.data;
  },
  async (error) => {
    if (error.config.url === authUrls.patchRefresh()) {
      return location.replace(Path.LOGIN);
    }

    if (error.response.status === 401) {
      if (isRefreshing) {
        await waitRefreshEnd();

        return axiosInstance(error.config);
      } else {
        const { grantType, accessToken, refreshToken } =
          await patch<TokenInfoType>(authUrls.patchRefresh());

        document.cookie = `accessToken=${grantType} ${accessToken}; path=/;`;
        document.cookie = `refreshToken=${grantType} ${refreshToken}; path=/;`;

        return axiosInstance(error.config);
      }
    }
    return Promise.reject(error);
  }
);
