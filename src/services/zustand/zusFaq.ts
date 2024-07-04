import { create } from "zustand";

interface FaqStore {
  activeRadio: string;
  currentRadio: number;
  setCurrentRadio: (value: number) => void;
  filter: (name: string) => void;
}

export const useFaq = create<FaqStore>((set) => ({
  activeRadio: "Все",
  currentRadio: 0,
  titles: [],
  filter: (name) => {
    set((state) => ({ activeRadio: (state.activeRadio = name) }));
  },
  setCurrentRadio: (value) => {
    set((state) => ({ currentRadio: (state.currentRadio = value) }));
  },
}));
