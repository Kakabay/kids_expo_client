import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useBurger } from "@/services/zustand/zusBurger";
import { useLang } from "@/services/zustand/zusLang";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { Navigation, NavigationGroup } from "@/locales";

const burgerLangs = [
  { title: "Tm", localization: "tm" },
  { title: "Ру", localization: "ru" },
  { title: "En", localization: "en" },
];

const BurgerMenu = () => {
  const setBurger = useBurger((state) => state.setBurger);
  const setLang = useLang((state) => state.setLang);
  const { t } = useTranslation("nav");

  const isNavigationGroup = (item: Navigation): item is NavigationGroup =>
    "content" in item;

  const burgerData = t("data", { returnObjects: true }) as Navigation[];
  const burgerData2 = t("data2", { returnObjects: true }) as Navigation[];

  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const toggleActive = (id: number) => {
    setActive((prev) => (prev === id ? null : id));
  };

  const innerItem = burgerData2.find(
    (item) => isNavigationGroup(item) && item.id === 6
  ) as NavigationGroup;

  const lastInnerContent = innerItem?.content.at(-1);

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.55, 0, 0.1, 1] }}
      className="w-screen min-h-screen top-20 bg-purple absolute leading-[120%] text-white z-[1200] left-0 py-10 overflow-auto"
    >
      <nav className="mx-4 flex flex-col gap-10">
        {/* Первая группа */}
        <div className="flex flex-col gap-6">
          {burgerData.map((item) =>
            isNavigationGroup(item) ? (
              <div key={item.id}>
                <div
                  onClick={() => toggleActive(item.id)}
                  className={cn(
                    "flex items-center justify-between cursor-pointer",
                    item.id !== 1 && "hidden"
                  )}
                >
                  {item.title}
                  <ChevronRight
                    className={cn(
                      active === item.id && "rotate-90",
                      "transition-all"
                    )}
                    size={18}
                  />
                </div>

                {active === item.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col gap-6 mt-3 pt-4 border-t border-white/20 transition-all"
                  >
                    {item.content.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.link}
                        onClick={() => setBurger(false)}
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ) : (
              <Link
                key={item.title}
                to={item.link || ""}
                onClick={() => setBurger(false)}
              >
                {item.title}
              </Link>
            )
          )}
        </div>

        <hr className="border-white/20" />

        {/* Вторая группа */}
        <div className="flex flex-col gap-6">
          {burgerData2.map((item) =>
            isNavigationGroup(item) ? (
              <div key={item.id}>
                <div
                  onClick={() => toggleActive(item.id)}
                  className="flex items-center justify-between cursor-pointer"
                >
                  {item.title}
                  <ChevronRight
                    className={cn(
                      active === item.id && "rotate-90",
                      "transition-all"
                    )}
                    size={18}
                  />
                </div>

                {/* Вложенные пункты с "ещё" */}
                {active === item.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col gap-6 mt-3 py-4 border-y border-white/20 transition-all"
                  >
                    {item.content.map((sub, i) =>
                      sub.title === lastInnerContent?.title ? (
                        <div
                          key={i}
                          onClick={() => toggleActive(999)}
                          className="flex items-center justify-between cursor-pointer"
                        >
                          {sub.title}
                          <ChevronRight size={18} />
                        </div>
                      ) : (
                        <Link
                          key={i}
                          to={sub.link}
                          onClick={() => setBurger(false)}
                        >
                          {sub.title}
                        </Link>
                      )
                    )}

                    {/* Раскрытие вложенного последнего пункта */}
                    {active === 999 && lastInnerContent && (
                      <motion.div className="flex flex-col gap-4 mt-3 border-t pt-4 border-white/20">
                        {innerItem?.content
                          ?.filter((el) => el.title === lastInnerContent.title)
                          .map((el, i) => (
                            <Link
                              key={i}
                              to={el.link}
                              onClick={() => setBurger(false)}
                            >
                              {el.title}
                            </Link>
                          ))}
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </div>
            ) : null
          )}
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
