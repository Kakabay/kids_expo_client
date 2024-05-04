import { create } from 'zustand';

interface FaqStore {
  activeRadio: string;
  filter: (name: string) => void;
}

export const useFaq = create<FaqStore>((set) => ({
  activeRadio: 'Все',
  filter: (name) => {
    set((state) => ({ activeRadio: (state.activeRadio = name) }));
  },
}));
