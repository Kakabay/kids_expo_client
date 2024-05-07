interface CardsType {
  path: string;
  title: string;
  en?: boolean;
}

export const cardsData: CardsType[] = [
  {
    path: '/assets/icons/card-icon.svg',
    title: 'Брошюра',
  },
  {
    path: '/assets/icons/card-icon2.svg',
    title: 'Программа',
  },
  {
    path: '/assets/icons/card-icon3.svg',
    title: 'Зарегистрироваться',
  },
  {
    path: '/assets/icons/card-icon4.svg',
    title: 'Гид по поездке и проживанию',
  },

  {
    en: true,
    path: '/assets/icons/card-icon.svg',
    title: 'Brochure',
  },
  {
    en: true,
    path: '/assets/icons/card-icon2.svg',
    title: 'Program',
  },
  {
    en: true,
    path: '/assets/icons/card-icon3.svg',
    title: 'Register',
  },
  {
    en: true,
    path: '/assets/icons/card-icon4.svg',
    title: 'Travel and accommodation guide',
  },
];

export const cardsRectData: CardsType[] = [
  {
    path: '/assets/icons/rect-icon.svg',
    title: 'Участники',
  },
  {
    path: '/assets/icons/rect-icon2.svg',
    title: 'Тематика выставки',
  },
  {
    path: '/assets/icons/rect-icon3.svg',
    title: 'Преимущества участия',
  },

  {
    en: true,
    path: '/assets/icons/rect-icon.svg',
    title: 'Participants',
  },
  {
    en: true,
    path: '/assets/icons/rect-icon2.svg',
    title: 'Exhibition theme',
  },
  {
    en: true,
    path: '/assets/icons/rect-icon3.svg',
    title: 'Benefits of participation',
  },
];
