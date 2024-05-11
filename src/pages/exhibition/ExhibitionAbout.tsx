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

          {localization === 'en' ? (
            <div className="flex flex-col gap-6">
              <p className="leading-[150%]">
                For the first time in history, from August 19 to 22, 2024, the International
                Universal Exhibition-Fair “Kids Expo: Everything for Children” will be held in
                Ashgabat. This event promises to be a key moment in the children's products and
                services industry, providing a unique opportunity for companies to contribute to the
                development of this market segment.{' '}
              </p>

              <img
                src={
                  'https://turkmenexpo.com/app/storage/app/media/uploaded-files/about.aa68485e.png'
                }
                alt=""
              />

              <p className="leading-[150%]">
                Exhibitors are invited to attend the trade fair which is a platform where companies
                working in the field of children's services can present their innovative products
                and services, enriching the market with new opportunities. “Kids Expo” will not only
                provide a platform for enterprises, but will also become an open window to the
                market of Turkmenistan. The exhibition's exposition is aimed at attracting the
                attention of international partners, investors and representatives of the children's
                industry from all over the world. It’s an event focused on the area kids goods to
                find appropriate business partners for the Central Asian market or present own
                products and look for a new clients. More than 90 exhibitors and 1500 visitors are
                expected.
              </p>
              <div className="flex flex-col gap-5 leading-[150%]">
                <p>
                  <span className="text-purple">ORGANIZER: </span>
                  Chamber of Commerce and Industry of Turkmenistan{' '}
                </p>
                <p>
                  <span className="text-purple">СO-ORGANIZER: </span>
                  Turkmen Expo company
                </p>
              </div>
            </div>
          ) : aboutExhibitionData ? (
            <div
              className="flex flex-col gap-6 exibition-about-wrapper"
              dangerouslySetInnerHTML={{ __html: aboutExhibitionData.data }}></div>
          ) : null}
        </div>
      </SidebarLayout>
    );
  }
};

export default ExhibitionAbout;
