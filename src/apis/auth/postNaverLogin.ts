import { authUrls } from '@/libs';
import { TokenInfoType } from '@/types';

const postNaverLogin = async (
  authorizationCode: string,
  state: string
): Promise<TokenInfoType | undefined> => {
  try {
    const body = JSON.stringify({
      authorizationCode: authorizationCode,
      state: state,
    });

    const response = await fetch(
      new URL(authUrls.postNaverLogin(), process.env.NEXT_PUBLIC_API_BASE_URL),
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
