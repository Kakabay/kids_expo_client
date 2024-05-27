import { useEffect } from "react";
import { SidebarLayout } from "../../components/global/SidebarLayout";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import useGetVenue from "../../hooks/exhibition/useGetVenue";
import { useLang } from "../../services/zustand/zusLang";
import { useGetEn } from "../../hooks/language/useGetEn";

const ExhibitionPlace = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const localization = useLang((state) => state.activeLang.localization);

  const { venueData } = useGetVenue();

  return (
    <SidebarLayout>
      <BreadCrumbs
        second={useGetEn("Exhibition", "Выставка")}
        path="/exhibition-about"
        third={useGetEn("venue", "Место проведения")}
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
    </SidebarLayout>
  );
};

export default ExhibitionPlace;
