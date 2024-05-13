export interface TopicsTypes {
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  icon: Icon[];
}

export interface Icon {
  id: number;
  disk_name: string;
  file_name: string;
  path: string;
  extension: string;
}
