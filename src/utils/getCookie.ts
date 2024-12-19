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
