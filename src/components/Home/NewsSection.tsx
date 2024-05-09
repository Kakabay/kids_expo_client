import { v4 } from 'uuid';
import { Button } from '../ui/Button';
import { NavBtn } from '../ui/NavBtn';
import { Title } from '../ui/Title';
import { NewsCard } from './NewsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import useGetNews from '../../hooks/useGetNews';
import { useLang } from '../../services/zustand/zusLang';
import { newsDataEn } from '../../database/news.data';

const NewsSection = () => {
  const { newsIsError, newsIsLoading, newsData, newsIsSuccess } = useGetNews();

  if (newsIsError) {
    <h1>Error...</h1>;
  }

  if (newsIsLoading) {
    <h1>Loading...</h1>;
  }

  const localization = useLang((state) => state.activeLang.localization);

  const chooseDataLang = (en: string, ru: string) => (localization === 'en' ? en : ru);

  if (newsIsSuccess) {
    return (
      <section className="container pt-[100px] pb-[50px]">
        <div className="flex items-center justify-between mb-10">
          <Title title={chooseDataLang('News', 'Новости')} />

          <div className="flex gap-5">
            <NavBtn left />
            <NavBtn />
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
          }}
          breakpoints={{
            1024: { slidesPerView: 4 },
            850: { slidesPerView: 3.5 },
            640: { slidesPerView: 2.5 },
            440: { slidesPerView: 1.5 },
          }}>
          {localization === 'en' ? (
            newsDataEn.map((item) => (
              <SwiperSlide key={v4()}>
                <NewsCard
                  path={item.path}
                  title={item.title}
                  published_at={item.published_at}
                  key={v4()}
                />
              </SwiperSlide>
            ))
          ) : newsData ? (
            newsData.data.map((item) => (
              <SwiperSlide key={v4()}>
                <NewsCard
                  path={item.featured_images[0].path}
                  title={item.title}
                  published_at={item.published_at}
                  key={v4()}
                />
              </SwiperSlide>
            ))
          ) : (
            <div>Loading news...</div>
          )}
        </Swiper>

        <Button news text={chooseDataLang('All news', 'Все новости')} />
      </section>
    );
  }
};

export default NewsSection;
