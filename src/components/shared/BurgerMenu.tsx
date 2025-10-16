import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCallback, useMemo, useState } from "react";
import { useBurger } from "@/services/zustand/zusBurger";
import { useLang } from "@/services/zustand/zusLang";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/locales";
import { cn, useLockScroll } from "@/lib/utils";

const burgerLangs = [
  { title: "Tm", localization: "tm" },
  { title: "Ру", localization: "ru" },
  { title: "En", localization: "en" },
];

const BurgerMenu = () => {
  useLockScroll();
  const setBurger = useBurger((state) => state.setBurger);
  const setLang = useLang((state) => state.setLang);
  const { t } = useTranslation("nav");

  const burgerData = useMemo(
    () => t("data", { returnObjects: true }) as Navigation[],
    [t]
  );
  const burgerData2 = useMemo(
    () => t("data2", { returnObjects: true }) as Navigation[],
    [t]
  );

  const [activeContent, setActiveContent] = useState<string | null>(null);

  const toggleContent = useCallback((key: string) => {
    setActiveContent((prev) => (prev === key ? null : key));
  }, []);
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.55, 0, 0.1, 1] }}
      className="w-full h-screen top-20 bg-purple absolute leading-[120%] text-white z-[1200] left-0 py-10 overflow-auto"
    >
      <nav className="mx-4 flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          {burgerData.map((item, i) =>
            item.link ? (
              <Link onClick={() => setBurger(false)} key={i} to={item.link}>
                {item.title}
              </Link>
            ) : (
              <div key={i} className="flex flex-col">
                <div
                  onClick={() => toggleContent(item.title)}
                  className="flex items-center justify-between w-full"
                >
                  <h3>{item.title}</h3>
                  <img
                    src="/assets/icons/burgerMenu/arrow.svg"
                    alt="chevron"
                    className={cn(
                      "transition-all",
                      activeContent === item.title
                        ? "-rotate-90"
                        : "-rotate-180"
                    )}
                  />
                </div>

                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                    marginTop: 0,
                  }}
                  animate={
                    activeContent === item.title
                      ? {
                          height: "",
                          opacity: 1,
                          marginTop: 24,
                        }
                      : {}
                  }
                  className="flex flex-col ml-2 gap-6 overflow-hidden text-sm text-white/80"
                >
                  {item.content.map((item, i) => (
                    <Link
                      onClick={() => setBurger(false)}
                      key={i}
                      to={item.link}
                    >
                      {item.title}
                    </Link>
                  ))}
                </motion.div>
              </div>
            )
          )}
        </div>

        <hr />

        <div className="flex flex-col gap-6">
          {burgerData2.map((item, i) => (
            <div key={i} className="flex flex-col">
              <div
                onClick={() => toggleContent(item.title)}
                className="flex items-center justify-between w-full"
              >
                <h3>{item.title}</h3>
                <img
                  src="/assets/icons/burgerMenu/arrow.svg"
                  alt="chevron"
                  className={cn(
                    "transition-all",
                    activeContent === item.title ? "-rotate-90" : "-rotate-180"
                  )}
                />
              </div>

              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                  marginTop: 0,
                }}
                animate={
                  activeContent === item.title
                    ? {
                        height: "",
                        opacity: 1,
                        marginTop: 24,
                      }
                    : {}
                }
                className="flex flex-col ml-2 gap-6 overflow-hidden text-sm text-white/80"
              >
                {item.content.map((item, i) => (
                  <Link onClick={() => setBurger(false)} key={i} to={item.link}>
                    {item.title}
                  </Link>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Языки */}
        <div className="flex items-center justify-center mt-20 gap-10">
          {burgerLangs.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                setLang(item);
                setBurger(false);
              }}
              className="flex cursor-pointer items-center gap-2"
            >
              <img
                src={`/assets/icons/burgerMenu/${item.localization}.svg`}
                alt={item.title}
              />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </nav>
    </motion.div>
  );
};

export default BurgerMenu;
