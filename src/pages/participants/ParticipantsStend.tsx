import Loader from "../../components/shared/Loader";
import { FooterServices } from "../../components/shared/FooterServices";
import { ThemeCardAccordion } from "../../components/Theme/ThemeCardAccordion";
import useGetStandServices from "../../hooks/participants/services/useGetStandServices";
import { useTranslate } from "@/lib/utils";
import { CoverLayout } from "@/components/layout/CoverLayout";

const ParticipantsStend = () => {
  const { data, isLoading } = useGetStandServices();

  const title = useTranslate("Сервис на стендах", "Servise at stands");
  return (
    <CoverLayout title={title}>
      {data
        ? data.map((item, i) => <ThemeCardAccordion {...item} key={i} />)
        : null}

      {isLoading && <Loader />}

      {/* <BlankButton path="" className="my-8 " /> */}

      <FooterServices />
    </CoverLayout>
  );
};

export default ParticipantsStend;
