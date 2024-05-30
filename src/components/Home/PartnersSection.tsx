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
        speed={2000}
        spaceBetween={20}
        slidesPerGroup={5}
        slidesPerView={5}
        loop
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 4.5 },
          630: { slidesPerView: 3.5 },
          300: { slidesPerView: 2 },
        }}
      >
        {partnersData
          ? partnersData.map((item) =>
              item.images[0].path ? (
                <SwiperSlide key={v4()}>
                  {!item.link ? (
                    <img src={item.images[0].path} />
                  ) : (
                    <a href={item.link} target="_blank">
                      <img src={item.images[0].path} alt="logo" />
                    </a>
                  )}
                </SwiperSlide>
              ) : null
            )
          : null}
      </Swiper>
    </div>
  );
};
