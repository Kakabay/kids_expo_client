import { create } from 'zustand';

export interface VideoType {
  media_url: string;
  preview: string;
  header?: string;
}

type MediaStore = {
  activeVideo: VideoType;
  setActiveVideo: (value: VideoType) => void;
};

export const useMedia = create<MediaStore>((set) => ({
  activeVideo: {
    media_url: '',
    preview: '',
    header: '',
  },
  setActiveVideo: (value) => set((state) => ({ activeVideo: (state.activeVideo = value) })),
}));
