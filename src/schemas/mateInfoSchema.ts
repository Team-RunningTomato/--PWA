import { z } from 'zod';

const meetingInfoSchema = z.object({
  title: z
    .string({
      invalid_type_error: '제목을 입력해주세요.',
      required_error: '제목을 입력해주세요.',
    })
    .min(1, '제목은 최소 1자 이상이어야 합니다.'),
  location: z
    .string({
      invalid_type_error: '위치를 입력해주세요.',
      required_error: '위치를 입력해주세요.',
    })
    .min(1, '위치를 입력해주세요.'),
  addressDetail: z
    .string({
      invalid_type_error: '상세 주소를 입력해주세요.',
      required_error: '상세 주소를 입력해주세요.',
    })
    .min(1, '상세 주소를 입력해주세요.'),
  startLocation: z
    .string({
      invalid_type_error: '위치를 입력해주세요.',
      required_error: '위치를 입력해주세요.',
    })
    .min(1, '위치를 입력해주세요.'),
  distance: z
    .number({
      invalid_type_error: '거리를 숫자로 입력해주세요.',
      required_error: '거리를 입력해주세요.',
    })
    .positive('거리는 양수로 입력해야 합니다.'),
  date: z
    .string({
      invalid_type_error: '약속 날짜를 입력해주세요.',
      required_error: '약속 날짜를 입력해주세요.',
    })
    .min(1, '약속 날짜를 입력해주세요.'),
});

export default meetingInfoSchema;
