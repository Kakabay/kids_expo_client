import Loader from "../../components/Loader";
import { FooterServices } from "../../components/Participants/FooterServices";
import { ThemeCardAccordion } from "../../components/Theme/ThemeCardAccordion";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import useGetEngeener from "../../hooks/participants/services/useGetEngeener";
import { useTranslate } from "../../utils/useTranslate";

const ParticipantsServicesEngeener = () => {
  const { data, isLoading } = useGetEngeener();

  return (
    <div>
      <BreadCrumbs
        second={useTranslate("Участникам", "Participants")}
        third={useTranslate("Услуги для экспонентов", "Услуги для экспонентов")}
      />
      <Title
        title={useTranslate("Инженерные услуги", "Инженерные услуги")}
        mb32
      />

      <div className="border-b-[1px] border-[#DADADA] mb-8">
        {data
          ? data.map((item, i) => <ThemeCardAccordion {...item} key={i} />)
          : null}
      </div>

      {isLoading && <Loader />}

      {/* <BlankButton path="" className="mb-8" /> */}

      <FooterServices />
    </div>
  );
};

export default ParticipantsServicesEngeener;
