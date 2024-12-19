import { z } from 'zod';

const bodyInfoSchema = z.object({
  weight: z
    .number({
      invalid_type_error: '몸무게를 입력해주세요.',
      required_error: '몸무게를 입력해주세요',
    })
    .int('소수점은 빼고 입력해주세요.'),
  height: z
    .number({
      invalid_type_error: '키를 입력해주세요.',
      required_error: '키를 입력해주세요',
    })
    .int('소수점은 빼고 입력해주세요.'),
});

export default bodyInfoSchema;
