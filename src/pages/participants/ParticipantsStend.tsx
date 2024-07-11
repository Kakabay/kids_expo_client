import { BlankButton } from "../../components/Participants/BlankButton";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import { useTranslate } from "../../utils/useTranslate";

const ParticipantsStend = () => {
  return (
    <div>
      <BreadCrumbs
        second={useTranslate("Участникам", "Participants")}
        third={useTranslate("Сервис на стендах", "Услуги для экспонентов")}
      />
      <Title
        title={useTranslate("Сервис на стендах", "Инженерные услуги")}
        mb32
      />

      <BlankButton path="" />
    </div>
  );
};

export default ParticipantsStend;
