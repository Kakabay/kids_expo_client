import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

import useGetBanners from "../../hooks/useGetBanners";
import Loader from "./Loader";
import { cn } from "@/lib/utils";
import { useLang } from "@/services/zustand/zusLang";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslate } from "@/lib/useTranslate";

export const HomeHero = () => {
  const tab = useMediaQuery("(min-width: 1024px)");
  const md = useMediaQuery("(min-width: 768px)");
  const lang = useLang((state) => state.activeLang.localization);
  const becomeSponsor = useTranslate("becomeSponsor");

  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 50 }, [
    Autoplay({
      stopOnInteraction: false,
      delay: 4000,
    }),
  ]);

  const { bannersIsLoading, bannersData, bannersIsSuccess } = useGetBanners();

  const chooseBanner = () => {
    if (tab) {
      return "main-surat";
    } else if (md) {
      return "medium-surat";
    } else {
      return "small-surat";
    }
  };

  const filteredSlides =
    bannersData
      ?.filter((item) => item.code.includes(chooseBanner()))
      .flatMap((item) =>
        item.banner_items.map((bannerItem, idx) => (
          <Link
            to={""}
            className="flex-[0_0_100%] overflow-hidden lg:max-h-[600px] lg:min-h-[320px]"
            key={`${item.code}-${idx}`}
          >
            <img
              src={bannerItem.image}
              alt={bannerItem.title}
              className="size-full object-cover overflow-hidden"
            />
          </Link>
        ))
      ) || [];

  if (bannersIsLoading) return <Loader className="h-[490px]" />;

  if (bannersIsSuccess)
    return (
      <section ref={emblaRef}>
        <div className="flex">{filteredSlides}</div>
        <div className="container relative">
          <Link
            to="/sponsor-form"
            className={cn(
              "absolute flex items-center text-2xl justify-center bg-interactive-background-primary md:h-14 h-10 rounded-sm font-bold text-white w-[300px] md:right-10 md:bottom-20 z-10 bottom-5",
              lang === "ru" ? "text-xl" : "text-2xl"
            )}
          >
            {becomeSponsor}
          </Link>
        </div>
      </section>
    );
};
