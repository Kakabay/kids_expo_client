import { create } from "zustand";

type BurgerType = {
  burger: boolean;
  setBurger: (status: boolean) => void;
};

export const useBurger = create<BurgerType>((set) => ({
  burger: false,
  setBurger: (status) => {
    set((state) => ({ burger: (state.burger = status) }));
  },
}));
