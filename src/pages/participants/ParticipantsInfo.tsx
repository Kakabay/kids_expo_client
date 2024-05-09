import { SidebarLayout } from '../../components/global/SidebarLayout';
import { InfoCard } from '../../components/Participants/InfoCard';
import { BreadCrumbs } from '../../components/ui/BreadCrumbs';
import { Title } from '../../components/ui/Title';
import { useLang } from '../../services/zustand/zusLang';

const cardData = [
  {
    header: 'Монтаж',
    footer: 'C 1-го августа ',
  },
  {
    orang: true,
    header: 'Работа',
    footer: '19–22 августа',
  },
  {
    header: 'Демонтаж',
    footer: '23–24 августа',
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
          <InfoCard {...item} />
        ))}
      </div>
    </SidebarLayout>
  );
};
