import { NavBtn } from "../ui/NavBtn";
import { Title } from "../ui/Title";
import { HomeNewsCard } from "./NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useGetNews from "../../hooks/useGetNews";
import { useLang } from "../../services/zustand/zusLang";
import { Link } from "react-router-dom";
import { CustomButton } from "../ui/CustomButton";

const NewsSection = () => {
  const { newsIsError, newsIsLoading, newsData, newsIsSuccess } = useGetNews({
    current: 1,
    perPage: 7,
  });

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
      <section className="container pt-[100px] mb-[100px]">
        <div className="flex items-center justify-between mb-10">
          <Title title={chooseDataLang("News", "Новости")} />

          <div className="hidden sm:flex gap-5">
            <NavBtn left />
            <NavBtn />
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          breakpoints={{
            1024: { slidesPerView: 4 },
            850: { slidesPerView: 3.5 },
            640: { slidesPerView: 2.5 },
            500: { slidesPerView: 1.5 },
            0: { slidesPerView: 1 },
          }}
        >
          {newsData &&
            newsData.data.map((item, i) => (
              <SwiperSlide key={i}>
                <HomeNewsCard
                  id={item.id}
                  path={item.featured_images[0].path}
                  title={item.title}
                  published_at={item.published_at}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <Link to={"/news"}>
          <CustomButton news text={chooseDataLang("All news", "Все новости")} />
        </Link>
      </section>
    );
  }
};

export default NewsSection;
