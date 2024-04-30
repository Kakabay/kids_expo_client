import { create } from 'zustand';
import { activeLangType } from '../components/Header/LangMenu';

const useStore = create((set) => ({
  activeLang: {
    title: 'Ру',
    localization: 'ru',
  },
  setActiveLang: () =>
    set((state: activeLangType, action: activeLangType) => ({
      lang: (state = action),
    })),
}));
