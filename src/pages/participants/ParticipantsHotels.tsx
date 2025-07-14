import { useTranslate } from "@/lib/utils";
import Loader from "../../components/Loader";
import { BreadCrumbs } from "../../components/shared/BreadCrumbs";
import { Title } from "../../components/shared/Title";
import useGetHotels from "../../hooks/participants/services/useGetHotels";

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
