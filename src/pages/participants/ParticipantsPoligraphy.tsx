import { useTranslate } from "@/lib/utils";
import Loader from "../../components/shared/Loader";
import { BreadCrumbs } from "../../components/shared/BreadCrumbs";
import { Title } from "../../components/shared/Title";
import useGetPrints from "../../hooks/participants/services/useGetPrints";

const ParticipantsPoligraphy = () => {
  const { data, isLoading } = useGetPrints();

  const title = useTranslate("Полиграфия", "Printing Services");

  return (
    <div>
      <BreadCrumbs
        second={useTranslate("Участникам", "Participants")}
        third={title}
      />
      <Title title={title} mb32 />

      <div
        className="select-inner select-prints"
        dangerouslySetInnerHTML={{ __html: data ? data[0].content : "" }}
      />

      {isLoading && <Loader />}
    </div>
  );
};

export default ParticipantsPoligraphy;
