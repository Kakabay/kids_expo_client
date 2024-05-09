import { v4 } from 'uuid';
import { SidebarLayout } from '../../components/global/SidebarLayout';
import { InfoCard } from '../../components/Participants/InfoCard';
import { BreadCrumbs } from '../../components/ui/BreadCrumbs';
import { Title } from '../../components/ui/Title';
import { useLang } from '../../services/zustand/zusLang';

const cardData = [
  {
    header: 'Монтаж',
    headerEn: 'Assembly',

    footer: 'C 1-го августа',
    footerEn: 'August – 01',
  },
  {
    orang: true,
    header: 'Работа',
    headerEn: 'Work',

    footer: '19–22 августа',
    footerEn: 'August 19–22',
  },
  {
    header: 'Демонтаж',
    headerEn: 'Dismantling',

    footer: '23–24 августа',
    footerEn: 'August 23–24',
  },
];

export const ParticipantsInfo = () => {
  const localization = useLang((state) => state.activeLang.localization);
  const chooseDataLang = (en: string, ru: string) => (localization === 'en' ? en : ru);

  return (
    <SidebarLayout>
      <BreadCrumbs
        second={chooseDataLang('Participants', 'Участникам')}
        third={chooseDataLang('Information for participants', 'Информация для участников')}
      />

      <Title
        title={chooseDataLang('Information for participants', 'Информация для участников')}
        mb24
      />

      <div className="grid grid-cols-3 gap-[45px]">
        {cardData.map((item) => (
          <InfoCard key={v4()} {...item} />
        ))}
      </div>

      <hr className="border-[1px] my-6 border-[#F5F5F5]" />

      <h3 className="text-[21px] mb-6 font-semibold">
        {chooseDataLang(
          'How to become a participant in the exhibition?',
          'Как стать участником выставки?',
        )}
      </h3>

      <div className="py-6 px-4 bg-[#F5F5F5] rounded-sm flex items-start gap-[10px]">
        <img src="/assets/icons/calendar2.svg" alt="" className="" />
        <div className="text-[#191919] leading-[150%]">
          <span className="text-purple">
            {chooseDataLang('Fill out the online application', 'Заполните онлайн-заявку')}
          </span>
          {chooseDataLang(
            'and our manager will contact you, who will supervise all questions regarding your company’s participation in the exhibition.',
            'и с Вами свяжется наш менеджер, который будет курировать все вопросы по участию Вашейкомпании в выставке.',
          )}
           
        </div>
      </div>
    </SidebarLayout>
  );
};
