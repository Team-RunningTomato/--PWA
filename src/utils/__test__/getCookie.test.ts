import { getCookie } from '@/utils';

beforeEach(() => {
  Object.defineProperty(document, 'cookie', {
    writable: true,
    value: '',
  });
});

describe('getCookie 함수', () => {
  test('return 값 확인', () => {
    document.cookie =
      'user_id=abc123; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=Tue, 19 Dec 2024 23:59:59 GMT; session_id=xyz789; Path=/app; SameSite=Lax; Expires=Fri, 20 Dec 2024 12:00:00 GMT; theme=dark; Path=/; Secure; Expires=Wed, 18 Dec 2024 12:00:00 GMT; language=ko-KR; Path=/; HttpOnly; Expires=Thu, 19 Dec 2024 18:00:00 GMT;';

    expect(getCookie('user_id')).toBe('abc123');
  });

  test('없는 key를 인자로 넣었을때', () => {
    expect(getCookie('hi')).toBeUndefined();
  });
});
