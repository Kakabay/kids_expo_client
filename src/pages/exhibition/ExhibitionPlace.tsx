import { SidebarLayout } from '../../components/global/SidebarLayout';
import { BreadCrumbs } from '../../components/ui/BreadCrumbs';
import { Title } from '../../components/ui/Title';
import useGetVenue from '../../hooks/exhibition/useGetVenue';
import { useLang } from '../../services/zustand/zusLang';

const ExhibitionPlace = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const chooseDataLang = (en: string, ru: string) => (localization === 'en' ? en : ru);

  const { venueData } = useGetVenue();

  return (
    <SidebarLayout>
      <BreadCrumbs
        second={chooseDataLang('Exhibition', 'Выставка')}
        path="/exhibition-about"
        third={chooseDataLang('venue', 'Место проведения')}
      />

      <div className="flex flex-col gap-6">
        <Title title={chooseDataLang('Venue', 'Место проведения')} />

        <div
          className="exibition-about-wrapper flex flex-col gap-6"
          dangerouslySetInnerHTML={{
            __html: venueData ? venueData : '',
          }}
        />
        {/* <img src="/assets/images/venue.png" alt="" />

        <p className="leading-[150%]">
          {chooseDataLang(
            `
            Ashgabat Exhibition Hall is the most modern and the largest exhibition center in Turkmenistan. This multi-purpose venue
            hosts not only trade fairs, but also exhibitions, conferences and forums. State-of-the-art
             technologies and AV equipment, top-quality services, easy access and a large-capacity parking
              lot are only some of the advantages of the venue. Kids Expo trade fair will be held in the
               hall with possibility of 2000 m2 interior exhibition area and outdoor places too.
                Connections of water, electric current, compressed air, telephone and wi-fi internet is accessible
                on the floor.

          The exhibition centre provides all necessary conveniences, such as restaurants, coffee places, cloakrooms, rest areas, press centre, business centre, or comfortable conference rooms.

          `,
            `
          Ашхабадский выставочный зал – самый современный и крупнейший выставочный центр
          Туркменистана. На этой многофункциональной площадке проводятся не только ярмарки, но и
          выставки, конференции и форумы. Новейшие технологии и AV-оборудование, первоклассный
          сервис, удобный подъезд и вместительная парковка – это лишь некоторые преимущества
          заведения. Выставка Kids Expo будет проходить в холле с возможностью создания внутренней
          выставочной площади площадью 2000 м2, а также открытых площадок. На этаже доступны
          подключения воды, электрического тока, сжатого воздуха, телефона и Wi-Fi. В выставочном
          центре предусмотрены все необходимые удобства: рестораны, кафе, гардеробы, зоны отдыха,
          пресс-центр, бизнес-центр или комфортабельные конференц-залы.

          
          `,
          )}
        </p> */}
      </div>
    </SidebarLayout>
  );
};

export default ExhibitionPlace;
