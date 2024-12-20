import { AxiosError } from 'axios';

import { patch, userQueryKeys, userUrls } from '@/libs';
import { PatchMyBodyInfoBodyType } from '@/types';

import { UseMutationOptions, useMutation } from '@tanstack/react-query';

export const usePatchMyBodyInfo = (
  options?: UseMutationOptions<unknown, AxiosError, PatchMyBodyInfoBodyType>
) =>
  useMutation({
    mutationKey: userQueryKeys.patchMyBodyInfo(),
    mutationFn: (data: PatchMyBodyInfoBodyType) =>
      patch(userUrls.patchMyBodyInfo(), data),
    ...options,
  });
