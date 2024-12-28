import { AxiosError } from 'axios';

import { del, meetingQueryKeys, meetingUrls } from '@/libs';

import { UseMutationOptions, useMutation } from '@tanstack/react-query';

export const useDeleteMeetingCancel = (
  id: string,
  options?: UseMutationOptions<unknown, AxiosError>
) =>
  useMutation({
    mutationKey: meetingQueryKeys.deleteMeetingCancel(id),
    mutationFn: () => del(meetingUrls.deleteMeetingCancel(id)),
    ...options,
  });
