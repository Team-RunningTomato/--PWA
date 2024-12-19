import { create } from 'zustand';

interface DateStoreType {
  selectedDates: number[];
  setSelectedDates: (dates: number[]) => void;
}

const useDateStore = create<DateStoreType>((set) => ({
  selectedDates: [],
  setSelectedDates: (dates) => set({ selectedDates: dates }),
}));

export default useDateStore;
