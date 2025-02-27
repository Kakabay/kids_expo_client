import { Link } from "react-router-dom";
import { headerMenu, headerMenu2 } from "../../database/header.data";
import { useLang } from "../../services/zustand/zusLang";
import { v4 } from "uuid";
import { useGetEn } from "../../hooks/language/useGetEn";

export const Footer = () => {
  const localization = useLang((state) => state.activeLang.localization);

  return (
    <footer className="bg-purple text-white2">
      <div className="container py-10">
        <div className="flex md:flex-row flex-col justify-between mb-8 md:mb-[60px]">
          <div className="text-[14px] font-medium">
            <p className="mb-2">{useGetEn("Organizer: ", "Организатор: ")}</p>
            <div className="flex items-center mb-6 gap-[10px] w-[260px]">
              <img src="../assets/icons/footer-logo.png" alt="" />
              <p className="leading-[120%] font-medium">
                {useGetEn(
                  "The Chamber of Commerce and Industry of Turkmenistan",
                  "Торгово-промышленная палата Туркменистана"
                )}
              </p>
            </div>

            <Link
              to={"https://turkmenexpo.com/"}
              target="_blank"
              className="flex flex-col gap-2"
            >
              <p>{useGetEn("Co-organizer:", "Со-организатор:")}</p>
              <img
                width={161}
                height={26}
                src="../assets/icons/text-logo.svg"
                alt=""
              />
            </Link>
          </div>

          <hr className="block md:hidden my-6  border-[1px] border-gray3" />

          <div className="w-full mb-6 md:mb-0 max-w-[290px] flex flex-col gap-[10px]">
            {headerMenu2
              .filter((item) => (localization === "en" ? item.en : !item.en))
              .map((item) => (
                <Link key={v4()} to={item.link}>
                  {item.title}
                </Link>
              ))}
          </div>

          <hr className="block md:hidden border-[1px] mb-6 border-gray3" />

          <div className="w-full max-w-[290px] flex flex-col gap-[10px]">
            {headerMenu
              .filter((item) => (localization === "en" ? item.en : !item.en))
              .map((item) => (
                <Link key={v4()} to={item.link}>
                  {item.title}
                </Link>
              ))}
          </div>
        </div>

        <hr className="w-full border-[1px] border-gray3 mt-8 md:border-[#AAAAAA] mb-[17px]" />

        <p className="text-left md:text-center text-white text-[14px] md:text-[12px]">
          {useGetEn("©2024 IE «TurkmenExpo» ", "© 2024 ИП “ТуркменЭкспо”")}
        </p>
      </div>
    </footer>
  );
};
