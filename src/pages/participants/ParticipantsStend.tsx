import Loader from "../../components/Loader";
import { FooterServices } from "../../components/Participants/FooterServices";
import { ThemeCardAccordion } from "../../components/Theme/ThemeCardAccordion";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import useGetStandServices from "../../hooks/participants/services/useGetStandServices";
import { useTranslate } from "../../utils/useTranslate";

const ParticipantsStend = () => {
  const { data, isLoading } = useGetStandServices();

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

      {data
        ? data.map((item, i) => <ThemeCardAccordion {...item} key={i} />)
        : null}

      {isLoading && <Loader />}

      {/* <BlankButton path="" className="my-8 " /> */}

      <FooterServices />
    </div>
  );
};

export default ParticipantsStend;
