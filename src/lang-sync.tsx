// LanguageSync.tsx
import { useEffect } from "react";
import i18n from "./i18n";
import { useLang } from "./services/zustand/zusLang";

const LanguageSync = () => {
  // Подписываемся на изменение языка из zustand
  const lang = useLang((state) => state.activeLang.localization);

  useEffect(() => {
    // Когда язык изменился, обновляем i18next
    i18n.changeLanguage(lang);
  }, [lang]);

  return null; // Компонент ничего не рендерит
};

export default LanguageSync;
