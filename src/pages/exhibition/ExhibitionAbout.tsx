import { SidebarLayout } from "../../components/global/SidebarLayout";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Button } from "../../components/ui/Button";
import { Title } from "../../components/ui/Title";
import useGetAboutExhibition from "../../hooks/useGetAboutExhibition";

const ExhibitionAbout = () => {
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

  console.log(aboutExhibitionData);

  if (aboutExhibitionIsSuccess) {
    return (
      <SidebarLayout>
        <div className="w-full">
          <BreadCrumbs second="О Выставке" />

          <Title title="О выставке" mb24 />

          {aboutExhibitionData ? (
            <div
              className="flex flex-col gap-6 exibition-about-wrapper"
              dangerouslySetInnerHTML={{ __html: aboutExhibitionData.data }}
            >
              {/* <p className="text-[22px] font-light leading-[150%]">
              Впервые в истории с 19 по 22 августа 2024 года в Ашхабаде пройдет Международная
              универсальная выставка-ярмарка «Kids Expo: Всё для детей».
            </p>

            <p className="leading-[150%]">
              Это мероприятие обещает стать ключевым моментом в индустрии детских товаров и услуг,
              предоставляя компаниям уникальную возможность внести свой вклад в развитие этого
              сегмента рынка. Экспоненты приглашаются принять участие в выставке, которая является
              площадкой для компаний работающих в сфере детских услуг, где они могут представить
              свои инновационные продукты и услуги, обогащая рынок новыми возможностями. «Kids Expo»
              не только предоставит площадку для предприятий, но и станет открытым окном на рынок
              Туркменистана. Экспозиция выставки нацелена на привлечение внимания международных
              партнеров, инвесторов и представителей детской индустрии со всего мира. Это
              мероприятие, посвященное теме детских товаров, направленное на поиск подходящих
              деловых партнеров для рынка Центральной Азии или презентацию собственной продукции и
              поиск новых клиентов. Ожидается более 90 экспонентов и 1500 посетителей.
            </p>

            <div className="flex flex-col gap-5 leading-[150%]">
              <p>
                <span className="text-purple">Организатор: </span>
                Торгово-промышленная палата Туркменистана.
              </p>
              <p>
                <span className="text-purple">Со-организатор: </span>
                Компания «Туркмен Экспо».
              </p>
            </div> */}
            </div>
          ) : null}
        </div>
      </SidebarLayout>
    );
  }
};

export default ExhibitionAbout;
