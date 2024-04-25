import { create } from "zustand";

interface LoginModalStore {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
}

export const useLoginModal = create<LoginModalStore>((set) => ({
  isOpen: false,
  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
}));
