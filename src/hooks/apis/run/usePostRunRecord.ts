import { AxiosError } from 'axios';

import { post, runQueryKeys, runUrls } from '@/libs';

import { UseMutationOptions, useMutation } from '@tanstack/react-query';

export const usePostRunRecord = (
  options?: UseMutationOptions<unknown, AxiosError>
) =>
  useMutation({
    mutationKey: runQueryKeys.postRunRecord(),
    mutationFn: (body) => post(runUrls.postRunRecord(), body),
    ...options,
  });
