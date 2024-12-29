import { AxiosError } from 'axios';

import { meetingQueryKeys, meetingUrls, patch } from '@/libs';
import { PostMateInfoType } from '@/types';

import { UseMutationOptions, useMutation } from '@tanstack/react-query';

export const usePatchMeeting = (
  id: string,
  options?: UseMutationOptions<unknown, AxiosError, PostMateInfoType>
) =>
  useMutation({
    mutationKey: meetingQueryKeys.patchMeeting(id),
    mutationFn: (body: PostMateInfoType) =>
      patch(meetingUrls.patchMeeting(id), body),
    ...options,
  });
