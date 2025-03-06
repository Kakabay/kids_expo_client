import { Title } from "../ui/Title";
import { useGetEn } from "../../hooks/language/useGetEn";
import useGetPartners from "../../hooks/useGetPartners";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export const PartnersSection = () => {
  const { partnersData } = useGetPartners();

  console.log(partnersData);

  return (
    <div className="container mb-[50px]">
      <Title title={useGetEn("Partners", "Партнёры")} />

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        speed={5000}
        spaceBetween={20}
        slidesPerGroup={4}
        slidesPerView={4}
        loop
        breakpoints={{
          1024: { slidesPerView: 4 },
          630: { slidesPerView: 3.5 },
          300: { slidesPerView: 2 },
        }}
      >
        {partnersData &&
          partnersData.map(
            (item, i) =>
              item.images[0].path && (
                <SwiperSlide key={i}>
                  {!item.link ? (
                    <img src={item?.images?.[0]?.path} />
                  ) : (
                    <a href={item.link} target="_blank">
                      <img src={item?.images?.[0]?.path} alt="logo" />
                    </a>
                  )}
                </SwiperSlide>
              )
          )}
      </Swiper>
    </div>
  );
};
