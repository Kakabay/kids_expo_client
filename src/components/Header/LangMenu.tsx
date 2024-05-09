import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import { v4 } from 'uuid';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../../services/zustand/zusLang';

export type activeLangType = {
  title: 'Ру' | 'Tm' | 'En';
  localization: 'ru' | 'tm' | 'en';
};

export const lang: activeLangType[] = [
  {
    title: 'Ру',
    localization: 'ru',
  },
  {
    title: 'En',
    localization: 'en',
  },
];

export const LangMenu = () => {
  const [active, setActive] = useState(false);
  const [rotate, setRotate] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const activeLang = useLang((state) => state.activeLang);
  const setLan = useLang((state) => state.setLang);

  const setLang = (str: { localization: 'ru' | 'en' | 'tm'; title: 'Ру' | 'En' | 'Tm' }) => {
    setActive(false);
    setLan(str);
  };

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActive(false);
        setRotate(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div
      ref={menuRef}
      className="relative cursor-pointer flex items-center gap-x-[20px]"
      onClick={() => {
        setActive(!active);
        setRotate(!rotate);
      }}>
      <div className="flex items-center px-[12px]">
        <p className="text-[16px]">{activeLang.title}</p>
        <img
          src="../assets/icons/drop-icon.svg"
          alt=""
          className={clsx('transition-rotate duration-300 img-auto', {
            'rotate-180': rotate,
          })}
        />
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="absolute overflow-hidden z-10 flex flex-col top-[28px] bg-purple transition-all duration-300">
            {lang
              .filter((item) => item.title !== activeLang.title)
              .map((item) => (
                <div
                  key={v4()}
                  onClick={() => setLang(item)}
                  className={clsx('p-3 text-[16px] pr-[22px] transition-all', {
                    'hover:bg-[#704B95]': item.title === item.title,
                  })}>
                  {item.title}
                </div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
