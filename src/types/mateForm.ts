import { z } from 'zod';

import { mateInfoSchema } from '@/schemas';

export type MateInfoFormType = z.infer<typeof mateInfoSchema>;
