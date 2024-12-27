import { AxiosError } from 'axios';

import { meetingQueryKeys, meetingUrls, post } from '@/libs';

import { UseMutationOptions, useMutation } from '@tanstack/react-query';

export const usePostMeetingApplication = (
  id: string,
  options?: UseMutationOptions<unknown, AxiosError>
) =>
  useMutation({
    mutationKey: meetingQueryKeys.postMeetingApplication(id),
    mutationFn: () => post(meetingUrls.postMeetingApplication(id)),
    ...options,
  });
