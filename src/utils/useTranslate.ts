import { useLang } from '../services/zustand/zusLang';

export const useTranslate = (ru: string, en: string) => {
  const lang = useLang((state) => state.activeLang.localization);

  return lang === 'ru' ? ru : en;
};
