import { MainPage } from '@/pageContainers';

const mockRecruitData = [
  {
    distance: '2',
    location: '광주광역시 광산구 상무대로 312',
    title: '광주소프트웨어마이스터고에서 런닝 모집',
    time: '2024-12-20T01:30:00Z',
  },
  {
    distance: '5',
    location: '서울특별시 강남구 테헤란로 427',
    title: '강남에서 아침 런닝',
    time: '2024-12-21T01:30:00Z',
  },
  {
    distance: '10',
    location: '부산광역시 해운대구 해운대해변로 264',
    title: '해운대에서 야간 런닝',
    time: '2024-12-22T01:30:00Z',
  },
];

const mockRunningState = {
  location: '광주광역시 광산구 상무대로 312',
  intendKM: '2',
  title: '광주소프트웨어마이스터고',
  date: '11월 27일 수요일 / 오전 02시 10분',
  LV: '1',
  distanceKM: '15',
  bestKM: '10',
  worstKM: '1',
  todayRunning: [
    '광주소프트웨어마이스터고에서 런닝 모집',
    '광주소프트웨어마이스터고에서 런닝 모집',
    '광주소프트웨어마이스터고에서 런닝 모집',
  ],
};

const Main = () => {
  return (
    <MainPage recruitData={mockRecruitData} runningState={mockRunningState} />
  );
};

export default Main;
