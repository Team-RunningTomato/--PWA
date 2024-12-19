'use client';

import { BottomBar, MateBox, RunningState, TopBar } from '@/components';

import * as S from './style';

const MainPage = () => {
  const recruitData = [
    {
      distance: '2',
      location: '광주광역시 광산구 상무대로 312',
      title: '광주소프트웨어마이스터고에서 런닝 모집',
      date: '11월 27일 수요일',
      time: '오전 02시 10분',
    },
    {
      distance: '5',
      location: '서울특별시 강남구 테헤란로 427',
      title: '강남에서 아침 런닝',
      date: '12월 1일 금요일',
      time: '오전 06시 00분',
    },
    {
      distance: '10',
      location: '부산광역시 해운대구 해운대해변로 264',
      title: '해운대에서 야간 런닝',
      date: '12월 5일 화요일',
      time: '오후 08시 30분',
    },
    {
      distance: '10',
      location: '부산광역시 해운대구 해운대해변로 264',
      title: '해운대에서 야간 런닝',
      date: '12월 5일 화요일',
      time: '오후 08시 30분',
    },
    {
      distance: '10',
      location: '부산광역시 해운대구 해운대해변로 264',
      title: '해운대에서 야간 런닝',
      date: '12월 5일 화요일',
      time: '오후 08시 30분',
    },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        <TopBar />
        <RunningState
          location={''}
          intendKM={''}
          title={''}
          date={''}
          LV={''}
          distanceKM={''}
          bestKM={''}
          worstKM={''}
          todayRunning={[]}
        />
        <S.RecruitWrapper>
          <S.RecruitContainer>
            <S.RecruitText>런닝 모집</S.RecruitText>
            {/* FilterModal 배치 예정 */}
          </S.RecruitContainer>
          <S.RecruitBox>
            {recruitData.map((item, index) => (
              <MateBox
                key={index}
                distance={item.distance}
                location={item.location}
                title={item.title}
                date={item.date}
                time={item.time}
              />
            ))}
          </S.RecruitBox>
        </S.RecruitWrapper>
      </S.Container>
      <BottomBar />
    </S.Wrapper>
  );
};

export default MainPage;
