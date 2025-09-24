import { useTranslate } from "@/lib/useTranslate";
import Loader from "../../components/shared/Loader";
import useGetPrints from "../../hooks/participants/services/useGetPrints";
import { CoverLayout } from "@/components/layout/CoverLayout";

export default function ParticipantsPoligraphy() {
  const { data, isLoading } = useGetPrints();
  const title = useTranslate("poligraphy");

  return (
    <CoverLayout title={title}>
      <div
        className="select-inner select-prints"
        dangerouslySetInnerHTML={{ __html: data ? data[0].content : "" }}
      />

      {isLoading && <Loader />}
    </CoverLayout>
  );
}
