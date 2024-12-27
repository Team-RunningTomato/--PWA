import { MyPage } from '@/pageContainers';

const mockProfileData = {
  name: '김재균',
  level: '1',
  kg: '50',
  height: '150',
};

const mockRunningLevelBoxData = {
  totalDistance: 15,
  longestDistance: 10,
  shortestDistance: 5,
  percent: 20,
};

const mockMateData = [
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

const Login = () => {
  return (
    <MyPage
      profileData={mockProfileData}
      runningLevelBoxData={mockRunningLevelBoxData}
      mateBoxData={mockMateData}
    />
  );
};

export default Login;
