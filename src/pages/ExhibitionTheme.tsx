import { CoverLayout } from "@/components/layout/CoverLayout";
import Loader from "@/components/shared/Loader";
import { ThemeCard } from "@/components/Theme/ThemeCard";
import useGetTopics from "@/hooks/exhibition/useGetTopics";
import { useTranslate } from "@/lib/useTranslate";

export default function ExhibitionTheme() {
  const { topicsData, topicsIsSuccess, topicsIsLoading } = useGetTopics();
  const title = useTranslate("theme");

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
}
