import useGetAboutExhibition from "../../hooks/useGetAboutExhibition";
import Loader from "../../components/shared/Loader";
import { CoverLayout } from "@/components/layout/CoverLayout";
import { useGetTitles } from "@/lib/useGetTitles";

const ExhibitionAbout = () => {
  const { about } = useGetTitles();

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
    <CoverLayout title={about}>
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
