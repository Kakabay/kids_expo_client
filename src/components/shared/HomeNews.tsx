import { NavBtn } from "./NavBtn";
import { Title } from "./Title";
import { HomeNewsCard } from "./NewsCard";
import useGetNews from "../../hooks/useGetNews";
import { useLang } from "../../services/zustand/zusLang";
import { Link } from "react-router-dom";
import { CustomButton } from "./CustomButton";
import useEmblaCarousel from "embla-carousel-react";

const HomeNews = () => {
  const { newsIsError, newsIsLoading, newsData, newsIsSuccess } = useGetNews({
    current: 1,
    perPage: 7,
  });

  const [emblaRef] = useEmblaCarousel();

  if (newsIsError) {
    <h1>Error...</h1>;
  }

  if (newsIsLoading) {
    <h1>Loading...</h1>;
  }

  const localization = useLang((state) => state.activeLang.localization);

  const chooseDataLang = (en: string, ru: string) =>
    localization === "en" ? en : ru;

  if (newsIsSuccess) {
    return (
      <section className="container pt-0 mb-16 md:pt-[100px] md:mb-[100px]">
        <div className="flex items-center justify-between mb-10">
          <Title title={chooseDataLang("News", "Новости")} />

          <div className="hidden sm:flex gap-5">
            <NavBtn left />
            <NavBtn />
          </div>
        </div>

        <div ref={emblaRef} className="embla h-[350px] overflow-hidden">
          <div className="flex gap-6">
            {newsData?.data.map((item, i) => (
              <HomeNewsCard
                key={i}
                className="flex-[0_0_390px]"
                id={item.id}
                path={item.featured_images[0].path}
                title={item.title}
                published_at={item.published_at}
              />
            ))}
          </div>
        </div>

        <Link to={"/news"}>
          <CustomButton news text={chooseDataLang("All news", "Все новости")} />
        </Link>
      </section>
    );
  }
};

export default HomeNews;
