import { create } from 'zustand';

interface MateSheetType {
  isMateSheetOpen: boolean;
  openMateSheet: () => void;
  closeMateSheet: () => void;
}

const useMateSheetStore = create<MateSheetType>((set) => ({
  isMateSheetOpen: false,
  openMateSheet: () => set({ isMateSheetOpen: true }),
  closeMateSheet: () => set({ isMateSheetOpen: false }),
}));

export default useMateSheetStore;
