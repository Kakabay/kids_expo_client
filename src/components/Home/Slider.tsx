import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useMediaQuery } from "usehooks-ts";

import useGetBanners from "../../hooks/useGetBanners";
import Loader from "../Loader";

export const Slider = () => {
  const tab = useMediaQuery("(min-width: 1250px)");
  const md = useMediaQuery("(min-width: 768px)");

  const { bannersIsLoading, bannersData } = useGetBanners();

  const chooseBanner = () => {
    if (tab) {
      return "main-surat";
    } else if (md) {
      return "medium-surat";
    } else {
      return "small-surat";
    }
  };

  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      slidesPerView={1}
      loop
      speed={1500}
      autoplay={{ delay: 5000 }}
    >
      {bannersData &&
        bannersData.map(
          (item, i) =>
            item.code.includes(chooseBanner()) && (
              <SwiperSlide key={i}>
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
            )
        )}
      {bannersIsLoading && <Loader className="h-[490px]" />}
    </Swiper>
  );
};
