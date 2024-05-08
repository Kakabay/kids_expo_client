import clsx from "clsx";

import { sidebarData } from "../../database/pathnames";
import { v4 } from "uuid";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const pathname = useLocation().pathname;

  return (
    <aside className="flex flex-col items-start gap-y-[12px] py-[20px] sticky top-0 left-0 overflow-hidden min-w-[230px]">
      {sidebarData
        .filter(
          (obj) =>
            (pathname === "/about-exhibition" && obj.exhibition) ||
            (pathname === "/participants-exhibition" && obj.members)
        )
        .map((item) => (
          <div key={v4()}>
            <p
              className={
                "text-bgWhite mb-[16px] text-[16px] font-bold leading-[1.5]"
              }
            >
              {item.pathname}
            </p>
            <div className="flex flex-col items-start gap-y-[8px]">
              <div className="flex flex-col gap-[10px] px-[16px]">
                {item.info.map((obj) => (
                  <Link
                    to={obj.link}
                    className={clsx(
                      "cursor-pointer py-1 leading-[130%] text-[14px] transition-all hover:text-purple",
                      {
                        "hover:text-purple text-purple hover:cursor-default":
                          obj.link === pathname,
                      }
                    )}
                    key={v4()}
                  >
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
