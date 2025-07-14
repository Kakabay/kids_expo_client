import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useMediaQuery } from "usehooks-ts";

import useGetBanners from "../../hooks/useGetBanners";
import Loader from "../Loader";
import { useTranslate } from "@/lib/utils";

export const HomeHero = () => {
  const tab = useMediaQuery("(min-width: 1024px)");
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

  const btn = useTranslate("Зарегистрироваться", "Register");

  return (
    <section className="">
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
                    <div className="lg:max-h-[600px] lg:min-h-[320px]">
                      <img
                        src={item.banner_items[0].image}
                        alt={item.banner_items[0].title}
                        className="size-full object-cover"
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              )
          )}
        {bannersIsLoading && <Loader className="h-[490px]" />}
      </Swiper>

      <div className="container relative">
        <Link
          to="/participants-apply"
          className="absolute flex items-center justify-center bg-interactive-background-primary h-14 rounded-sm font-bold text-white w-[300px] right-10 bottom-20 z-50"
        >
          {btn}
        </Link>
      </div>
    </section>
  );
};
