'use client';

import { Circle } from '@/assets';
import { ShoesBox } from '@/components';
import { useLVStore } from '@/stores';

import { useState } from 'react';

import * as S from './style';

interface RunningLevelProps {
  percent: number;
}

const RunningLevelModal = ({ percent }: RunningLevelProps) => {
  const { LV } = useLVStore();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const getLVText = (value: number): string[] => {
    switch (value) {
      case 1:
        return [
          '맨발의 노력',
          '짚신으로 첫 비상! 작은 날개가 당신의 노력을 응원해요!',
        ];
      case 2:
        return [
          '짚신의 노력',
          '짚신으로 첫 비상! 작은 날개가 당신의 노력을 응원해요!',
        ];
      case 3:
        return [
          '집념의 실내화',
          '고무신으로 더 높이! 점점 더 강해지는 당신, 멋져요!',
        ];
      case 4:
        return [
          '열정의 운동화',
          '실내화로 가볍게! 열정의 날개를 펼치며 앞으로 나아가요!',
        ];
      case 5:
        return [
          '끈기의 운동화',
          '운동화로 속도 업! 끈기 있는 걸음이 빛을 발하고 있어요!',
        ];
      case 6:
        return [
          '경지의 운동화',
          '런닝화로 최고 도약! 찬란한 날개와 함께 목표를 향해 질주하세요!',
        ];
      default:
        return [];
    }
  };

  const lvText = getLVText(LV)[0];
  const lvContent = getLVText(LV)[1];

  return (
    <S.Backdrop>
      <S.Wrapper>
        <S.Container>
          <S.MainContainer>
            <S.LVBox>
              <Circle percent={percent} />
              <S.ShoesBox>
                <ShoesBox />
                <S.Percent>{percent}%</S.Percent>
              </S.ShoesBox>
            </S.LVBox>
            <S.TextContainer>
              <S.Content>{lvContent}</S.Content>
              <S.LV>
                Lv {LV} &apos;{lvText}&apos;
              </S.LV>
            </S.TextContainer>
          </S.MainContainer>
          <S.Button onClick={() => setIsModalOpen(false)}>확인</S.Button>
        </S.Container>
      </S.Wrapper>
    </S.Backdrop>
  );
};

export default RunningLevelModal;
