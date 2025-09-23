export interface Testimonials {
  status: string; // "success" или "error"
  data: Testimonial[];
}

export interface Testimonial {
  id: number;
  name: string;
  job_title: string;
  text: string;
  created_at: string; // ISO-строка даты
  updated_at: string; // ISO-строка даты
  image: ImageData;
}

export interface ImageData {
  id: number;
  disk_name: string;
  file_name: string;
  file_size: number;
  content_type: string;
  title: string | null;
  description: string | null;
  field: string;
  sort_order: number;
  created_at: string; // ISO-строка даты
  updated_at: string; // ISO-строка даты
  path: string; // абсолютный URL
  extension: string; // например "png"
}
