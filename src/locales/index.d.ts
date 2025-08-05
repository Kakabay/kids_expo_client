export interface Navigation {
  title: string;
  link?: string;
  id: number;
  content: {
    title: string;
    link: string;
  }[];
}

export interface NavigationItem {
  title: string;
  link: string;
  content?: never;
}

export interface NavigationGroup {
  id: number;
  title: string;
  content: NavigationItem[];
  link?: never;
}

export type Navigation = NavigationItem | NavigationGroup;
