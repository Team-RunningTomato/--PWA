'use client';

import { BottomArrow, TopArrow } from '@/assets';
import useFilterModalStore from '@/stores/filterModalStore';
import usePeriodStore from '@/stores/periodStore';

import FilterModal from '../FilterModal';
import * as S from './style';

const SelectFilter = () => {
  const { sortPeriod } = usePeriodStore();
  const { isFilterModalOpen, openFilterModal } = useFilterModalStore();

  return (
    <>
      <S.Wrapper
        onClick={openFilterModal}
        isFilterModalOpen={isFilterModalOpen}
      >
        <S.Text isFilterModalOpen={isFilterModalOpen}>
          {sortPeriod === 'latest' ? '최신 순' : '오래된 순'}
        </S.Text>
        {isFilterModalOpen ? <TopArrow /> : <BottomArrow />}
      </S.Wrapper>
      {isFilterModalOpen && <FilterModal />}
    </>
  );
};

export default SelectFilter;
