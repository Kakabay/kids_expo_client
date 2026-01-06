import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslate } from "@/lib/useTranslate";
import useGetBanners from "@/hooks/useGetBanners";
import Loader from "../Loader";
import { useTranslation } from "react-i18next";

export const HomeHero = () => {
  const tab = useMediaQuery("(min-width: 1024px)");
  const md = useMediaQuery("(min-width: 768px)");
  const becomeSponsor = useTranslate("becomeSponsor");
  const { t } = useTranslation("home");

  const stend = t("buttons", { returnObjects: true }) as {
    name: string;
    link: string;
  }[];

  const stendBtn = stend.slice(0, 1)[0].name;

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

  const isVideo = (src?: string) =>
    src?.toLowerCase().includes(".mp4") ?? false;

  const convertToHttps = (url?: string) => {
    if (!url) return "";
    // Если URL уже использует https или относительный путь, возвращаем как есть
    if (url.startsWith("https://") || url.startsWith("/")) return url;
    // Заменяем http:// на https://
    if (url.startsWith("http://")) {
      return url.replace(/^http:\/\//i, "https://");
    }
    // Если нет протокола, добавляем https://
    return `https://${url}`;
  };

  const bannerItems =
    bannersData
      ?.filter((item) => item.code.includes(chooseBanner()))
      .flatMap((item) =>
        item.banner_items.map((bannerItem, idx) => ({
          ...bannerItem,
          key: `${item.code}-${idx}`,
        }))
      ) || [];

  const hasVideo = bannerItems.some((bannerItem) => isVideo(bannerItem.image));

  const filteredSlides = (
    hasVideo
      ? bannerItems.filter((bannerItem) => isVideo(bannerItem.image))
      : bannerItems.filter((bannerItem) => !isVideo(bannerItem.image))
  ).map((bannerItem) => (
    <Link
      to={""}
      className={cn(
        "flex-[0_0_100%] overflow-hidden lg:max-h-[600px] lg:min-h-[320px]",
        hasVideo && "pointer-events-none cursor-default"
      )}
      key={bannerItem.key}
    >
      {isVideo(bannerItem.image) ? (
        <video
          src={convertToHttps(bannerItem.image)}
          muted
          loop
          autoPlay
          className="pointer-events-none cursor-default size-full object-cover"
        />
      ) : (
        <img
          src={convertToHttps(bannerItem.image)}
          alt={bannerItem.title}
          className="size-full object-cover overflow-hidden"
        />
      )}
    </Link>
  ));

  if (bannersIsLoading) return <Loader className="h-[490px]" />;

  if (bannersIsSuccess)
    return (
      <section ref={emblaRef}>
        <div className="flex">{filteredSlides}</div>
        <div className="container relative flex">
          <Link
            to="/sponsor-form"
            className={cn(
              "absolute flex items-center md:text-xl text-lg justify-center bg-interactive-background-primary md:h-12 h-8 rounded-sm font-bold text-white w-[290px] md:right-10 md:bottom-20 z-10 bottom-5"
            )}
          >
            {becomeSponsor}
          </Link>
          <Link
            to="/stand-form"
            className={cn(
              "absolute flex items-center md:text-xl text-lg justify-center bg-interactive-background-primary md:h-12 h-8 rounded-sm font-bold text-white w-[290px] md:right-[360px] md:bottom-20 z-10 bottom-16"
            )}
          >
            {stendBtn}
          </Link>
        </div>
      </section>
    );
};
