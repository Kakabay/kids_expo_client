import { InfoCard } from "../../components/shared/InfoCard";
import { useLang } from "../../services/zustand/zusLang";
import { Link } from "react-router-dom";
import { useTranslate } from "@/lib/utils";
import { CoverLayout } from "@/components/layout/CoverLayout";
import { times } from "@/constantas";
import useGetEventDates from "@/hooks/participants/useGetEventDates";
import { useTranslation } from "react-i18next";

export const ParticipantsInfo = () => {
  const { t } = useTranslation("index");
  const titles = t("participantsInfo.status", {
    returnObjects: true,
  }) as string[];

  const localization = useLang((state) => state.activeLang.localization);
  const chooseDataLang = (en: string, ru: string) =>
    localization === "en" ? en : ru;

  const { eventsDatesData } = useGetEventDates();

  const title = t("participantsInfo.title");

  const dates = [
    eventsDatesData?.installation_date,
    eventsDatesData?.work_date,
    eventsDatesData?.dismantling_date,
  ];

  return (
    <CoverLayout title={title}>
      <div className="hidden min-[1200px]:grid grid-cols-3 min-[1250px] gap-[45px]">
        {[...Array(3)].map((_, i) => (
          <InfoCard orang={i === 1} title={titles[i]} date={dates[i]} />
        ))}
      </div>

      <div className="min-[1200px]:hidden grid sm:grid-cols-2 mb-12 sm:mb-0 grid-cols-1 gap-x-4 sm:gap-y-[26px] gap-y-[38px]">
        <div className="sm:col-span-2">
          <InfoCard
            title={titles[0]}
            // date={eventsDatesData ? eventsDatesData.installation_date : ""}
            date={useTranslate(times[0].date, times[0].dateEn)}
          />
        </div>
        <InfoCard
          date={useTranslate(times[1].date, times[1].dateEn)}
          // date={eventsDatesData ? eventsDatesData.dismantling_date : ""}
          title={titles[1]}
          orang
        />
        <InfoCard
          // date={eventsDatesData ? eventsDatesData.work_date : ""}
          date={useTranslate(times[2].date, times[2].dateEn)}
          title={titles[2]}
        />
      </div>

      <hr className="hidden sm:block border-[1px] my-6 border-pureWhite" />

      <h3 className="text-[21px] mb-6 font-semibold">
        {t("participantsInfo.text")}
      </h3>

      <div className="py-6 px-4 bg-pureWhite rounded-sm flex items-start gap-[10px]">
        <img src="/assets/icons/calendar2.svg" alt="" className="" />
        <div className="text-[#191919] leading-[130%]">
          <Link to="/participants-apply" className="text-purple">
            {t("participantsInfo.link")}
          </Link>
          {t("participantsInfo.p")} 
        </div>
      </div>
    </CoverLayout>
  );
};
