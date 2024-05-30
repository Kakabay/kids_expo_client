import { create } from "zustand";
import { activeLangType } from "../../components/Header/LangMenu";
import { useStorage } from "../../hooks/localStorage/useStorage";
import { string } from "zod";

type LangStore = {
  activeLang: {
    title: string;
    localization: string;
  };
  setLang: (obj: activeLangType) => void;
};

const { getItem } = useStorage("lang");

export const useLang = create<LangStore>((set) => ({
  activeLang: getItem() ? getItem() : { title: string, localization: string },
  setLang: (obj) => {
    set((state) => ({ activeLang: (state.activeLang = obj) }));
  },
}));
