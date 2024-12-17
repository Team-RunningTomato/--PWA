import { authUrl } from '@/libs';

interface ResponseType {
  grantType: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
  refreshTokenExpiresIn: number;
}

const postNaverLogin = async (
  authorizationCode: string,
  state: string
): Promise<ResponseType | undefined> => {
  try {
    const body = JSON.stringify({
      authorizationCode: authorizationCode,
      state: state,
    });

    const response = await fetch(
      new URL(authUrl.postNaverLogin(), process.env.NEXT_PUBLIC_API_BASE_URL),
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: body,
      }
    );

    const tokenInfo = await response.json();

    return tokenInfo;
  } catch {
    return undefined;
  }
};

export default postNaverLogin;
