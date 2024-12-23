export const userQueryKeys = {
  patchMyBodyInfo: () => ['body', 'height', 'weight'],
} as const;

export const meetingQueryKeys = {
  getMeetingDetail: (id: string) => ['meeting', 'detail', id],
  postMeetingApplication: (id: string) => ['meeting, application', id],
};

export const kakaoQueryKeys = {
  getLocation: (x: number, y: number) => [
    'kakao',
    'location',
    String(x),
    String(y),
  ],
};
