import Loader from "../../components/Loader";
import { FooterServices } from "../../components/Participants/FooterServices";
import { ThemeCardAccordion } from "../../components/Theme/ThemeCardAccordion";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import useGetEngeener from "../../hooks/participants/services/useGetEngeener";
import { useTranslate } from "../../utils/useTranslate";

const ParticipantsServicesEngeener = () => {
  const { data, isLoading } = useGetEngeener();

  const title = useTranslate("Услуги для экспонентов", "Engineering services");

  return (
    <div>
      <BreadCrumbs
        second={useTranslate("Участникам", "Participants")}
        third={title}
      />
      <Title title={title} mb32 />

      <div className="border-b-[1px] border-[#DADADA] mb-8">
        {data &&
          data.map((item, i) => <ThemeCardAccordion {...item} key={i} />)}
      </div>

      {isLoading && <Loader />}

      {/* <BlankButton path="" className="mb-8" /> */}

      <FooterServices />
    </div>
  );
};

export default ParticipantsServicesEngeener;
