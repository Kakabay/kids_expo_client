import Loader from "../../components/shared/Loader";
import { FooterServices } from "../../components/shared/FooterServices";
import { ThemeCardAccordion } from "../../components/Theme/ThemeCardAccordion";
import useGetEngeener from "../../hooks/participants/services/useGetEngeener";
import { useTranslate } from "@/lib/utils";
import { CoverLayout } from "@/components/layout/CoverLayout";

const ParticipantsServicesEngeener = () => {
  const { data, isLoading } = useGetEngeener();

  const title = useTranslate("Инженерные услуги", "Engineering services");

  return (
    <CoverLayout title={title}>
      <div className="border-b-[1px] border-[#DADADA] mb-8">
        {data &&
          data.map((item, i) => <ThemeCardAccordion {...item} key={i} />)}
      </div>
      {isLoading && <Loader />}
      {/* <BlankButton path="" className="mb-8" /> */}
      <FooterServices />
    </CoverLayout>
  );
};

export default ParticipantsServicesEngeener;
