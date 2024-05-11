import { v4 } from 'uuid';
import { SidebarLayout } from '../../components/global/SidebarLayout';
import { ThemeCard } from '../../components/Theme/ThemeCard';
import { BreadCrumbs } from '../../components/ui/BreadCrumbs';
import { Title } from '../../components/ui/Title';
import { themeData } from '../../database/theme.data';
import { useLang } from '../../services/zustand/zusLang';

export const ExhibitionTheme = () => {
  const localization = useLang((state) => state.activeLang.localization);
  const chooseDataLang = (en: string, ru: string) => (localization === 'en' ? en : ru);

  return (
    <SidebarLayout>
      <BreadCrumbs
        second={chooseDataLang('Exhibition', 'Выставка')}
        third={chooseDataLang('Venue', 'Место проведения')}
        path="/exhibition-about"
      />

      <Title title={chooseDataLang('Theme', 'Тематика')} mb24 />

      <div className="border-b-[1px] border-b-[#DADADA]">
        {themeData.map((item) => (
          <ThemeCard key={v4()} {...item} />
        ))}
      </div>
    </SidebarLayout>
  );
};
