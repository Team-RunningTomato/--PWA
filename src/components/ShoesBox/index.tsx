import { LV1Shoes, LV2Shoes, LV3Shoes, LV4Shoes, LV5Shoes } from '@/assets';
import { useLVStore } from '@/stores';

const ShoesBox = () => {
  const { LV } = useLVStore();

  const levelShoes: Record<1 | 2 | 3 | 4 | 5, JSX.Element> = {
    1: <LV1Shoes />,
    2: <LV2Shoes />,
    3: <LV3Shoes />,
    4: <LV4Shoes />,
    5: <LV5Shoes />,
  };

  return <div>{levelShoes[LV as 1 | 2 | 3 | 4 | 5]}</div>;
};

export default ShoesBox;
