import { create } from "zustand";

export type LangStore = {
  activeLang: {
    title: string;
    localization: string;
  };
  setLang: (obj: LangStore["activeLang"]) => void;
};

export const useLang = create<LangStore>((set) => ({
  activeLang: { title: "Ру", localization: "ru" },
  setLang: (obj) => {
    set((state) => ({ activeLang: (state.activeLang = obj) }));
  },
}));
