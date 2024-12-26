'use client';

import { Circle } from '@/assets';
import { ShoesBox } from '@/components';

import * as S from './style';

interface RunningLevelBoxProps {
  totalDistance: number;
  bestDistance: number;
  worstDistance: number;
  percent: number;
}

const RunningLevelBox = ({
  totalDistance,
  bestDistance,
  worstDistance,
  percent,
}: RunningLevelBoxProps) => {
  const distances = [
    { label: '총 거리', value: `${totalDistance}km` },
    { label: '가장 많이 달린', value: `${bestDistance}km` },
    { label: '가장 적게 달린', value: `${worstDistance}km` },
  ];

  return (
    <S.Wrapper>
      <S.Title>런닝 레벨</S.Title>
      <S.Container>
        <S.Box>
          <S.MiniCircleBox>
            <Circle percent={percent} />
            <S.ShoesBox>
              <ShoesBox />
              <S.Percent>{percent}%</S.Percent>
            </S.ShoesBox>
          </S.MiniCircleBox>
          <S.HistoryBox>
            {distances.map(({ label, value }, index) => (
              <S.Contents key={index}>
                <S.Inventory>{label}</S.Inventory>
                <S.KM>{value}</S.KM>
              </S.Contents>
            ))}
          </S.HistoryBox>
        </S.Box>
      </S.Container>
    </S.Wrapper>
  );
};

export default RunningLevelBox;
