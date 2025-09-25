// import { create } from "zustand";

// export interface VideoType {
//   media_url: string;
//   preview: string;
//   header?: string;
//   id: number;
// }

// type MediaStore = {
//   activeVideo: VideoType;
//   setActiveVideo: (value: VideoType) => void;
// };

// export const useMedia = create<MediaStore>((set) => ({
//   activeVideo: {
//     id: 0,
//     media_url: "",
//     preview: "",
//     header: "",
//   },
//   setActiveVideo: (value) =>
//     set((state) => ({ activeVideo: (state.activeVideo = value) })),
// }));

import { create } from "zustand";

export interface VideoType {
  id: number;
  header: string;
  url: string;
  preview: string;
  event_id: number;
  categories_videos_id: number;
}

type MediaStore = {
  activeVideo: VideoType | null;
  setActiveVideo: (value: VideoType) => void;
};

export const useMedia = create<MediaStore>((set) => ({
  activeVideo: null,
  setActiveVideo: (value) => set({ activeVideo: value }),
}));
