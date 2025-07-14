import useGetAboutExhibition from "../../hooks/useGetAboutExhibition";
import Loader from "../../components/Loader";
import { CoverLayout } from "@/components/layout/CoverLayout";
import { useScrollTop, useTranslate } from "@/lib/utils";

const ExhibitionAbout = () => {
  useScrollTop();

  const {
    aboutExhibitionData,
    aboutExhibitionIsError,
    aboutExhibitionIsLoading,
    aboutExhibitionIsSuccess,
  } = useGetAboutExhibition();

  if (aboutExhibitionIsError) {
    <h1>Error...</h1>;
  }

  const title = useTranslate("О выставке", "About");

  return (
    <CoverLayout title={title}>
      {aboutExhibitionIsSuccess && (
        <div
          className="flex flex-col gap-6 exibition-about-wrapper"
          dangerouslySetInnerHTML={{
            __html: aboutExhibitionData ? aboutExhibitionData : "",
          }}
        />
      )}

      {aboutExhibitionIsLoading && <Loader />}
    </CoverLayout>
  );
};

export default ExhibitionAbout;
