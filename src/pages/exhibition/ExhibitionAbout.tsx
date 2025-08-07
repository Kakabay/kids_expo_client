import useGetAboutExhibition from "../../hooks/useGetAboutExhibition";
import Loader from "../../components/shared/Loader";
import { CoverLayout } from "@/components/layout/CoverLayout";
import { useTranslate } from "@/lib/useTranslate";

const ExhibitionAbout = () => {
  const title = useTranslate("about");

  const {
    aboutExhibitionData,
    aboutExhibitionIsError,
    aboutExhibitionIsLoading,
    aboutExhibitionIsSuccess,
  } = useGetAboutExhibition();

  if (aboutExhibitionIsError) {
    <h1>Error...</h1>;
  }

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
