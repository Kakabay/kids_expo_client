import { Title } from "../ui/Title";
import { useGetEn } from "../../hooks/language/useGetEn";
import useGetPartners from "../../hooks/useGetPartners";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { v4 } from "uuid";

export const PartnersSection = () => {
  const { partnersData } = useGetPartners();

  console.log(partnersData);

  return (
    <div className="container mb-[50px]">
      <Title title={useGetEn("Partners", "Партнёры")} />

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 0 }}
        speed={5000}
        spaceBetween={45}
        slidesPerView={2.5}
        loop
        breakpoints={{
          768: { slidesPerView: 4 },
          630: { slidesPerView: 3 },
        }}
      >
        {partnersData
          ? partnersData.map((item) =>
              item.images[0].path ? (
                <SwiperSlide>
                  <img src={item.images[0].path} alt="" />
                </SwiperSlide>
              ) : null
            )
          : null}
      </Swiper>
    </div>
  );
};
