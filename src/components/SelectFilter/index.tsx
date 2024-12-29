'use client';

import { BottomArrow, TopArrow } from '@/assets';
import useBottomSheetStore from '@/stores/bottomSheetStore';
import usePeriodStore from '@/stores/periodStore';

import FilterBottomSheet from '../FilterBottomSheet';
import * as S from './style';

const SelectFilter = () => {
  const { sortPeriod } = usePeriodStore();
  const { isBottomSheetOpen, openBottomSheet } = useBottomSheetStore();

  return (
    <>
      <S.Wrapper onClick={openBottomSheet} sortPeriod={sortPeriod}>
        <S.Text sortPeriod={sortPeriod}>
          {sortPeriod === 'latest' ? '최신 순' : '오래된 순'}
        </S.Text>
        {sortPeriod === 'oldest' ? <TopArrow /> : <BottomArrow />}
      </S.Wrapper>
      {isBottomSheetOpen && <FilterBottomSheet />}
    </>
  );
};

export default SelectFilter;
