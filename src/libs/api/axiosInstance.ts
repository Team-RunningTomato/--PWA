import axios from 'axios';

import { getCookie } from '@/utils';

export const axiosInstance = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.authorization = getCookie('accessToken');

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status >= 200 && response.status <= 300) {
      return response.data;
    }

    return Promise.reject(response.data);
  },
  async (error) => {
    return Promise.reject(error);
  }
);
