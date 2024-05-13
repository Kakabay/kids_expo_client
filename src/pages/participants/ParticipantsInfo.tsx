import { SidebarLayout } from "../../components/global/SidebarLayout";
import { InfoCard } from "../../components/Participants/InfoCard";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import { useLang } from "../../services/zustand/zusLang";
import useGetEventDates from "../../hooks/participants/useGetEventDates";

export const ParticipantsInfo = () => {
  const localization = useLang((state) => state.activeLang.localization);
  const chooseDataLang = (en: string, ru: string) =>
    localization === "en" ? en : ru;

  const {
    eventDatesIsError,
    eventDatesIsSuccess,
    eventDatesIsloading,
    eventsDatesData,
  } = useGetEventDates();

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

      <div className="grid grid-cols-3 gap-[45px]">
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

      <hr className="border-[1px] my-6 border-pureWhite" />

      <h3 className="text-[21px] mb-6 font-semibold">
        {chooseDataLang(
          "How to become a participant in the exhibition?",
          "Как стать участником выставки?"
        )}
      </h3>

      <div className="py-6 px-4 bg-pureWhite rounded-sm flex items-start gap-[10px]">
        <img src="/assets/icons/calendar2.svg" alt="" className="" />
        <div className="text-[#191919] leading-[150%]">
          <span className="text-purple">
            {chooseDataLang(
              "Fill out the online application",
              "Заполните онлайн-заявку"
            )}
          </span>
          {chooseDataLang(
            "and our manager will contact you, who will supervise all questions regarding your company’s participation in the exhibition.",
            "и с Вами свяжется наш менеджер, который будет курировать все вопросы по участию Вашей компании в выставке."
          )}
           
        </div>
      </div>
    </SidebarLayout>
  );
};
