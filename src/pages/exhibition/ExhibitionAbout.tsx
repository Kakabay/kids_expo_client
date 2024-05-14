import { SidebarLayout } from '../../components/global/SidebarLayout';
import { BreadCrumbs } from '../../components/ui/BreadCrumbs';
import { Title } from '../../components/ui/Title';
import useGetAboutExhibition from '../../hooks/useGetAboutExhibition';
import { useLang } from '../../services/zustand/zusLang';

const ExhibitionAbout = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const chooseDataLang = (en: string, ru: string) => (localization === 'en' ? en : ru);

  const {
    aboutExhibitionData,
    aboutExhibitionIsError,
    aboutExhibitionIsLoading,
    aboutExhibitionIsSuccess,
  } = useGetAboutExhibition();

  if (aboutExhibitionIsError) {
    <h1>Error...</h1>;
  }
  if (aboutExhibitionIsLoading) {
    <h1>Loading...</h1>;
  }

  if (aboutExhibitionIsSuccess) {
    return (
      <SidebarLayout>
        <div className="w-full">
          <BreadCrumbs second={chooseDataLang('About', 'О Выставке')} />

          <Title title={chooseDataLang('About', 'О выставке')} mb24 />

          <div
            className="flex flex-col gap-6 exibition-about-wrapper"
            dangerouslySetInnerHTML={{
              __html: aboutExhibitionData ? aboutExhibitionData.data : '',
            }}
          />
        </div>
      </SidebarLayout>
    );
  }
};

export default ExhibitionAbout;
