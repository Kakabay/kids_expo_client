import { useLang } from "@/services/zustand/zusLang";
import { type ClassValue, clsx } from "clsx";
import { useEffect } from "react";
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
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
};
