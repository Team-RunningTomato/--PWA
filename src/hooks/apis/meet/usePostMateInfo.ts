import { AxiosError } from 'axios';

import { meetQueryKeys, meetUrls, post } from '@/libs';
import { PostMateInfoType } from '@/types';

import { UseMutationOptions, useMutation } from '@tanstack/react-query';

export const usePostMateInfo = (
  options?: UseMutationOptions<unknown, AxiosError, PostMateInfoType>
) =>
  useMutation({
    mutationKey: meetQueryKeys.postMateInfo(),
    mutationFn: (data: PostMateInfoType) => post(meetUrls.postMateInfo(), data),
    ...options,
  });
