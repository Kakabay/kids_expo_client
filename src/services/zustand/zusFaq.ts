import { create } from 'zustand';

interface FaqStore {
  activeRadio: string;
  titles: string[];
  filter: (name: string) => void;
  setTitles: (title: string) => void;
}

export const useFaq = create<FaqStore>((set) => ({
  activeRadio: 'Все',
  titles: [],
  filter: (name) => {
    set((state) => ({ activeRadio: (state.activeRadio = name) }));
  },
  setTitles: () => {
    // set((state) => ({ titles: state.titles.push(title) }));
  },
}));
