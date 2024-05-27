import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { v4 } from "uuid";
import { useMediaQuery } from "usehooks-ts";

import useGetBanners from "../../hooks/useGetBanners";

export const Slider = () => {
  const tab = useMediaQuery("(min-width: 1250px)");
  const md = useMediaQuery("(min-width: 768px)");

  const { bannersIsError, bannersIsLoading, bannersData, bannersIsSuccess } =
    useGetBanners();

  if (bannersIsError) {
    <h1>Error...</h1>;
  }

  if (bannersIsLoading) {
    <h1>Loading...</h1>;
  }

  const chooseBanner = () => {
    if (tab) {
      return "main-surat";
    } else if (md) {
      return "medium-surat";
    } else {
      return "small-surat";
    }
  };

  if (bannersIsSuccess) {
    return (
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={1}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        loop
        speed={1500}
        autoplay={{ delay: 5000 }}
      >
        {bannersData
          ? bannersData.map((item) =>
              item.code.includes(chooseBanner()) ? (
                <SwiperSlide key={v4()}>
                  <Link to={""}>
                    <div className="h-[490px] w-full">
                      <img
                        src={item.banner_items[0].image}
                        alt={item.banner_items[0].title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              ) : null
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
  }
};
