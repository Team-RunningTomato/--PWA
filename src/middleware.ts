import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { postNaverLogin } from '@/apis';
import { Path } from '@/types';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const authorizationCode = request.nextUrl.searchParams.get('code');
  const state = request.nextUrl.searchParams.get('state');

  if (!authorizationCode || !state) return response;

  const tokenInfo = await postNaverLogin(authorizationCode, state);

  if (!tokenInfo)
    return NextResponse.redirect(new URL(Path.LOGIN, request.url));

  response.cookies.set({
    name: 'accessToken',
    value: `${tokenInfo.grantType} ${tokenInfo.accessToken}`,
    sameSite: 'strict',
  });
  response.cookies.set({
    name: 'refreshToken',
    value: `${tokenInfo.grantType} ${tokenInfo.refreshToken}`,
    sameSite: 'strict',
  });

  return response;
}

export const config = {
  matcher: Path.LOGIN,
};
