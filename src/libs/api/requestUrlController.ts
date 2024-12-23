export const authUrls = {
  postNaverLogin: () => '/auth/naver',
  patchRefresh: () => '/auth',
} as const;

export const userUrls = {
  patchMyBodyInfo: () => '/user',
} as const;

export const meetingUrls = {
  getMeetingDetail: (id: string) => `/meeting/${id}`,
  postMeetingApplication: (id: string) => `/meeting/member/${id}`,
  postMateInfo: () => '/meet',
} as const;

export const kakaoUrls = {
  getLocation: (x: number, y: number) =>
    `/local/geo/coord2address.json?x=${x}&y=${y}`,
};
