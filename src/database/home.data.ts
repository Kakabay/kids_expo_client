interface CardsType {
  path: string;
  title: string;
  en?: boolean;
  link: string;
}

export const cardsData: CardsType[] = [
  {
    path: '/assets/icons/card-icon.svg',
    title: 'Документы',
    link: '/participants-docs',
  },
  {
    path: '/assets/icons/card-icon2.svg',
    title: 'Программа',
    link: '',
  },
  {
    path: '/assets/icons/card-icon3.svg',
    title: 'Зарегистрироваться',
    link: '/participants-apply',
  },
  {
    path: '/assets/icons/card-icon4.svg',
    title: 'Гид по поездке и проживанию',
    link: '',
  },

  {
    en: true,
    path: '/assets/icons/card-icon.svg',
    title: 'Documents',
    link: '/participants-docs',
  },
  {
    en: true,
    path: '/assets/icons/card-icon2.svg',
    title: 'Program',
    link: '',
  },
  {
    en: true,
    path: '/assets/icons/card-icon3.svg',
    title: 'Register',
    link: '/participants-apply',
  },
  {
    en: true,
    path: '/assets/icons/card-icon4.svg',
    title: 'Travel and accommodation guide',
    link: '',
  },
];

export const cardsRectData: CardsType[] = [
  {
    path: '/assets/icons/rect-icon.svg',
    title: 'Участники',
    link: '/participants-info',
  },
  {
    path: '/assets/icons/rect-icon2.svg',
    title: 'Тематика выставки',
    link: '/exhibition-theme',
  },
  {
    path: '/assets/icons/rect-icon3.svg',
    title: 'Преимущества участия',
    link: '/participants-benefits',
  },

  {
    en: true,
    path: '/assets/icons/rect-icon.svg',
    title: 'Participants',
    link: '/participants-info',
  },
  {
    en: true,
    path: '/assets/icons/rect-icon2.svg',
    title: 'Exhibition theme',
    link: '/exhibition-theme',
  },
  {
    en: true,
    path: '/assets/icons/rect-icon3.svg',
    title: 'Benefits of participation',
    link: '/participants-benefits',
  },
];
