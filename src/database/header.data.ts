export const headerMenu = [
  {
    title: 'Медиа',
    titleEn: 'Media',
    link: '/media/photo',
    dropDown: [
      {
        title: 'Фоторепортаж',
        link: '/media/photo',
        titleEn: 'Фоторепортаж',
      },
      {
        title: 'Видеорепортаж',
        link: '/media/video',
        titleEn: 'Видеорепортаж',
      },
    ],
  },
  { title: 'Новости', titleEn: 'News', link: '/news' },
  { title: 'FAQ', titleEn: 'FAQ', link: '/faq' },
  { title: 'Контакты', titleEn: 'Contacts', link: '/contacts' },

  { en: true, title: 'News', link: '/news' },
  { en: true, title: 'FAQ', link: '/faq' },
  { en: true, title: 'Contacts', link: '/contacts' },
];

export const headerMenu2 = [
  {
    ex: true,
    title: 'Выставка',
    link: '/exhibition-about',
    dropDown: [
      {
        title: 'О Выставке',
        titleEn: 'About',
        link: '/exhibition-about',
      },
      {
        title: 'Тематика',
        titleEn: 'Theme',
        link: '/exhibition-theme',
      },
      {
        title: 'Место проведения',
        titleEn: 'Venue',
        link: '/exhibition-avenue',
      },
      {
        title: 'Информационная поддержка',
        titleEn: 'Information support',
        link: '/exhibition-support',
      },
    ],
  },

  {
    partic: true,
    title: 'Участникам',
    link: '/participants-info',
    dropDown: [
      {
        title: 'Информация для участников',
        titleEn: 'Information for participants',
        link: '/participants-info',
      },
      {
        title: 'Преимущества участия',
        titleEn: 'Benefits of participation',
        link: '/participants-benefits',
      },
      {
        titleEn: 'Application for participation',
        title: 'Онлайн заявка для участников',
        link: '/participants-apply',
      },
      {
        title: 'Документы',
        titleEn: 'Documents',
        link: '/participants-docs',
      },
    ],
  },
  {
    vis: true,
    title: 'Посетителям',
    link: '/visitors-info',
    dropDown: [
      {
        title: 'Информация для посетителей',
        titleEn: 'Information for visitors',
        link: '/visitors-info',
      },
      {
        title: 'Преимущества участия',
        titleEn: 'Why visit',
        link: '/visitors-visit',
      },
    ],
  },

  { en: true, title: 'Exhibition', link: '/exhibition-about' },
  { en: true, title: 'Participants', link: '/participants-info' },
  { en: true, title: 'For visitors', link: '/visitors-info' },
];
