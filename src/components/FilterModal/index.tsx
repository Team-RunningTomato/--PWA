'use client';

import useFilterModalStore from '@/stores/filterModalStore';

import * as S from './style';

const FilterModal = () => {
  const { closeFilterModal } = useFilterModalStore();

  return (
    <S.Backdrop>
      <S.Wrapper onClick={(e) => e.stopPropagation()}>
        <S.Options>
          <S.Text>최신순</S.Text>
        </S.Options>

        <S.Options>
          <S.Text>오래된순</S.Text>
        </S.Options>

        <S.Options onClick={closeFilterModal}>
          <S.Text isCancle={true}>취소</S.Text>
        </S.Options>
      </S.Wrapper>
    </S.Backdrop>
  );
};

export default FilterModal;
