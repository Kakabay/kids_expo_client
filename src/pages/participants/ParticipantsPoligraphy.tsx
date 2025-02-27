import Loader from "../../components/Loader";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import useGetPrints from "../../hooks/participants/services/useGetPrints";
import { useTranslate } from "../../utils/useTranslate";

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
