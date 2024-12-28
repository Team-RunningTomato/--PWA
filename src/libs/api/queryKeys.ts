export const userQueryKeys = {
  patchMyBodyInfo: () => ['body', 'height', 'weight'],
  getMyInfo: () => ['user', 'get', 'info'],
  getMyRunningApplication: () => ['running', 'application', 'my'],
  getMyWroteMeeting: () => ['meeting', 'my', 'wrote'],
} as const;

export const meetingQueryKeys = {
  getMeetingDetail: (id: string) => ['meeting', 'detail', id],
  postMeetingApplication: (id: string) => ['meeting, application', id],
  postMateInfo: () => ['mate', 'info', 'post'],
  deleteMeetingCancel: (id: string) => ['delete', 'cancel', id],
  deleteMeetingBoard: (id: string) => ['meeting', 'delete', 'board', id],
};

export const runQueryKeys = {
  postRunRecord: () => ['run', 'record', 'post'],
} as const;

export const kakaoQueryKeys = {
  getLocation: (x: number, y: number) => [
    'kakao',
    'location',
    String(x),
    String(y),
  ],
};
