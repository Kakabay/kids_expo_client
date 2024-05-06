import { create } from 'zustand';
import { activeLangType } from '../../components/Header/LangMenu';

type LangStore = {
  activeLang: {
    title: string;
    localization: string;
  };
  setLang: (obj: activeLangType) => void;
};

export const useLang = create<LangStore>((set) => ({
  activeLang: {
    title: 'Ру',
    localization: 'ru',
  },
  setLang: (obj) => {
    set((state) => ({ activeLang: (state.activeLang = obj) }));
  },
}));
