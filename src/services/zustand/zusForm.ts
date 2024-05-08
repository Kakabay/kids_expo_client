import { create } from "zustand";

type MethodType = {
  title: string;
  id: string;
};

type FormStore = {
  activeMethod: MethodType;
  setActiveMethod: (value: MethodType) => void;
};

export const useParticipantsForm = create<FormStore>((set) => ({
  activeMethod: {
    title: "телефон",
    id: "phone",
  },
  setActiveMethod: (name) => {
    set((state) => ({ activeMethod: (state.activeMethod = name) }));
  },
}));
