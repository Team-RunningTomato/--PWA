/**
 * 쿠키의 키이름을 받아 쿠키 값을 반환합니다.
 *
 * @param key
 *
 * @returns 쿠키에 동일한 키의 쿠키가 있다면 쿠기의 값을 반환하고 없다면 undefined를 반환합니다.
 */

const getCookie = (key: string) => {
  const splittedCookie = document.cookie.split(';');
  const filteredCookie = splittedCookie.filter((string) =>
    string.includes(`${key}=`)
  );

  if (!filteredCookie.length) return undefined;

  const cookieValue = filteredCookie[0].split('=')[1];
  const decodedCookieValue = decodeURI(cookieValue);

  return decodedCookieValue;
};

export default getCookie;
