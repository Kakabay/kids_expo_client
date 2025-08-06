import { useEffect } from "react";
import i18n from "./i18n";
import { useLang } from "./services/zustand/zusLang";

const LanguageSync = () => {
  const lang = useLang((state) => state.activeLang.localization);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return null;
};

export default LanguageSync;
