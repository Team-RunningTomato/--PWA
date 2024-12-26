import { create } from 'zustand';

interface ModalStoreType {
  isModalStoreOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useModalStore = create<ModalStoreType>((set) => ({
  isModalStoreOpen: false,
  openModal: () => set({ isModalStoreOpen: true }),
  closeModal: () => set({ isModalStoreOpen: false }),
}));

export default useModalStore;
