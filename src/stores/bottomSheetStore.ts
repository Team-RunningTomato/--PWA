import { create } from 'zustand';

interface BottomSheetType {
  isBottomSheetOpen: boolean;
  openBottomSheet: () => void;
  closeBottomSheet: () => void;
}

const useBottomSheetStore = create<BottomSheetType>((set) => ({
  isBottomSheetOpen: false,
  openBottomSheet: () => set({ isBottomSheetOpen: true }),
  closeBottomSheet: () => set({ isBottomSheetOpen: false }),
}));

export default useBottomSheetStore;
