import Loader from "@/components/shared/Loader";
import useGetVenue from "@/hooks/exhibition/useGetVenue";
import { useTranslate } from "@/lib/useTranslate";

export default function ExhibitionPlace() {
  const { venueData, venueIsLoading } = useGetVenue();
  const title = useTranslate("venue");

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
}
