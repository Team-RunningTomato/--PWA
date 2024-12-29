import { create } from 'zustand';

interface TimeStoreType {
  AMPM: 'AM' | 'PM' | null;
  hour: number | null;
  minute: number | null;
  setAMPM: (ampm: 'AM' | 'PM') => void;
  setHour: (hour: number | null) => void;
  setMinute: (minute: number | null) => void;
}

const useTimeStore = create<TimeStoreType>((set) => ({
  AMPM: null,
  hour: null,
  minute: null,
  setAMPM: (ampm) => set({ AMPM: ampm }),
  setHour: (hour) => set({ hour }),
  setMinute: (minute) => set({ minute }),
}));

export default useTimeStore;
