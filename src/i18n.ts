import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import indexEn from "./locales/en/index.json";
import indexRu from "./locales/ru/index.json";
import indexTm from "./locales/tm/index.json";

import navEn from "./locales/en/nav.json";
import navRu from "./locales/ru/nav.json";
import navTm from "./locales/tm/nav.json";

import homeEn from "./locales/en/home.json";
import homeRu from "./locales/ru/home.json";
import homeTm from "./locales/tm/home.json";

import { useLang } from "./services/zustand/zusLang";

const initialLanguage = useLang.getState().activeLang.localization;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      index: indexEn,
      nav: navEn,
      home: homeEn,
    },
    ru: {
      index: indexRu,
      nav: navRu,
      home: homeRu,
    },
    tm: {
      index: indexTm,
      nav: navTm,
      home: homeTm,
    },
  },
  lng: initialLanguage,
  fallbackLng: "en",
  ns: ["home", "about", "nav", "index"], // список namespaces
  defaultNS: "home", // namespace по умолчанию (можно менять в компонентах)
  interpolation: {
    escapeValue: false, // React уже экранирует значения
  },
});

export default i18n;
