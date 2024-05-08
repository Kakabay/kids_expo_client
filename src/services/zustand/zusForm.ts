import { create } from 'zustand';

type MethodType = {
  title: string;
  id: number;
};

type FormStore = {
  activeMethod: MethodType;
  setActiveMethod: (value: MethodType) => void;
};

export const useParticipantsForm = create<FormStore>((set) => ({
  activeMethod: {
    title: 'телефон',
    id: 1,
  },
  setActiveMethod: (name) => {
    set((state) => ({ activeMethod: (state.activeMethod = name) }));
  },
}));
