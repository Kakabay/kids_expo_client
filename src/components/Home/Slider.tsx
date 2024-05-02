import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { v4 } from "uuid";

const bannersData = [
  "/public/assets/images/banner3.png",
  "/public/assets/images/test_banner.png",
];

export const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      slidesPerView={1}
      // onAutoplayTimeLeft={onAutoplayTimeLeft}
      loop
      speed={1500}
      autoplay={{ delay: 15000 }}
    >
      {bannersData
        ? bannersData.map((item) => (
            <SwiperSlide key={v4()}>
              <Link to={""}>
                <div className="">
                  <img
                    src={item}
                    alt="Баннер"
                    width={1920}
                    height={490}
                    className="h-[490px] object-cover object-center w-[1920px]"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))
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
