import { burgerData, burgerData2 } from '@/database/burger.data';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useBurger } from '@/services/zustand/zusBurger';
import { useLang } from '../News/zusLang';
import { activeLangType } from '../Header/LangMenu';
import { cn } from '@/lib/utils';

const burgerLangs: activeLangType[] = [
  // {
  //   title: "Tm",
  //   localization: "tm",
  // },
  {
    title: 'Ру',
    localization: 'ru',
  },
  {
    title: 'En',
    localization: 'en',
  },
];

export interface BurgerItemType {
  id: number;
  view: string;
  viewEn: string;
  items: Item[];
}

export interface Item {
  title: string;
  link: string;
}

const BurgerMenu = () => {
  const setBurger = useBurger((state) => state.setBurger);

  const lang = useLang((state) => state.activeLang.localization);
  const setLang = useLang((state) => state.setLang);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  const [active, setActive] = useState(0);

  const handleClick = (id: number, activeId: number) => {
    if (id === activeId) setActive(0);
    else setActive(id);
  };

  const innerItem = burgerData2
    .find((item) => item.id === 6)
    ?.info.find((_, i, arr) => i + 1 === arr.length) as BurgerItemType;

  console.log(lang);

  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.55, 0, 0.1, 1] }}
      className="w-screen h-screen top-[95px] bg-purple absolute leading-[120%] text-white left-0 py-10 overflow-auto">
      <nav className="mx-4">
        <div className="flex flex-col gap-6 h-[150px] overflow-hidden">
          {burgerData.map((item, i) =>
            item.menu ? (
              <div key={i}>
                <div
                  onClick={() => handleClick(item.id, active)}
                  key={i}
                  className={cn('flex items-center justify-between', item.id !== 1 && 'hidden')}>
                  {lang === 'ru' ? item.view : item.viewEn}
                  <ChevronRight
                    className={cn(active === item.id && 'rotate-90', 'transition-all')}
                    size={18}
                  />
                </div>

                {active === item.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={cn(
                      'flex flex-col gap-6 h-[200px] transition-all border-t mt-3 pt-4 border-t-white/20',
                    )}>
                    {item.info?.map((item, i) => (
                      <Link key={i} to={item.link}>
                        {lang === 'ru' ? item.view : item.viewEn}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ) : (
              <Link onClick={() => setBurger(false)} key={i} to={item.link || ''}>
                {lang === 'ru' ? item.view : item.viewEn}
              </Link>
            ),
          )}
        </div>

        <hr className="border-white/20 my-8" />

        <div className={cn('flex h-[105px] flex-col gap-6')}>
          {burgerData2.map((item, i) => (
            <div key={i}>
              <div
                onClick={() => handleClick(item.id, active)}
                className="flex items-center justify-between">
                {lang === 'ru' ? item.view : item.viewEn}
                <ChevronRight size={18} />
              </div>

              {i === 1 && active === 8 && (
                <motion.div className="flex border-y border-y-white/20 my-3 py-4 flex-col gap-6">
                  {innerItem.items.map((item, i) => (
                    <Link
                      onClick={() => {
                        setBurger(false);
                      }}
                      to={item.link}
                      key={i}>
                      {item.title}
                    </Link>
                  ))}
                </motion.div>
              )}

              {active !== 8 && active === item.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    'flex flex-col gap-6 transition-all border-y mt-3 py-4 border-y-white/20',
                  )}>
                  {item.info?.map((item, i, arr) => (
                    <div key={i}>
                      <Link
                        className={cn(i + 1 === arr.length && 'hidden')}
                        onClick={() => {
                          setBurger(false);
                        }}
                        key={i}
                        to={item.link || ''}>
                        {item.view}
                      </Link>

                      {i + 1 === arr.length && (
                        <div
                          onClick={() => handleClick(8, active)}
                          className="flex items-center justify-between">
                          {item.view}
                          <ChevronRight size={18} />
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </nav>

      <div
        className={cn(
          'flex transition-all  items-center justify-center mt-20 mx-auto gap-10',
          active > 4 && 'translate-y-[200px]',
        )}>
        {burgerLangs.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              setLang(item);
              setBurger(false);
            }}
            className="flex cursor-pointer transition-all items-center gap-[10px]">
            <img src={`/assets/icons/burgerMenu/${item.localization}.svg`} alt="flag" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BurgerMenu;
