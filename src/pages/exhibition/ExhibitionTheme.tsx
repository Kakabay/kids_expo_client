import { v4 } from "uuid";
import { SidebarLayout } from "../../components/global/SidebarLayout";
import { ThemeCard } from "../../components/Theme/ThemeCard";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import { useLang } from "../../services/zustand/zusLang";
import useGetTopics from "../../hooks/exhibition/useGetTopics";
import { useEffect } from "react";
import { useGetEn } from "../../hooks/language/useGetEn";

export const ExhibitionTheme = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { topicsData, topicsIsSuccess } = useGetTopics();

  return (
    <SidebarLayout>
      <BreadCrumbs
        second={useGetEn("Exhibition", "Выставка")}
        third={useGetEn("Venue", "Место проведения")}
        path="/exhibition-about"
      />

      <Title title={useGetEn("Theme", "Тематика")} mb24 />

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
