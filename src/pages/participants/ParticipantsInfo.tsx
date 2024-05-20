import { SidebarLayout } from "../../components/global/SidebarLayout";
import { InfoCard } from "../../components/Participants/InfoCard";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import { useLang } from "../../services/zustand/zusLang";
import useGetEventDates from "../../hooks/participants/useGetEventDates";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const ParticipantsInfo = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const localization = useLang((state) => state.activeLang.localization);
  const chooseDataLang = (en: string, ru: string) =>
    localization === "en" ? en : ru;

  const { eventsDatesData } = useGetEventDates();

  return (
    <SidebarLayout>
      <BreadCrumbs
        second={chooseDataLang("Participants", "Участникам")}
        third={chooseDataLang(
          "Information for participants",
          "Информация для участников"
        )}
      />

      <Title
        title={chooseDataLang(
          "Information for participants",
          "Информация для участников"
        )}
        mb24
      />

      <div className="hidden min-[1200px]:grid grid-cols-3 min-[1250px] gap-[45px]">
        <InfoCard
          title={chooseDataLang("Assembly", "Монтаж")}
          date={eventsDatesData ? eventsDatesData.installation_date : ""}
        />
        <InfoCard
          date={eventsDatesData ? eventsDatesData.dismantling_date : ""}
          title={chooseDataLang("Work", "Работа")}
          orang
        />
        <InfoCard
          date={eventsDatesData ? eventsDatesData.work_date : ""}
          title={chooseDataLang("Dismantling", "Демонтаж")}
        />
      </div>

      <div className="min-[1200px]:hidden grid sm:grid-cols-2 mb-12 sm:mb-0 grid-cols-1 gap-x-4 sm:gap-y-[26px] gap-y-[38px]">
        <div className="sm:col-span-2">
          <InfoCard
            date={eventsDatesData ? eventsDatesData.dismantling_date : ""}
            title={chooseDataLang("Work", "Работа")}
            orang
          />
        </div>
        <InfoCard
          title={chooseDataLang("Assembly", "Монтаж")}
          date={eventsDatesData ? eventsDatesData.installation_date : ""}
        />
        <InfoCard
          date={eventsDatesData ? eventsDatesData.work_date : ""}
          title={chooseDataLang("Dismantling", "Демонтаж")}
        />
      </div>

      <hr className="hidden sm:block border-[1px] my-6 border-pureWhite" />

      <h3 className="text-[21px] mb-6 font-semibold">
        {chooseDataLang(
          "How to become a participant in the exhibition?",
          "Как стать участником выставки?"
        )}
      </h3>

      <div className="py-6 px-4 bg-pureWhite rounded-sm flex items-start gap-[10px]">
        <img src="/assets/icons/calendar2.svg" alt="" className="" />
        <div className="text-[#191919] leading-[130%]">
          <Link to="/participants-apply" className="text-purple">
            {chooseDataLang(
              "Fill out the online application ",
              "Заполните онлайн-заявку"
            )}
          </Link>
          {chooseDataLang(
            " and our manager will contact you, who will supervise all questions regarding your company’s participation in the exhibition. ",
            " и с Вами свяжется наш менеджер, который будет курировать все вопросы по участию Вашей компании в выставке."
          )}
           
        </div>
      </div>
    </SidebarLayout>
  );
};
