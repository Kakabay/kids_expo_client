import { FC, useMemo } from "react";
import useGetTopics from "@/hooks/exhibition/useGetTopics";
import { useTranslation } from "react-i18next";
import { ThemeCard } from "../ThemeCard";

export const HomeTheme: FC = () => {
  const { t } = useTranslation("home");
  const { topicsData } = useGetTopics();

  const topics = useMemo(() => topicsData?.slice(0, 8), [topicsData]);

  return (
    <section className="container">
      <div className="cotnainer">
        <h2 className="h2 font-bold mb-10 text-center">{t("themeTitle")}</h2>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
          {topics?.map((item, i) => (
            <ThemeCard image={item?.icon?.[0]?.path} key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
