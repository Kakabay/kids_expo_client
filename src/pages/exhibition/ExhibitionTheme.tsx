import { v4 } from "uuid";
import { SidebarLayout } from "../../components/global/SidebarLayout";
import { ThemeCard } from "../../components/Theme/ThemeCard";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import { useLang } from "../../services/zustand/zusLang";
import useGetTopics from "../../hooks/exhibition/useGetTopics";
import { useEffect } from "react";

export const ExhibitionTheme = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const localization = useLang((state) => state.activeLang.localization);
  const chooseDataLang = (en: string, ru: string) =>
    localization === "en" ? en : ru;

  const { topicsData, topicsIsSuccess } = useGetTopics();

  return (
    <SidebarLayout>
      <BreadCrumbs
        second={chooseDataLang("Exhibition", "Выставка")}
        third={chooseDataLang("Venue", "Место проведения")}
        path="/exhibition-about"
      />

      <Title title={chooseDataLang("Theme", "Тематика")} mb24 />

      <div className="border-b-[1px] border-b-[#DADADA]">
        {topicsIsSuccess
          ? topicsData?.map((item) => (
              <ThemeCard
                key={v4()}
                {...item}
                path={item.icon[0] ? item.icon[0].path : ""}
              />
            ))
          : null}
      </div>
    </SidebarLayout>
  );
};
