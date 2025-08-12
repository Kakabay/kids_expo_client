import { useTranslate } from "@/lib/useTranslate";
import Loader from "../../components/shared/Loader";
import useGetHotels from "../../hooks/participants/services/useGetHotels";
import { CoverLayout } from "@/components/layout/CoverLayout";

const ParticipantsHotels = () => {
  const { data, isLoading } = useGetHotels();
  const title = useTranslate("touristic");

  return (
    <CoverLayout title={title}>
      <div
        className="select-inner"
        dangerouslySetInnerHTML={{ __html: data ? data[0].content : "" }}
      />

      {isLoading && <Loader />}
    </CoverLayout>
  );
};

export default ParticipantsHotels;
