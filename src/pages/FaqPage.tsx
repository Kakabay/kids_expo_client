import { v4 } from 'uuid';
import { BreadCrumbs } from '../components/ui/BreadCrumbs';
import { Radio } from '../components/ui/Radio';
import { Title } from '../components/ui/Title';
import { useFaq } from '../services/zustand/zusFaq';
import useGetFaq from '../hooks/useGetFaq';
import { Select } from '../components/Faq/Select';
import { useEffect } from 'react';

const faqRadio = [
  {
    name: 'Все',
  },
  {
    name: 'Посетителям',
  },
  {
    name: 'Участники',
  },
];

export default function FaqPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const activeRadio = useFaq((state) => state.activeRadio);

  const { faqData, faqIsError, faqIsLoading, faqIsSuccess } = useGetFaq();

  return (
    <div className="bg-white2 pt-5">
      <div className="container section-mb">
        <BreadCrumbs second="FAQ" />

        <Title title="«Вопросы-ответы»" />

        <div className="flex items-center gap-6 mb-11 mt-6">
          {faqRadio.map((item) => (
            <Radio key={v4()} {...item} active={activeRadio === item.name} />
          ))}
        </div>

        {faqIsSuccess && (
          <div className="border-b-[1px] border-black2">
            {faqData?.map((item) => (
              <Select key={v4()} {...item} />
            ))}
          </div>
        )}

        {faqIsLoading && <h1>Loading...</h1>}

        {faqIsError && <h1>Error...</h1>}
      </div>
    </div>
  );
}
