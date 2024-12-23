export const userQueryKeys = {
  patchMyBodyInfo: () => ['body', 'height', 'weight'],
} as const;

export const meetQueryKeys = {
  postMateInfo: () => ['mate', 'info', 'post'],
};
