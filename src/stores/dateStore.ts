import { create } from 'zustand';

interface DateItem {
  month: number;
  date: number;
}

interface DateStoreType {
  selectedDates: DateItem[];
  setSelectedDates: (dates: DateItem[]) => void;
}

const useDateStore = create<DateStoreType>((set) => ({
  selectedDates: [],
  setSelectedDates: (dates) => set({ selectedDates: dates }),
}));

export default useDateStore;
