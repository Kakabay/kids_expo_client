export interface GetBannersTypes {
  data: Datum[];
}

export interface Datum {
  code: string;
  banner_items: BannerItem[];
}

export interface BannerItem {
  title: string;
  text: string;
  image: string;
  link: string;
}
