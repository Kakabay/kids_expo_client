import { create } from 'zustand';

type BurgerStore = {
  burger: boolean;
  setBurger: (status: boolean) => void;
};

export const useBurger = create<BurgerStore>((set) => ({
  burger: false,
  setBurger: (status) => {
    set((state) => ({ burger: (state.burger = status) }));
  },
}));
