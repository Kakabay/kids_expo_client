export interface PhotoTypes {
  status: string;
  data: CategoryData;
}

export interface CategoryData {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  photos: Photo[];
}

export interface Photo {
  id: number;
  header: string;
  url: string;
  event_id: number;
  categories_photos_id: number;
  expoevent: ExpoEvent;
}

export interface ExpoEvent {
  id: number;
  title: string;
  description: string;
  category_id: number;
  starts_at: string;
  ends_at: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  timing: Timing[];
  web_site: string;
  installation_date: string;
  dismantling_date: string;
  location: string;
  event_topic: string; // HTML с <p> тегами
  our: number;
  url_registration: string;
  url_web: string;
  url_detailed: string;
  date: string;
}

export interface Timing {
  date_ru: string;
  time_ru: string;
  date_tm: string;
  time_tm: string;
}

export interface VideoTypes {
  status: "success" | "error";
  data: CategoryData;
}

export interface CategoryData {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  videos: Video[];
}

export interface Video {
  id: number;
  header: string;
  url: string;
  event_id: number;
  preview: string;
  categories_videos_id: number;
  expoevent: ExpoEvent;
}

export interface ExpoEvent {
  id: number;
  title: string;
  description: string;
  category_id: number;
  starts_at: string;
  ends_at: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  timing: Timing[];
  web_site: string;
  installation_date: string;
  dismantling_date: string;
  location: string;
  event_topic: string; // HTML
  our: number;
  url_registration: string;
  url_web: string;
  url_detailed: string;
  date: string;
}

export interface Timing {
  date_ru: string;
  time_ru: string;
  date_tm: string;
  time_tm: string;
  date_en: string;
  time_en: string;
}
