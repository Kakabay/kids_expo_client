import Loader from "../../components/shared/Loader";
import { FooterServices } from "../../components/shared/FooterServices";
import { ThemeCardAccordion } from "../../components/Theme/ThemeCardAccordion";
import { BreadCrumbs } from "../../components/shared/BreadCrumbs";
import { Title } from "../../components/shared/Title";
import useGetEngeener from "../../hooks/participants/services/useGetEngeener";
import { useTranslate } from "@/lib/utils";

const ParticipantsServicesEngeener = () => {
  const { data, isLoading } = useGetEngeener();

  const title = useTranslate("Инженерные услуги", "Engineering services");

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
