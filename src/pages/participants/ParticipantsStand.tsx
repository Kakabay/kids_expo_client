import Loader from "../../components/shared/Loader";
import { FooterServices } from "../../components/shared/FooterServices";
import { ThemeCardAccordion } from "../../components/Theme/ThemeCardAccordion";
import useGetStandServices from "../../hooks/participants/services/useGetStandServices";
import { CoverLayout } from "@/components/layout/CoverLayout";
import { useTranslate } from "@/lib/useTranslate";

export default function ParticipantsStand() {
  const { data, isLoading } = useGetStandServices();

  const title = useTranslate("standServices");
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
}
