import { SidebarLayout } from "../../components/global/SidebarLayout";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import useGetDocs from "../../hooks/participants/useGetDocs";
import { useLang } from "../../services/zustand/zusLang";
import { useEffect } from "react";
import Loader from "../../components/Loader";

export const ParticipantsDocs = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const localization = useLang((state) => state.activeLang.localization);
  const chooseDataLang = (en: string, ru: string) =>
    localization === "en" ? en : ru;

  const { docsData, docsIsLoading } = useGetDocs();

  return (
    <SidebarLayout>
      <BreadCrumbs
        second={chooseDataLang("Participations", "Участникам")}
        path="/participants-info"
        third={chooseDataLang("Documents", "Документы")}
      />

      <Title title={chooseDataLang("Documents", "Документы")} mb32 />

      <div className="grid md:grid-cols-3 grid-cols-2 gap-x-4 lg:gap-x-5 gap-y-5">
        {docsData &&
          docsData.map((item, i) => (
            <a
              key={i}
              href={item.doc_path}
              target="_blank"
              className="p-2 md:p-4 lg:p-6 text-[15px] leading-[150%] mx-auto w-full rounded-[5px] text-center border-[1px] border-[#DADADA]"
            >
              <img
                src="/assets/icons/participants-docs/doc.svg"
                alt="document"
                className="mb-4 mx-auto"
              />
              <p>{item.title}</p>
            </a>
          ))}
      </div>

      {docsIsLoading && <Loader />}
    </SidebarLayout>
  );
};
