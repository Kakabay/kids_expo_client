import { ThemeCard } from "../../components/Theme/ThemeCard";
import useGetTopics from "../../hooks/exhibition/useGetTopics";
import Loader from "../../components/shared/Loader";
import { CoverLayout } from "@/components/layout/CoverLayout";
import { useGetTitles } from "@/lib/useGetTitles";

export const ExhibitionTheme = () => {
  const { topicsData, topicsIsSuccess, topicsIsLoading } = useGetTopics();
  const { theme } = useGetTitles();

  return (
    <CoverLayout title={theme}>
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
