import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import { useTranslate } from "../../utils/useTranslate";

const ParticipantsPoligraphy = () => {
  return (
    <div>
      <BreadCrumbs
        second={useTranslate("Участникам", "Participants")}
        third={useTranslate("Полиграфия", "Услуги для экспонентов")}
      />
      <Title title={useTranslate("Полиграфия", "Инженерные услуги")} mb32 />
    </div>
  );
};

export default ParticipantsPoligraphy;
