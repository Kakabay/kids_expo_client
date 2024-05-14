import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { LangMenu } from './LangMenu';
import { useLang } from '../../services/zustand/zusLang';
import { v4 } from 'uuid';
import { BurgerMenu } from '../Home/BurgerMenu';
import { useState } from 'react';

export const headerMenu = [
  { title: 'Новости', titleEn: 'News', link: '/news' },
  { title: 'FAQ', titleEn: 'FAQ', link: '/faq' },
  { title: 'Контакты', titleEn: 'Contacts', link: '/contacts' },

  { en: true, title: 'News', link: '/news' },
  { en: true, title: 'FAQ', link: '/faq' },
  { en: true, title: 'Contacts', link: '/contacts' },
];

export const headerMenu2 = [
  { title: 'Выставка', link: '/exhibition-about' },
  { title: 'Участникам', link: '/participants-info' },
  { title: 'Посетителям', link: '/visitors-info' },

  { en: true, title: 'Exhibition', link: '/exhibition-about' },
  { en: true, title: 'Participants', link: '/participants-info' },
  { en: true, title: 'For visitors', link: '/visitors-info' },
];

export const Header = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const chooseDataLang = (en: string, ru: string) => (localization === 'en' ? en : ru);

  const [burgerOpen, setBurgerOpen] = useState(false);

  const { pathname } = window.location;

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
                  <div key={v4()}>
                    <Link
                      to={item.link}
                      className={clsx(
                        'after:transition-all cursor-pointer duration-1000 relative leading-[130%]',
                        {
                          // 'link-border-bottom cursor-default hover:after:bg-white':
                          //   item.link === pathname,
                          // 'hover:link-border-bottom text-[16px] hover:after:bg-[#738799]':
                          //   item.title === item.title,
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

      <div
        className={clsx('bg-white text-black drop-shadow-headerShadow sticky z-50', {
          'fixed w-full top-0': burgerOpen,
        })}>
        <div className="container py-[15px] tab:py-[5px] flex items-center justify-between">
          <Link to="/" className="flex">
            <img
              src="/assets/icons/flower-toy.svg"
              width={65}
              height={65}
              alt="logo"
              className="mr-[5px]"
            />
            <div>
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
                <Link to={item.link} className="cursor-pointer" key={v4()}>
                  {item.title}
                </Link>
              ))}
          </div>

          <div
            onClick={() => setBurgerOpen(!burgerOpen)}
            className="flex flex-col tab:hidden cursor-pointer h-8 w-8 p-1 justify-between items-center">
            <span
              className={clsx('block transition-all rounded-full bg-purple w-6 h-[2px]', {
                'rotate-[45deg] translate-y-[9px]': burgerOpen,
              })}
            />
            <span
              className={clsx('block transition-all rounded-full bg-purple w-6 h-[2px]', {
                'opacity-0 hidden': burgerOpen,
              })}
            />
            <span
              className={clsx(
                'block transition-all duration-300 rounded-full bg-purple w-6 h-[2px]',
                {
                  'rotate-[-45deg] translate-y-[-13px]': burgerOpen,
                },
              )}
            />

            {/* {burgerOpen && <BurgerMenu />} */}
          </div>
        </div>
      </div>
    </header>
  );
};
