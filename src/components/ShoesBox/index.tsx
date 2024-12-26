import styled from '@emotion/styled';

import {
  LV1Shoes,
  LV2Shoes,
  LV3Shoes,
  LV4Shoes,
  LV5Shoes,
  LV6Shoes,
} from '@/assets';
import { useLVStore } from '@/stores';

const Wrapper = styled.div`
  display: flex;
  width: 5rem;
  height: 5rem;
  padding: 0.5rem 0.22931rem 0.45569rem 0.20506rem;
  justify-content: center;
  align-items: center;
`;

const ShoesBox = () => {
  const { LV } = useLVStore();

  const levelShoes: Record<1 | 2 | 3 | 4 | 5 | 6, JSX.Element> = {
    1: <LV1Shoes />,
    2: <LV2Shoes />,
    3: <LV3Shoes />,
    4: <LV4Shoes />,
    5: <LV5Shoes />,
    6: <LV6Shoes />,
  };

  return <Wrapper>{levelShoes[LV as 1 | 2 | 3 | 4 | 5 | 6]}</Wrapper>;
};

export default ShoesBox;
