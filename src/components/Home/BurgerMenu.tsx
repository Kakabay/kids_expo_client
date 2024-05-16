import { motion } from "framer-motion";
import { headerMenu, headerMenu2 } from "../Header/Header";
import { Link } from "react-router-dom";
import { useLang } from "../../services/zustand/zusLang";
import { useBurger } from "../../services/zustand/zusBurger";
import { activeLangType } from "../Header/LangMenu";
import { useState } from "react";

export const BurgerMenu = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const [activeMenu, setActiveMenu] = useState<string>("");

  const burgerLangs: activeLangType[] = [
    // {
    //   title: "Tm",
    //   localization: "tm",
    // },
    {
      title: "Ру",
      localization: "ru",
    },
    {
      title: "En",
      localization: "en",
    },
  ];

  const burger = useBurger((state) => state.burger);
  const setBurger = useBurger((state) => state.setBurger);

  const setLang = useLang((state) => state.setLang);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.3,
        ease: "circOut",
      }}
      exit={{
        x: "100%",
      }}
      className="bg-white3 overflow-auto fixed w-full z-[900] top-[97px] bottom-0 left-0 min-h-[100vh] h-full px-4 py-10 flex flex-col gap-10 overflow-y-auto"
    >
      <div className="leading-[135%] text-[18px] mb-10 flex flex-col gap-5">
        {!activeMenu &&
          headerMenu2
            .filter((item) => (localization === "en" ? item.en : !item.en))
            .map((item) => (
              <div
                className="cursor-pointer"
                onClick={() => setActiveMenu(item.link)}
              >
                {item.title}
              </div>
            ))}
      </div>

      {activeMenu.includes("/ex") &&
        headerMenu2
          .filter((item) => item.ex)
          .map((item) =>
            item.dropDown?.map((obj) => <Link to={""}>{obj.title}</Link>)
          )}

      <hr />

      <div className="leading-[135%] text-[14px] mb-10 flex flex-col gap-5">
        {headerMenu
          .filter((item) => (localization === "en" ? item.en : !item.en))
          .map((item) => (
            <Link
              to={item.link}
              onClick={() => {
                setBurger(!burger);
              }}
            >
              {item.title}
            </Link>
          ))}
      </div>

      <div className="flex items-center mx-auto gap-10">
        {burgerLangs.map((item) => (
          <div
            onClick={() => setLang(item)}
            className="flex cursor-pointer items-center gap-[10px]"
          >
            <img
              src={`/assets/icons/burgerMenu/${item.localization}.svg`}
              alt="flag"
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
