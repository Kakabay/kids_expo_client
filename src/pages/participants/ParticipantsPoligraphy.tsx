import { useTranslate } from "@/lib/utils";
import Loader from "../../components/shared/Loader";
import useGetPrints from "../../hooks/participants/services/useGetPrints";
import { CoverLayout } from "@/components/layout/CoverLayout";

const ParticipantsPoligraphy = () => {
  const { data, isLoading } = useGetPrints();

  const title = useTranslate("Полиграфия", "Printing Services");

  return (
    <CoverLayout title={title}>
      <div
        className="select-inner select-prints"
        dangerouslySetInnerHTML={{ __html: data ? data[0].content : "" }}
      />

      {isLoading && <Loader />}
    </CoverLayout>
  );
};

export default ParticipantsPoligraphy;
