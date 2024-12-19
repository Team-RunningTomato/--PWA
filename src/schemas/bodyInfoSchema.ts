import { z } from 'zod';

const numberFormat = z
  .number({ invalid_type_error: '숫자를 입력해주세요.' })
  .int('소수점은 빼고 입력해주세요.');

const bodyInfoSchema = z.object({
  weight: numberFormat,
  height: numberFormat,
});

export default bodyInfoSchema;
