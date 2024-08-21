import clsx from 'clsx';

import { sidebarData } from '../../database/pathnames';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../../services/zustand/zusLang';
import { motion } from 'framer-motion';

export const Sidebar = () => {
  const pathname = useLocation().pathname;
  const lang = useLang((state) => state.activeLang.localization);

  return (
    <aside className="tab:flex hidden flex-col items-start gap-y-4 py-5 sticky top-0 left-0 overflow-hidden min-w-[230px]">
      {sidebarData
        .filter(
          (obj) =>
            (pathname.includes('/exhibition-') && obj.exhibition) ||
            (pathname.includes('/participants-') && obj.members) ||
            (pathname.includes('/visitors-') && obj.visitors) ||
            (pathname.includes('/news') && obj.news) ||
            (pathname.includes('/media') && obj.media),
        )
        .map((item, i) => (
          <div key={i} className="">
            <p className={'mb-[16px] text-[16px] font-bold leading-[1.5]'}>
              {lang === 'en' ? item.pathnameEn : item.pathname}
            </p>
            <div className="flex flex-col gap-4 ml-4">
              {item.info
                .filter((item) => (lang === 'en' ? item.en : !item.en))
                .map((obj, i) => (
                  <div key={i}>
                    <Link
                      to={obj.link}
                      className={clsx(
                        'cursor-pointer leading-[130%] text-[14px] transition-all hover:text-purple h-6 mb-2',
                        {
                          'hover:text-purple text-purple hover:cursor-default':
                            obj.link === pathname,
                        },
                      )}
                      key={i}>
                      {obj.title}
                    </Link>
                    {obj.items?.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{
                          height: 0,
                          opacity: 0,
                          pointerEvents: 'none',
                        }}
                        animate={
                          pathname.includes('/participants-services')
                            ? {
                                height: '100%',
                                opacity: 1,
                                pointerEvents: 'all',
                              }
                            : {}
                        }
                        className="flex flex-col gap-3 text-[13px] leading-[125%] mt-4 ml-4">
                        <Link
                          to={item.link}
                          className={clsx('', {
                            'text-[#61378A]': item.link === pathname,
                            'text-[#808080]': item.link !== pathname,
                          })}>
                          {item.title}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        ))}
    </aside>
  );
};
