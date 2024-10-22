import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { LangMenu } from './LangMenu';
import { useLang } from '../../services/zustand/zusLang';
import { v4 } from 'uuid';
import BurgerMenu from '../Home/BurgerMenu';
import { AnimatePresence } from 'framer-motion';
import { useBurger } from '../../services/zustand/zusBurger';
import { headerMenu, headerMenu2 } from '../../database/header.data';
import { useGetEn } from '../../hooks/language/useGetEn';
import { GetTicketBtn } from './GetTicketBtn';
import { motion } from 'framer-motion';

export const Header = () => {
  const activeLang = useLang((state) => state.activeLang);
  const burger = useBurger((state) => state.burger);
  const setBurger = useBurger((state) => state.setBurger);

  return (
    <header className="relative z-[3000] flex-col">
      <div className="hidden tab:flex items-center bg-purple text-white py-[12px] font-regular text-extraSm">
        <div className="container flex items-center justify-between">
          <p className="text-[13px] leading-[115%]">
            {useGetEn('Phone: +99363006200', 'Тел.: +99362006200')}
          </p>
          <div className="flex items-center gap-[6px]">
            <div className="hidden tab:flex items-center gap-x-[20px]">
              {headerMenu
                .filter((item) => (activeLang.localization === 'en' ? item.en : !item.en))
                .map((item, i) => (
                  <div key={i}>
                    <Link
                      to={item.link}
                      className={clsx(
                        'after:transition-all cursor-pointer duration-1000 relative leading-[130%]',
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
        className={clsx('bg-white text-black drop-shadow-headerShadow', {
          // 'fixed w-full top-0': burgerOpen,
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
                {useGetEn('22-24 August, 2025', '22-24 августа 2025')}
              </p>
              <img src="/assets/icons/kids-expo.svg" alt="" />
            </div>
          </Link>
          <div className="hidden tab:flex text-[16px] items-center gap-x-[20px] font-medium">
            {headerMenu2
              .filter((item) => (activeLang.localization === 'en' ? item.en : !item.en))
              .map((item) => (
                <Link to={item.link} className="cursor-pointer" key={v4()}>
                  {item.title}
                </Link>
              ))}

            <GetTicketBtn href="https://reg.turkmenexpo.com/login.php?idExh=1" />
          </div>

          <div
            onClick={() => setBurger(!burger)}
            className="flex flex-col tab:hidden cursor-pointer h-8 w-8 p-1 transition-all justify-between items-center">
            <span
              className={clsx('block transition-all rounded-full bg-purple w-6 h-[2px]', {
                'rotate-[45deg] translate-y-[9px]': burger,
              })}
            />
            <motion.span
              initial={{ opacity: 1 }}
              animate={burger ? { opacity: 0 } : {}}
              className={clsx('block transition-all rounded-full bg-purple w-6 h-[2px]', {
                'opacity-0 hidden': burger,
              })}
            />
            <span
              className={clsx(
                'block transition-all duration-300 rounded-full bg-purple w-6 h-[2px]',
                {
                  'rotate-[-45deg] translate-y-[-13px]': burger,
                },
              )}
            />
          </div>
          <AnimatePresence>{burger && <BurgerMenu />}</AnimatePresence>
        </div>
      </div>
    </header>
  );
};
