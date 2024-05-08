import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { LangMenu } from './LangMenu';
import { useLang } from '../../services/zustand/zusLang';

export const headerMenu = [
  { title: 'Новости', titleEn: 'News', link: '/' },
  { title: 'FAQ', titleEn: 'FAQ', link: '/' },
  { title: 'Контакты', titleEn: 'Contacts', link: '/' },

  { en: true, title: 'News', link: '/' },
  { en: true, title: 'FAQ', link: '/' },
  { en: true, title: 'Contacts', link: '/' },
];

export const headerMenu2 = [
  { title: 'Выставка', link: '/about-exhibition' },
  { title: 'Участникам', link: '/participants-apply' },
  { title: 'Посетителям', link: '/' },

  { en: true, title: 'Exhibition', link: '/about-exhibition' },
  { en: true, title: 'Participants', link: '/participants-apply' },
  { en: true, title: 'For visitors', link: '/' },
];

export const headerMenu2En = [];

export const Header = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const chooseDataLang = (en: string, ru: string) => (localization === 'en' ? en : ru);

  return (
    <header className="relative z-[3000] flex-col">
      <div className="hidden tab:flex items-center bg-purple text-white py-[12px] font-regular text-extraSm">
        <div className="container flex items-center justify-between">
          <p className="text-[13px] leading-[115%]">
            {chooseDataLang('Phone: +99363006200', 'Тел.: +99362006200')}
          </p>
          <div className="flex items-center gap-[6px]">
            <div className="hidden tab:flex items-center gap-x-[20px]">
              {headerMenu
                .filter((item) => (localization === 'en' ? item.en : !item.en))
                .map((item) => (
                  <div key={item.link}>
                    <Link
                      to={''}
                      className={clsx(
                        'after:transition-all cursor-pointer duration-1000 relative leading-[130%]',
                        {
                          // 'link-border-bottom cursor-default hover:after:bg-green':
                          //   // item.link === pathname,
                          'hover:link-border-bottom text-[16px] hover:after:bg-[#738799]':
                            item.title === item.title,
                        },
                      )}>
                      {item.title}
                    </Link>
                  </div>
                ))}
            </div>
            <div className="flex gap-[10px]">
              <LangMenu />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-black drop-shadow-headerShadow">
        <div className="container py-[5px] flex items-center justify-between">
          <Link to="/" className="flex">
            <img
              src="/assets/icons/flower-toy.svg"
              width={65}
              height={65}
              alt="logo"
              className="mr-[5px]"
            />
            <div className="">
              <p className="text-#050505 font-bold text-[12px]">
                {chooseDataLang('19-22 August, 2024', '19–22 августа 2024')}
              </p>
              <img src="/assets/icons/kids-expo.svg" alt="" />
            </div>
          </Link>
          <div className="hidden tab:flex text-[16px] items-center gap-x-[20px] font-medium">
            {headerMenu2
              .filter((item) => (localization === 'en' ? item.en : !item.en))
              .map((item) => (
                <Link to={item.link} className="cursor-pointer" key={item.link}>
                  {item.title}
                </Link>
              ))}
          </div>

          <div
            // onClick={toggleMenu}
            className="flex flex-col tab:hidden cursor-pointer h-8 w-8 p-1 justify-between items-center">
            <span
              className={clsx('block transition-all rounded-full bg-purple w-6 h-[2px]', {
                // "rotate-[45deg] translate-y-[9px]": burgerMenu,
              })}
            />
            <span
              className={clsx('block transition-all rounded-full bg-purple w-6 h-[2px]', {
                // "opacity-0 hidden": burgerMenu,
              })}
            />
            <span
              className={clsx(
                'block transition-all duration-300 rounded-full bg-purple w-6 h-[2px]',
                {
                  // "rotate-[-45deg] translate-y-[-10px]": burgerMenu,
                },
              )}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
