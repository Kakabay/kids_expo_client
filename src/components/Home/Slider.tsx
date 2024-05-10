import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { v4 } from 'uuid';

import useGetBanners from '../../hooks/useGetBanners';
import { useLang } from '../../services/zustand/zusLang';

// const bannersData = ['/assets/images/banner3.png', '/assets/images/test_banner.png'];

export const Slider = () => {
  const { bannersIsError, bannersIsLoading, bannersData, bannersIsSuccess } = useGetBanners();

  if (bannersIsError) {
    <h1>Error...</h1>;
  }

  if (bannersIsLoading) {
    <h1>Loading...</h1>;
  }

  const localization = useLang((state) => state.activeLang.localization);

  if (bannersIsSuccess) {
    return (
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={1}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        loop
        speed={1500}
        autoplay={{ delay: 5000 }}>
        {/* {bannersData
          ? bannersData.map((item) =>
              item.code.includes('main-banner') ? (
                <SwiperSlide key={v4()}>
                  <Link to={''}>
                    <div className="h-[490px] w-full">
                      <img
                        src={item.banner_items[0].image}
                        alt={item.banner_items[0].title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              ) : null,
            )
          : null} */}
        {localization === 'en' ? (
          <SwiperSlide key={v4()}>
            <Link to={''}>
              <div className="h-[490px] w-full">
                <img
                  src={'/assets/images/banner-en.png'}
                  alt={'banner'}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </Link>
          </SwiperSlide>
        ) : bannersData ? (
          bannersData.map((item) =>
            item.code.includes('main-banner') ? (
              <SwiperSlide key={v4()}>
                <Link to={''}>
                  <div className="h-[490px] w-full">
                    <img
                      src={item.banner_items[0].image}
                      alt={item.banner_items[0].title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ) : null,
          )
        ) : (
          <div className="h-[490px] w-full"></div>
        )}

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
  }
};
