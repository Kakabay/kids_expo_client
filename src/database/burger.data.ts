export const burgerData = [
  {
    view: 'Медиа',
    viewEn: 'Media',
    menu: true,
    id: 1,
    info: [
      {
        view: 'Фоторепортаж',
        viewEn: 'Фоторепортаж',
        link: '/media/photo',
      },
      {
        view: 'Видеорепортаж',
        viewEn: 'Видеорепортаж',
        link: '/media/video',
      },
    ],
  },
  {
    menu: false,

    id: 2,
    view: 'Новости',
    viewEn: 'News',
    link: '/news',
  },
  {
    menu: false,
    id: 3,

    view: 'FAQ',
    viewEn: 'FAQ',
    link: '/faq',
  },
  {
    menu: false,
    id: 4,

    view: 'Контакты',
    viewEn: 'Contacts',
    link: '/contacts',
  },
];

export const burgerData2 = [
  {
    id: 5,

    view: 'Выставка',
    viewEn: 'Exhibition',
    menu: true,

    info: [
      {
        view: 'О выставке',
        viewEn: 'About',
        link: '/exhibition-about',
      },
      {
        view: 'Тематика',
        viewEn: 'Theme',
        link: '/exhibition-theme',
      },
      {
        view: 'Место проведения',
        viewEn: 'Venue',
        link: '/exhibition-avenue',
      },
      {
        view: 'Информационная поддержка',
        viewEn: 'Information support',
        link: '/exhibition-support',
      },
    ],
  },
  {
    id: 6,

    view: 'Участникам',
    viewEn: 'Participants',
    menu: true,

    info: [
      {
        view: 'Информация для участников',
        viewEn: 'Information for participants',
        link: '/participants-info',
      },
      {
        view: 'Преимущества участия',
        viewEn: 'Benefits of participation',
        link: '/participants-benefits',
      },
      {
        view: 'Онлайн-заявка для участников',
        viewEn: 'Application for participation',
        link: '/participants-apply',
      },
      {
        view: 'Документы',
        viewEn: 'Documents',
        link: '/participants-docs',
      },
      {
        view: 'Услуги для экспонентов',
        viewEn: 'Participants',
        link: '/participants-services',
      },
    ],
  },
  {
    id: 7,

    view: 'Посетителям',
    menu: true,

    info: [
      {
        view: 'Информация для посетителей',
        link: '/visitors-info',
      },
      {
        view: 'Зачем посещать',
        link: '/visitors-visit',
      },
    ],
  },
];
