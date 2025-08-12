import { create } from "zustand";

interface FaqStore {
  activeRadio: number;
  filter: (id: number) => void;
}

export const useFaq = create<FaqStore>((set) => ({
  activeRadio: 0,
  filter: (name) => {
    set((state) => ({ activeRadio: (state.activeRadio = name) }));
  },
}));
