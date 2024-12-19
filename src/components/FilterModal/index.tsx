'use client';

import useFilterModalStore from '@/stores/filterModalStore';
import usePeriodStore from '@/stores/periodStore';

import * as S from './style';

const FilterModal = () => {
  const { closeFilterModal } = useFilterModalStore();
  const { setSortPeriod } = usePeriodStore();

  return (
    <S.Backdrop>
      <S.Wrapper onClick={closeFilterModal}>
        <S.Options onClick={() => setSortPeriod('latest')}>
          <S.Text>최신순</S.Text>
        </S.Options>

        <S.Options onClick={() => setSortPeriod('oldest')}>
          <S.Text>오래된순</S.Text>
        </S.Options>

        <S.Options>
          <S.Text isCancle={true}>취소</S.Text>
        </S.Options>
      </S.Wrapper>
    </S.Backdrop>
  );
};

export default FilterModal;
