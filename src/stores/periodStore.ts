import { create } from 'zustand';

interface PeriodType {
  sortPeriod: 'latest' | 'oldest';
  setSortPeriod: (order: 'latest' | 'oldest') => void;
}

const usePeriodStore = create<PeriodType>((set) => ({
  sortPeriod: 'latest',
  setSortPeriod: (order) => set({ sortPeriod: order }),
}));

export default usePeriodStore;
