import { AxiosError } from 'axios';

import { post, runQueryKeys, runUrls } from '@/libs';
import { RunningMeasurementType } from '@/types';

import { UseMutationOptions, useMutation } from '@tanstack/react-query';

export const usePostRunRecord = (
  id: string,
  options?: UseMutationOptions<unknown, AxiosError, RunningMeasurementType>
) =>
  useMutation({
    mutationKey: runQueryKeys.postRunRecord(),
    mutationFn: (body) => post(runUrls.postRunRecord(id), body),
    ...options,
  });
