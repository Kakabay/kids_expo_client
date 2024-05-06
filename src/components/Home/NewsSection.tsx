import { v4 } from 'uuid';
import { Button } from '../ui/Button';
import { NavBtn } from '../ui/NavBtn';
import { Title } from '../ui/Title';
import { NewsCard } from './NewsCard';
import { useQuery } from '@tanstack/react-query';
import { AxiosPromise } from 'axios';
import expoService from '../../services/api/requests/expo.service';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { GetNewsTypes } from '../../services/api/types/getNewsTypes';

const NewsSection = () => {
  const { isError, isLoading, data, isSuccess } = useQuery({
    queryKey: ['newsData'],
    queryFn: (): AxiosPromise<GetNewsTypes> => expoService.getNews(),
    select: ({ data }) => data.data,
  });

  if (isError) {
    <h1>Error...</h1>;
  }

  if (isLoading) {
    <h1>Loading...</h1>;
  }

  if (isSuccess) {
    return (
      <section className="container pt-[100px] pb-[50px]">
        <div className="flex items-center justify-between mb-10">
          <Title title="Новости" />
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
          {data.map((item) => (
            <SwiperSlide key={v4()}>
              <NewsCard
                path={item.featured_images[0].path}
                title={item.title}
                published_at={item.published_at}
                key={v4()}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Button news text="Все новости" />
      </section>
    );
  }
};

export default NewsSection;
