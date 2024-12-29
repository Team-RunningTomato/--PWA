import { create } from 'zustand';

interface ValueStoreType {
  LV: number;
  setLV: (newLV: number) => void;
}

const useLVStore = create<ValueStoreType>((set) => ({
  LV: 1,
  setLV: (newLV) => set({ LV: newLV }),
}));

export default useLVStore;
