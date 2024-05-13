export interface SeperateNewsTypes {
  data: Data;
}

export interface Data {
  id: string;
  title: string;
  published_at: string;
  content_html: string;
  featured_images: FeaturedImage[];
}

export interface FeaturedImage {
  id: number;
  disk_name: string;
  file_name: string;
  path: string;
  extension: string;
}
