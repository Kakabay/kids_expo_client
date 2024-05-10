import { v4 } from 'uuid';
import { BreadCrumbs } from '../components/ui/BreadCrumbs';
import { Radio } from '../components/ui/Radio';
import { Title } from '../components/ui/Title';
import { useFaq } from '../services/zustand/zusFaq';

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
  const activeRadio = useFaq((state) => state.activeRadio);

  console.log(activeRadio);

  return (
    <div className="bg-white2 pt-5">
      <div className="container">
        <BreadCrumbs second="FAQ" />

        <Title title="«Вопросы-ответы»" />

        <div className="flex items-center gap-6 mb-11 mt-6">
          {faqRadio.map((item) => (
            <Radio key={v4()} {...item} active={activeRadio === item.name} />
          ))}
        </div>

        <div></div>
      </div>
    </div>
  );
}
