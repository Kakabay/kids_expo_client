import { FC } from "react";
import { MapPin, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { navBottom, navTop } from "@/database/header.data";
import { LangMenu } from "../shared/LangMenu";
import { HoverMenu } from "../shared/HoverMenu";
import { useTranslate } from "@/lib/utils";

export const Header: FC = () => {
  return (
    <header>
      <div className="h-12 hidden lg:flex bg-sur text-surface-bg bg-surface-brand text-white items-center">
        <div className="container flex items-center justify-between">
          <div className="gap-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin />
              <h4 className="text-sm">
                {useTranslate(
                  "Ашхабад, Туркменистан",
                  "Ashgabat, Turkmenistan"
                )}
              </h4>
            </div>

            <nav className="flex items-center gap-6">
              {navTop.map((item, i) => (
                <Link
                  target={item.link.includes("http") ? "_blank" : ""}
                  className="py-2 font-bold text-sm"
                  key={i}
                  to={item.link || ""}
                >
                  {useTranslate(item.title, item.titleEn)}
                </Link>
              ))}
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

      <div className="bg-primary border border-border-subtle py-2 flex items-center justify-between h-20">
        <div className="container flex items-center justify-between">
          <div className="flex justify-between w-full items-center gap-8">
            <Link to="/">
              <img src="/logo.svg" />
            </Link>

            <nav className="lg:flex hidden items-center gap-6">
              {navBottom.map((item, i) => (
                <HoverMenu key={i} {...item} />
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <LangMenu className="lg:hidden" light />
            {/* <BurgerMenu /> */}
          </div>
        </div>
      </div>
    </header>
  );
};
