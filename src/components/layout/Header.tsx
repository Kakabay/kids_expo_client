import { FC } from "react";
import { MapPin, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { LangMenu } from "../shared/LangMenu";
import { HoverMenu } from "../shared/HoverMenu";
import { useTranslate } from "@/lib/utils";
import { useBurger } from "@/services/zustand/zusBurger";
import { AnimatePresence } from "framer-motion";
import BurgerMenu from "../shared/BurgerMenu";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/locales";

export const Header: FC = () => {
  const burger = useBurger((state) => state.burger);
  const setBurger = useBurger((state) => state.setBurger);

  const { t } = useTranslation("nav");

  const address = useTranslate(
    "Ашхабад, Туркменистан",
    "Ashgabat, Turkmenistan"
  );

  const data = t("data", { returnObjects: true }) as Navigation[];
  const data2 = t("data2", { returnObjects: true }) as Navigation[];

  return (
    <header className="fixed left-0 top-0 right-0 z-50 h-[128px]">
      <div className="h-12 hidden lg:flex text-surface-bg bg-surface-brand text-white items-center">
        <div className="container flex items-center justify-between">
          <div className="gap-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin />
              <h4 className="text-sm">{address}</h4>
            </div>

            <nav className="flex items-center gap-6">
              {data.map((item, i) =>
                item.link ? (
                  <Link
                    target={item.link.includes("http") ? "_blank" : ""}
                    className="py-2 font-bold text-sm"
                    key={i}
                    to={item.link || ""}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <HoverMenu titleClassName="!text-white" key={i} {...item} />
                )
              )}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Smartphone size={16} strokeWidth="3px" />
              <h4 className="text-sm">+99371871812</h4>
            </div>

            <LangMenu className="!text-on_surface" />
          </div>
        </div>
      </div>

      <div className="bg-surface-secondary relative z-[200  ] border border-border-subtle py-2 flex items-center justify-between h-20">
        <div className="container flex items-center justify-between">
          <div className="flex justify-between w-full items-center gap-8">
            <Link to="/">
              <img src="/logo.svg" />
            </Link>

            <nav className="lg:flex hidden items-center gap-6">
              {data2.map((item) => (
                <HoverMenu key={item.title} {...item} />
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div
              onClick={() => setBurger(!burger)}
              className="flex flex-col gap-1.5 cursor-pointer lg:hidden"
            >
              <span className="w-7 h-[1.7px] bg-surface-brand rounded"></span>
              <span className="w-7 h-[1.7px] bg-surface-brand rounded"></span>
              <span className="w-7 h-[1.7px] bg-surface-brand rounded"></span>
            </div>

            <AnimatePresence>{burger && <BurgerMenu />}</AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};
