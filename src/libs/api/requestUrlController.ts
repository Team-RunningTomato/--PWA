export const authUrls = {
  postNaverLogin: () => '/auth/naver',
  patchRefresh: () => '/auth',
} as const;

export const userUrls = {
  getMyInfo: () => '/user',
  patchMyBodyInfo: () => '/user',
  getMyRunningApplication: () => '/user/meetings/application',
  getMyMateInfo: () => '/user/meetings',
  getMyWroteMeeting: () => '/user/meetings',
} as const;

export const meetingUrls = {
  getMeetings: () => '/meeting',
  getMeetingDetail: (id: string) => `/meeting/${id}`,
  postMeetingApplication: (id: string) => `/meeting/member/${id}`,
  postMateInfo: () => '/meeting',
  deleteMeetingCancel: (id: string) => `/meeting/member/${id}`,
  deleteMeetingBoard: (id: string) => `/meeting/${id}`,
} as const;

export const runUrls = {
  postRunRecord: (id: string) => `/run/${id}`,
} as const;

export const kakaoUrls = {
  getLocation: (x: number, y: number) =>
    `/local/geo/coord2address.json?x=${x}&y=${y}`,
};

export const nominatimUrls = {
  getGeoCode: (address: string) =>
    `/search?q=${encodeURIComponent(address)}&format=json`,
  getReverseGeoCode: (lat: number, lon: number) =>
    `/reverse?lat=${lat}&lon=${lon}&format=json`,
};
