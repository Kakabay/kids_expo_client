import { create } from 'zustand';
import { activeLangType } from '../../components/Header/LangMenu';
import { useStorage } from '../../hooks/localStorage/useStorage';

type LangStore = {
  activeLang: {
    title: string;
    localization: string;
  };
  setLang: (obj: activeLangType) => void;
};

const { getItem } = useStorage('lang');

console.log(getItem());

export const useLang = create<LangStore>((set) => ({
  activeLang: getItem(),
  setLang: (obj) => {
    set((state) => ({ activeLang: (state.activeLang = obj) }));
  },
}));
