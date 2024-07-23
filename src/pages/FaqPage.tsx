import { BreadCrumbs } from "../components/ui/BreadCrumbs";
import { Radio } from "../components/ui/Radio";
import { Title } from "../components/ui/Title";
import { useFaq } from "../services/zustand/zusFaq";
import useGetFaq from "../hooks/useGetFaq";
import { Select } from "../components/Faq/Select";
import { useEffect } from "react";
import Loader from "../components/Loader";

const faqRadio = [
  {
    name: "Все",
  },
  {
    name: "Посетителям",
  },
  {
    name: "Участники",
  },
];

export default function FaqPage() {
  const activeRadio = useFaq((state) => state.activeRadio);
  const currentRadio = useFaq((state) => state.currentRadio);
  const setCurrentRadio = useFaq((state) => state.setCurrentRadio);

  const { faqData, faqIsError, faqIsLoading, faqIsSuccess } = useGetFaq();
  useEffect(() => {
    window.scroll(0, 0);
  }, [currentRadio]);

  return (
    <div className="bg-white2 pt-5">
      <div className="container section-mb">
        <BreadCrumbs second="FAQ" />

        <Title title="«Вопросы-ответы»" />

        <div className="flex items-center gap-6 mb-11 mt-6">
          {faqRadio.map((item, i) => (
            <div key={i} onClick={() => setCurrentRadio(i)}>
              <Radio {...item} active={activeRadio === item.name} />
            </div>
          ))}
        </div>

        {faqIsSuccess && (
          <div className="border-b-[1px] border-black2">
            {faqData?.map((item, i) => (
              <Select key={i} {...item} />
            ))}
          </div>
        )}

        {faqIsLoading && <Loader />}

        {faqIsError && <h1>Error...</h1>}
      </div>
    </div>
  );
}
