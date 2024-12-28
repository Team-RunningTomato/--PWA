import { AxiosError } from 'axios';

import { del, meetingQueryKeys, meetingUrls } from '@/libs';

import { UseMutationOptions, useMutation } from '@tanstack/react-query';

export const useDeleteMeetingBoard = (
  id: string,
  options?: UseMutationOptions<unknown, AxiosError>
) =>
  useMutation({
    mutationKey: meetingQueryKeys.deleteMeetingBoard(id),
    mutationFn: () => del(meetingUrls.deleteMeetingBoard(id)),
    ...options,
  });
