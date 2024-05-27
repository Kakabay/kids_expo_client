import { Title } from "../ui/Title";
import { useGetEn } from "../../hooks/language/useGetEn";
import useGetPartners from "../../hooks/useGetPartners";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { v4 } from "uuid";

export const PartnersSection = () => {
  const { partnersData } = useGetPartners();
  return (
    <div className="container mb-[50px]">
      <Title title={useGetEn("Partners", "Партнёры")} />

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 0 }}
        speed={5000}
        spaceBetween={45}
        loop
        breakpoints={{
          768: { slidesPerView: 4 },
          630: { slidesPerView: 3 },
          0: { slidesPerView: 2.5 },
        }}
      >
        {partnersData
          ? partnersData.map((item) => (
              <SwiperSlide key={v4()}>
                <img src={item.images[0].path ? item.images[0].path : ""} />
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </div>
  );
};
