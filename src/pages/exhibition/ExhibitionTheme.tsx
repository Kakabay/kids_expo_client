import { ThemeCard } from "../../components/Theme/ThemeCard";
import useGetTopics from "../../hooks/exhibition/useGetTopics";
import Loader from "../../components/Loader";
import { CoverLayout } from "@/components/layout/CoverLayout";
import { useScrollTop, useTranslate } from "@/lib/utils";

export const ExhibitionTheme = () => {
  useScrollTop();
  const { topicsData, topicsIsSuccess, topicsIsLoading } = useGetTopics();

  const title = useTranslate("Тематика", "Theme");

  return (
    <CoverLayout title={title}>
      <div className="border-b-[1px] border-b-[#DADADA]">
        {topicsIsSuccess &&
          topicsData?.map((item, i) => (
            <ThemeCard
              key={i}
              title={item.name}
              {...item}
              imageUrl={item.icon[0] ? item.icon[0].path : ""}
            />
          ))}
      </div>

      {topicsIsLoading && <Loader />}
    </CoverLayout>
  );
};
