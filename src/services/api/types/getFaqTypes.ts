export interface FaqDataType {
  data: Datum[];
}

export interface Datum {
  header: string;
  faq_items: FaqItemsType[];
}

export interface FaqItemsType {
  answer: string;
  question: string;
}
