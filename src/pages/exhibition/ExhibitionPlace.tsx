import { useEffect } from "react";
import { SidebarLayout } from "../../components/global/SidebarLayout";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import useGetVenue from "../../hooks/exhibition/useGetVenue";
import { useGetEn } from "../../hooks/language/useGetEn";
import Loader from "../../components/Loader";

const ExhibitionPlace = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // const localization = useLang((state) => state.activeLang.localization);

  const { venueData, venueIsLoading } = useGetVenue();

  return (
    <SidebarLayout>
      <BreadCrumbs
        second={useGetEn("Exhibition", "Выставка")}
        path="/exhibition-about"
        third={useGetEn("Venue", "Место проведения")}
      />

      <div className="flex flex-col gap-6">
        <Title title={useGetEn("Venue", "Место проведения")} />

        <div
          className="exibition-about-wrapper flex flex-col gap-6"
          dangerouslySetInnerHTML={{
            __html: venueData ? venueData : "",
          }}
        />
      </div>

      {venueIsLoading && <Loader />}
    </SidebarLayout>
  );
};

export default ExhibitionPlace;
