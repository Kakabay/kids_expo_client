import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { v4 } from 'uuid';
import { useQuery } from '@tanstack/react-query';
import expoService from '../../api/services/expo.service';
import { useEffect, useState } from 'react';
import { GetBannersTypes } from '../../api/types/getBannersTypes';

const bannersData = ['/assets/images/banner3.png', '/assets/images/test_banner.png'];

export const Slider = () => {
  // const { isError, isLoading, data } = useQuery({
  //   queryKey: ['bannersData'],
  //   queryFn: () => expoService.getBanners(),
  // });

  // if (isError) {
  //   <h1>Error...</h1>;
  // }

  // if (isLoading) {
  //   <h1>Loading...</h1>;
  // }

  const [data, setData] = useState<GetBannersTypes>();

  const fetchData = async () => {
    try {
      const response = await fetch('http://editor.turkmenexpo.com/api/v1/banners');

      const data = await response.json();

      setData(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      slidesPerView={1}
      // onAutoplayTimeLeft={onAutoplayTimeLeft}
      loop
      speed={1500}
      autoplay={{ delay: 5000 }}>
      {data
        ? data.data.map((item) =>
            item.code.includes('main-banner') ? (
              <SwiperSlide key={v4()}>
                <Link to={''}>
                  <div className="">
                    <img
                      src={item.banner_items[0].image}
                      alt={item.banner_items[0].title}
                      width={1920}
                      height={490}
                      className="h-[490px] object-cover object-center w-[1920px]"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ) : null,
          )
        : null}

      {/* <div className="container absolute right-0 bottom-[25px] swiper-pagination swiper-pagination-horizontal">
          <div className="swiper-pagination-fraction items-center justify-end gap-4">
            <div className="autoplay-progress w-[200px] flex items-center gap-5 bg-bgWhite rounded-full">
              <svg ref={progressCircle}>
                <line viewBox="0 0 63 5" x1={0} x2={63} />
              </svg>
            </div>
          </div>
        </div> */}
    </Swiper>
  );
};
