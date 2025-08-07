import { Title } from "./Title";
import useGetPartners from "../../hooks/useGetPartners";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslate } from "@/lib/useTranslate";

export const PartnersSection = () => {
  const { partnersData } = useGetPartners();
  const title = useTranslate("partners");

  return (
    <div className="container mb-[50px]">
      <Title title={title} />

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        speed={5000}
        spaceBetween={80}
        slidesPerGroup={1}
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
                <SwiperSlide key={i} className="size-[200px]">
                  {!item.link ? (
                    <img
                      src={item?.images?.[0]?.path}
                      className="size-full object-cover"
                    />
                  ) : (
                    <a href={item.link} target="_blank">
                      <img
                        src={item?.images?.[0]?.path}
                        alt="logo"
                        className="size-full object-cover"
                      />
                    </a>
                  )}
                </SwiperSlide>
              )
          )}
      </Swiper>
    </div>
  );
};
