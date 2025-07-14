import { useEffect } from "react";
import useGetVenue from "../../hooks/exhibition/useGetVenue";
import Loader from "../../components/Loader";
import { CoverLayout } from "@/components/layout/CoverLayout";
import { useTranslate } from "@/lib/utils";

const ExhibitionPlace = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // const localization = useLang((state) => state.activeLang.localization);

  const { venueData, venueIsLoading } = useGetVenue();

  const title = useTranslate("Место проведения", "Venue");

  return (
    <CoverLayout title={title}>
      <div className="flex flex-col gap-6">
        <div
          className="exibition-about-wrapper flex flex-col gap-6"
          dangerouslySetInnerHTML={{
            __html: venueData ? venueData : "",
          }}
        />
      </div>

      {venueIsLoading && <Loader />}
    </CoverLayout>
  );
};

export default ExhibitionPlace;
