import Loader from "../../components/Loader";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import useGetHotels from "../../hooks/participants/services/useGetHotels";
import { useTranslate } from "../../utils/useTranslate";

const ParticipantsHotels = () => {
  const { data, isLoading } = useGetHotels();

  const title = useTranslate("Туристические услуги", "Tourist Services");

  return (
    <div>
      <BreadCrumbs
        second={useTranslate("Участникам", "Participants")}
        third={title}
      />
      <Title title={title} mb32 />

      <div
        className="select-inner"
        dangerouslySetInnerHTML={{ __html: data ? data[0].content : "" }}
      />

      {isLoading && <Loader />}
    </div>
  );
};

export default ParticipantsHotels;
