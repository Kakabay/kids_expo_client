import { useEffect } from "react";
import { SidebarLayout } from "../../components/global/SidebarLayout";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import useGetAboutExhibition from "../../hooks/useGetAboutExhibition";
import { useLang } from "../../services/zustand/zusLang";
import { useGetEn } from "../../hooks/language/useGetEn";

const ExhibitionAbout = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const {
    aboutExhibitionData,
    aboutExhibitionIsError,
    aboutExhibitionIsLoading,
    aboutExhibitionIsSuccess,
  } = useGetAboutExhibition();

  if (aboutExhibitionIsError) {
    <h1>Error...</h1>;
  }
  if (aboutExhibitionIsLoading) {
    <h1>Loading...</h1>;
  }

  return (
    <SidebarLayout>
      <div className="w-full h-full">
        <BreadCrumbs second={useGetEn("About", "О Выставке")} />

        <Title title={useGetEn("About", "О выставке")} mb24 />
        {aboutExhibitionIsSuccess ? (
          <div
            className="flex flex-col gap-6 exibition-about-wrapper"
            dangerouslySetInnerHTML={{
              __html: aboutExhibitionData ? aboutExhibitionData.data : "",
            }}
          />
        ) : null}
      </div>
    </SidebarLayout>
  );
};

export default ExhibitionAbout;
