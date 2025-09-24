import Loader from "../../components/shared/Loader";
import { FooterServices } from "../../components/shared/FooterServices";
import { ThemeCardAccordion } from "../../components/Theme/ThemeCardAccordion";
import useGetEngeener from "../../hooks/participants/services/useGetEngeener";
import { CoverLayout } from "@/components/layout/CoverLayout";
import { useTranslate } from "@/lib/useTranslate";

export default function ParticipantsServicesEngineer() {
  const { data, isLoading } = useGetEngeener();
  const title = useTranslate("engineering");

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
}
