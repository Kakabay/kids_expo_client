import { useLang } from "@/services/zustand/zusLang";
import { type ClassValue, clsx } from "clsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useTranslate(ru: string, en: string) {
  const lang = useLang((state) => state.activeLang.localization);

  if (lang === "ru") return ru;
  else return en;
}

export const useScrollTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
};

export const useArrayIndex = (lang: string): number => {
  return lang === "ru" ? 0 : 1;
};
