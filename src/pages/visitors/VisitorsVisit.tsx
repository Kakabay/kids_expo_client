import { useLang } from "../../services/zustand/zusLang";
import { BreadCrumbs } from "../../components/shared/BreadCrumbs";
import { Title } from "../../components/shared/Title";
import { v4 } from "uuid";
import { useEffect } from "react";
import { useScrollTop } from "@/lib/utils";
import { CoverLayout } from "@/components/layout/CoverLayout";

const benefitsData = [
  {
    en: "Establish new business contacts",
    title: "Установить новые деловые контакты",
  },
  {
    en: "Получить информацию о текущих трендах рынка",
    title: "Получить информацию о текущих трендах рынка",
  },
  {
    en: "Find suppliers / buyers",
    title: "Найти поставщиков / покупателей",
  },
  {
    en: "Attend business program events. Visiting the exhibition allows you to solve your company’s business problems in just 4 working days",
    title:
      "Посетить мероприятия деловой программы. Посещение выставки позволяет решить бизнес-задачи вашей компании всего за 4 рабочих дня",
  },
];

export const VisitorsVisit = () => {
  useScrollTop();

  const localization = useLang((state) => state.activeLang.localization);
  const chooseDataLang = (en: string, ru: string) =>
    localization === "en" ? en : ru;

  return (
    <CoverLayout title={chooseDataLang("Why visit", "Зачем посещать")}>
      <div className="grid min-[1150px]:grid-cols-2 grid-cols-1 grid-rows-2 gap-6 min-[1150px]:gap-[42px]">
        {benefitsData.map((item) => (
          <div
            key={v4()}
            className="flex lg:flex-row text-center md:text-left flex-col items-center md:items-start px-4 py-6 bg-pureWhite rounded-sm gap-[10px] text-[14px] leading-[130%]"
          >
            <img src="/assets/icons/benefits-star.svg" alt="" />
            <p>{localization === "en" ? item.en : item.title}</p>
          </div>
        ))}
      </div>
    </CoverLayout>
  );
};
