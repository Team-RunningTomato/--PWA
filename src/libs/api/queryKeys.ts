export const userQueryKeys = {
  patchMyBodyInfo: () => ['body', 'height', 'weight'],
} as const;

export const meetingQueryKeys = {
  getMeetingDetail: (id: string) => ['meeting', 'detail', id],
  postMeetingApplication: (id: string) => ['meeting, application', id],
  postMateInfo: () => ['mate', 'info', 'post'],
};

export const kakaoQueryKeys = {
  getLocation: (x: number, y: number) => [
    'kakao',
    'location',
    String(x),
    String(y),
  ],
};
