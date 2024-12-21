const formatDate = (isoTime: string) => {
  const date = new Date(isoTime);

  const optionsForDate = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  } as const;
  const optionsForTime = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  } as const;

  const formattedDate = new Intl.DateTimeFormat('ko-KR', optionsForDate).format(
    date
  );
  const formattedTime = new Intl.DateTimeFormat('ko-KR', optionsForTime).format(
    date
  );

  const timeWithKoreanFormat = formattedTime
    .replace('AM', '오전')
    .replace('PM', '오후');
  return `${formattedDate} / ${timeWithKoreanFormat.replace(':', '시 ')}분`;
};

export default formatDate;
