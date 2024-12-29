import { z } from 'zod';

import { bodyInfoSchema } from '@/schemas';

export type BodyInfoFormType = z.infer<typeof bodyInfoSchema>;
