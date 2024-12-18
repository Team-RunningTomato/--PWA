import { create } from 'zustand';

interface FilterModalType {
  isFilterModalOpen: boolean;
  openFilterModal: () => void;
  closeFilterModal: () => void;
}

const useFilterModalStore = create<FilterModalType>((set) => ({
  isFilterModalOpen: false,
  openFilterModal: () => set({ isFilterModalOpen: true }),
  closeFilterModal: () => set({ isFilterModalOpen: false }),
}));

export default useFilterModalStore;
