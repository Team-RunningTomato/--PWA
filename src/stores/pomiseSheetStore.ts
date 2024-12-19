import { create } from 'zustand';

interface PromiseSheetType {
  isPromiseSheetOpen: boolean;
  openPromiseSheet: () => void;
  closePromiseSheet: () => void;
}

const usePromiseSheetStore = create<PromiseSheetType>((set) => ({
  isPromiseSheetOpen: false,
  openPromiseSheet: () => set({ isPromiseSheetOpen: true }),
  closePromiseSheet: () => set({ isPromiseSheetOpen: false }),
}));

export default usePromiseSheetStore;
