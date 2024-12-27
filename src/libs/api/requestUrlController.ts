export const authUrls = {
  postNaverLogin: () => '/auth/naver',
  patchRefresh: () => '/auth',
} as const;

export const userUrls = {
  getMyInfo: () => '/user',
  patchMyBodyInfo: () => '/user',
  getMyRunningApplication: () => '/user/meetings/application',
} as const;

export const meetingUrls = {
  getMeetingDetail: (id: string) => `/meeting/${id}`,
  postMeetingApplication: (id: string) => `/meeting/member/${id}`,
} as const;

export const runUrls = {
  postRunRecord: (id: string) => `/run/${id}`,
} as const;

export const kakaoUrls = {
  getLocation: (x: number, y: number) =>
    `/local/geo/coord2address.json?x=${x}&y=${y}`,
} as const;
