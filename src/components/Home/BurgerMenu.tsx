import { burgerData, burgerData2 } from "@/database/burger.data";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Separator } from "../../../components/ui/separator";
import { useBurger } from "@/services/zustand/zusBurger";
import { useLang } from "../News/zusLang";
import { activeLangType } from "../Header/LangMenu";

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

const BurgerMenu = () => {
  const [activeDrop, setActiveDrop] = useState("");

  const [activeFooter, setActiveFooter] = useState("");

  const burger = useBurger((state) => state.burger);
  const setBurger = useBurger((state) => state.setBurger);

  const setLang = useLang((state) => state.setLang);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const findItem = burgerData.find((item) => item.view === activeDrop);

  const findItem2 = burgerData2.find((item) => item.view === activeFooter);

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ ease: "circInOut", duration: 0.3 }}
      className="w-screen h-screen top-[97px] bg-purple absolute leading-[120%] text-white left-0 py-10 overflow-auto"
    >
      <motion.div className="container flex flex-col gap-5 font-normal">
        <AnimatePresence>
          {!findItem ? (
            burgerData.map((item, i) => (
              <motion.div key={i}>
                {item.link ? (
                  <motion.div>
                    <Link onClick={() => setBurger(false)} to={item.link}>
                      {item.view}
                    </Link>
                  </motion.div>
                ) : (
                  <div
                    key={i}
                    onClick={() => setActiveDrop(item.view)}
                    className="flex items-center justify-between"
                  >
                    {item.view}
                    <ChevronRight size={20} />
                  </div>
                )}
              </motion.div>
            ))
          ) : (
            <motion.div className="cursor-pointer">
              <div
                onClick={() => setActiveDrop("")}
                className="flex items-center gap-3 pb-2.5"
              >
                <ChevronRight size={20} className="rotate-[180deg]" />
                {findItem.view}
              </div>

              <Separator className="container mt-2.5" />

              <div className="flex flex-col gap-5 mt-5">
                {findItem.info?.map((item, i) => (
                  <Link key={i} onClick={() => setBurger(false)} to={item.link}>
                    {item.view}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="container my-10">
        <Separator className="h-[0.3px]" />
      </div>

      <div className="flex flex-col gap-5 container">
        {!findItem2 ? (
          burgerData2.map((item, i) => (
            <div
              key={i}
              onClick={() => setActiveFooter(item.view)}
              className="flex items-center justify-between"
            >
              {item.view}
              <ChevronRight size={20} />
            </div>
          ))
        ) : (
          <div className="cursor-pointer">
            <div
              onClick={() => setActiveFooter("")}
              className="flex items-center gap-3 pb-2.5"
            >
              <ChevronRight size={20} className="rotate-[180deg]" />{" "}
              {findItem2.view}
            </div>
            <Separator className="container mt-2.5" />

            <div className="flex flex-col gap-5 mt-5">
              {findItem2.info?.map((item, i) => (
                <Link key={i} onClick={() => setBurger(false)} to={item.link}>
                  {item.view}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center mt-20 mx-auto gap-10">
        {burgerLangs.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              setLang(item);
              setBurger(false);
            }}
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

export default BurgerMenu;

//       <div className="flex items-center mx-auto gap-10">
// import { motion } from 'framer-motion';
// import { headerMenu, headerMenu2 } from '../../database/header.data';
// import { Link } from 'react-router-dom';
// import { useLang } from '../../services/zustand/zusLang';
// import { useBurger } from '../../services/zustand/zusBurger';
// import { activeLangType } from '../Header/LangMenu';
// import { useEffect, useState } from 'react';
// import { v4 } from 'uuid';

// export const BurgerMenu = () => {
//   const localization = useLang((state) => state.activeLang.localization);

//   const chooseDataLang = (en: string, ru: string) => (localization === 'en' ? en : ru);

//   const [activeMenu, setActiveMenu] = useState<string>('');

//   useEffect(() => {
//     document.body.classList.add('overflow-hidden');

//     return () => document.body.classList.remove('overflow-hidden');
//   }, []);

//   const burger = useBurger((state) => state.burger);
//   const setBurger = useBurger((state) => state.setBurger);

//   const setLang = useLang((state) => state.setLang);

//   const setActiveTitle = () => {
//     if (activeMenu.includes('/ex')) return chooseDataLang('Exhibition', 'Выставка');
//     else if (activeMenu.includes('/pa')) return chooseDataLang('Participants', 'Участникам');
//     else if (activeMenu.includes('/vi')) return chooseDataLang('Fot visitors', 'Посетителям');
//   };

//   return (
//     <motion.div
//       initial={{ x: '100%', opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{
//         duration: 0.3,
//         ease: 'circInOut',
//       }}
//       exit={{
//         x: '100%',
//         opacity: 0,
//       }}
//       className="bg-purple overflow-auto text-white fixed w-full z-[900] top-[97px] bottom-0 left-0 min-h-[100vh] h-full px-4 py-10 flex flex-col overflow-y-auto">
//       {activeMenu && (
//         <div>
//           <motion.div onClick={() => setActiveMenu('')} className="flex cursor-pointer">
//             <img src="/assets/icons/burgerMenu/arrow.svg" alt="arrow" />
//             <h2 className="text-[18px] ml-[10px] leading-[135%]">{setActiveTitle()}</h2>
//           </motion.div>

//           <div className="mt-[10px] opacity-50 mb-5 h-[1px] w-full  bg-[#F2F9FF]" />
//         </div>
//       )}
//       {activeMenu && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="flex flex-col gap-5 leading-[150%]">
//           {(activeMenu.includes('/ex') &&
//             headerMenu2
//               .filter((item) => item.ex)
//               .map((item) =>
//                 item.dropDown?.map((obj) => (
//                   <Link key={v4()} onClick={() => setBurger(false)} to={obj.link}>
//                     {localization === 'en' ? obj.titleEn : obj.title}
//                   </Link>
//                 )),
//               )) ||
//             (activeMenu.includes('/pa') &&
//               headerMenu2
//                 .filter((item) => item.partic)
//                 .map((obj) =>
//                   obj.dropDown?.map((item) => (
//                     <Link key={v4()} onClick={() => setBurger(false)} to={item.link}>
//                       {localization === 'en' ? item.titleEn : item.title}
//                     </Link>
//                   )),
//                 )) ||
//             (activeMenu.includes('/vis') &&
//               headerMenu2
//                 .filter((item) => item.vis)
//                 .map((obj) =>
//                   obj.dropDown?.map((item) => (
//                     <Link key={v4()} onClick={() => setBurger(false)} to={item.link}>
//                       {localization === 'en' ? item.titleEn : item.title}
//                     </Link>
//                   )),
//                 ))}
//         </motion.div>
//       )}

//       <div className="leading-[135%] text-[18px] mb-10 flex flex-col gap-5">
//         {!activeMenu &&
//           headerMenu2
//             .filter((item) => (localization === 'en' ? item.en : !item.en))
//             .map((item) => (
//               <div
//                 key={v4()}
//                 className="cursor-pointer flex items-center justify-between"
//                 onClick={() => setActiveMenu(item.link)}>
//                 <div>{item.title}</div>
//                 <img src="/assets/icons/burgerMenu/arrow.svg" alt="arrow" className="rotate-180" />
//               </div>
//             ))}
//       </div>

//       <div className="h-[1px] w-full opacity-50 bg-[#F2F9FF]" />

//       <div className="leading-[135%] mt-10 text-[14px] mb-10 flex flex-col gap-5">
//         {headerMenu
//           .filter((item) => (localization === 'en' ? item.en : !item.en))
//           .map((item) => (
//             <Link
//               key={v4()}
//               to={item.link}
//               onClick={() => {
//                 setBurger(!burger);
//               }}>
//               {item.title}
//             </Link>
//           ))}
//       </div>

//       <div className="flex items-center mx-auto gap-10">
//         {burgerLangs.map((item) => (
//           <div
//             key={v4()}
//             onClick={() => {
//               setLang(item);
//               setBurger(false);
//             }}
//             className="flex cursor-pointer items-center gap-[10px]">
//             <img src={`/assets/icons/burgerMenu/${item.localization}.svg`} alt="flag" />
//             <p>{item.title}</p>
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };
