import { create } from 'zustand';

type MethodType = {
  title?: string;
  titleEn?: string;
  id: number;
};

type FormStore = {
  success: string;
  activeMethod: MethodType;
  setActiveMethod: (value: MethodType) => void;
  setSuccess: (value: string) => void;
};

export const useParticipantsForm = create<FormStore>((set) => ({
  activeMethod: {
    title: 'телефон',
    titleEn: 'phone',
    id: 1,
  },
  success: 'error',
  setSuccess: (name) => {
    set((state) => ({ success: (state.success = name) }));
  },
  setActiveMethod: (name) => {
    set((state) => ({ activeMethod: (state.activeMethod = name) }));
  },
}));
