import { useLang } from "../../services/zustand/zusLang";

export const useGetEn = (en: string, ru: string) => {
  const localization = useLang((state) => state.activeLang.localization);

  return localization === "en" ? en : ru;
};
