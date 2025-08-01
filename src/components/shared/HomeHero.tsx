import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

import useGetBanners from "../../hooks/useGetBanners";
import Loader from "./Loader";
import { cn, useTranslate } from "@/lib/utils";
import { useLang } from "@/services/zustand/zusLang";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const HomeHero = () => {
  const tab = useMediaQuery("(min-width: 1024px)");
  const md = useMediaQuery("(min-width: 768px)");
  const lang = useLang((state) => state.activeLang.localization);

  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 50 }, [
    Autoplay({
      stopOnInteraction: false,
      delay: 4000,
    }),
  ]);

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

  const filteredSlides =
    bannersData
      ?.filter((item) => item.code.includes(chooseBanner()))
      .flatMap((item) =>
        item.banner_items.map((bannerItem, idx) => (
          <Link to={""} className="flex-[0_0_100%]" key={`${item.code}-${idx}`}>
            <div className="lg:max-h-[600px] lg:min-h-[320px]">
              <img
                src={bannerItem.image}
                alt={bannerItem.title}
                className="size-full object-cover"
              />
            </div>
          </Link>
        ))
      ) || [];

  return (
    <section ref={emblaRef}>
      <div className="flex">{filteredSlides}</div>
      {bannersIsLoading && <Loader className="h-[490px]" />}
      <div className="container relative">
        <Link
          to="/participants-apply"
          className={cn(
            "absolute flex items-center text-2xl justify-center bg-interactive-background-primary md:h-14 h-10 rounded-sm font-bold text-white w-[300px] md:right-10 md:bottom-20 z-50 bottom-5",
            lang === "ru" ? "text-xl" : "text-2xl"
          )}
        >
          {btn}
        </Link>
      </div>
    </section>
  );
};
