import useGetVenue from "../../hooks/exhibition/useGetVenue";
import Loader from "../../components/shared/Loader";
import { useScrollTop, useTranslate } from "@/lib/utils";

const ExhibitionPlace = () => {
  useScrollTop();

  const { venueData, venueIsLoading } = useGetVenue();

  const title = useTranslate("Место проведения", "Venue");

  return (
    <section className="container mt-8 mb-10">
      <div className="flex flex-col gap-6">
        <h2 className="h2 text-center">{title}</h2>
        <div
          className="exibition-about-wrapper flex flex-col gap-6"
          dangerouslySetInnerHTML={{
            __html: venueData ? venueData : "",
          }}
        />
      </div>

      {venueIsLoading && <Loader />}
    </section>
  );
};

export default ExhibitionPlace;
