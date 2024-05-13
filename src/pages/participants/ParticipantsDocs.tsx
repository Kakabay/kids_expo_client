import { SidebarLayout } from "../../components/global/SidebarLayout";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import { docs } from "../../database/docs.data";
import { useLang } from "../../services/zustand/zusLang";

export const ParticipantsDocs = () => {
  const localization = useLang((state) => state.activeLang.localization);
  const chooseDataLang = (en: string, ru: string) =>
    localization === "en" ? en : ru;

  return (
    <SidebarLayout>
      <BreadCrumbs
        second={chooseDataLang("Participations", "Участникам")}
        path="/participants-info"
        third={chooseDataLang("Documents", "Документы")}
      />

      <Title title={chooseDataLang("Documents", "Документы")} mb32 />

      {/* <h3 className="mb-6 text-[21px] font-semibold ">
        Подзаголовок один (это условное название заголовка)
      </h3> */}

      <div className="grid grid-cols-3 grid-rows-3 gap-5">
        {docs.map((item) => (
          <div className="p-6 text-[15px] leading-[150%] mx-auto w-full rounded-[5px] text-center border-[1px] border-[#DADADA]">
            <img
              src="/assets/icons/participants-docs/doc.svg"
              alt="document"
              className="mb-4 mx-auto"
            />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </SidebarLayout>
  );
};
