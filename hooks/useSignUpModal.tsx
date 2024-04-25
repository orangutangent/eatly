import { create } from "zustand";

interface SignUpStore {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
}

export const useSignUpModal = create<SignUpStore>((set) => ({
  isOpen: false,
  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
}));
