import clsx from 'clsx';

import { sidebarData } from '../../database/pathnames';
import { v4 } from 'uuid';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../../services/zustand/zusLang';

export const Sidebar = () => {
  const pathname = useLocation().pathname;
  const localization = useLang((state) => state.activeLang.localization);

  return (
    <aside className="tab:flex hidden flex-col items-start gap-y-[12px] py-[20px] sticky top-0 left-0 overflow-hidden min-w-[230px]">
      {sidebarData
        .filter(
          (obj) =>
            (pathname.includes('/exhibition-') && obj.exhibition) ||
            (pathname.includes('/participants-') && obj.members),
        )
        .map((item) => (
          <div key={v4()}>
            <p className={'text-bgWhite mb-[16px] text-[16px] font-bold leading-[1.5]'}>
              {localization === 'en' ? item.pathnameEn : item.pathname}
            </p>

            <div className="flex flex-col items-start gap-y-[8px]">
              <div className="flex flex-col gap-[10px] px-[16px]">
                {item.info
                  .filter((item) => (localization === 'en' ? item.en : !item.en))
                  .map((obj) => (
                    <Link
                      to={obj.link}
                      className={clsx(
                        'cursor-pointer py-1 leading-[130%] text-[14px] transition-all hover:text-purple',
                        {
                          'hover:text-purple text-purple hover:cursor-default':
                            obj.link === pathname,
                        },
                      )}
                      key={v4()}>
                      {obj.title}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        ))}
    </aside>
  );
};
