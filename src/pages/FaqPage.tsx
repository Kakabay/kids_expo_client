import { Radio } from "../components/shared/Radio";
import { useFaq } from "../services/zustand/zusFaq";
import useGetFaq from "../hooks/useGetFaq";
import { Select } from "../components/shared/Select";
import Loader from "../components/shared/Loader";
import { CoverLayout } from "@/components/layout/CoverLayout";
import { useTranslation } from "react-i18next";

export default function FaqPage() {
  const activeRadio = useFaq((state) => state.activeRadio);
  const filter = useFaq((state) => state.filter);
  const { t } = useTranslation("index");

  const { title, buttons } = t("faq", { returnObjects: true }) as {
    title: string;
    buttons: string[];
  };

  const { faqData, faqIsError, faqIsLoading, faqIsSuccess } = useGetFaq();

  return (
    <CoverLayout title={title}>
      <div className="container">
        <div className="flex items-center gap-6 mb-11">
          {buttons.map((item, i) => (
            <div onClick={() => filter(i)} key={i}>
              <Radio name={item} activeRadio={activeRadio} id={i} />
            </div>
          ))}
        </div>

        {faqIsSuccess && (
          <div className="border-b border-black/20">
            {faqData?.map((item, i) => (
              <Select key={i} {...item} />
            ))}
          </div>
        )}

        {faqIsLoading && <Loader />}

        {faqIsError && <h1>Error...</h1>}
      </div>
    </CoverLayout>
  );
}
