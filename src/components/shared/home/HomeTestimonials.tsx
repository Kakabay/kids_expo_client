import { useGetTestimonials } from "@/hooks/useGetTestimonials";
import useEmblaCarousel from "embla-carousel-react";
import Loader from "../Loader";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import Autoplay from "embla-carousel-autoplay";

export const HomeTestimonials = () => {
  const groupSize = 3;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      duration: 100,
      align: "start",
      slidesToScroll: groupSize,
      containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 6000,
        stopOnInteraction: false,
      }),
    ]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardHeight, setCardHeight] = useState<number>();
  const { t } = useTranslation("index");
  const cardsRef = useRef<HTMLDivElement>(null);
  const { data, isPending } = useGetTestimonials();

  const syncCardHeights = useCallback(() => {
    const cards = cardsRef.current?.querySelectorAll<HTMLElement>(
      "[data-testimonial-card]"
    );
    if (!cards?.length) return;

    const maxHeight = Math.max(
      ...Array.from(cards).map((card) => card.offsetHeight)
    );
    setCardHeight(maxHeight);
  }, []);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(Math.floor(emblaApi.selectedScrollSnap()));
    };

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    syncCardHeights();
    const handleResize = () => syncCardHeights();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [data, syncCardHeights]);

  if (isPending) return <Loader />;

  const totalDots =
    Math.max(1, Math.ceil((data?.length ?? 0) / groupSize)) || 1;

  return (
    <section className="container my-20">
      <h2 className="h2 mb-8 text-center">{t("reviews")}</h2>

      <div ref={emblaRef} className="embla overflow-hidden">
        <div
          ref={cardsRef}
          className="embla__container max-w-[710px] mx-auto gap-5 flex items-stretch"
        >
          {data?.map((item) => (
            <div
              key={item?.id}
              data-testimonial-card
              style={cardHeight ? { height: cardHeight } : undefined}
              className="md:flex-[0_0_400px] flex-[0_0_350px] min-h-[300px] pb-10 h-full flex items-stretch relative select-none"
            >
              <article className="md:bg-white bg-neutral-50/50 md:p-10 p-6 pb-20 size-full rounded-[38px] flex flex-col gap-5 h-full flex-1">
                <img
                  src="/assets/icons/quotes.svg"
                  alt=""
                  height={35}
                  width={35}
                />

                <p className="text-sm text-[#171C1B]">{item?.text}</p>

                <div className="flex flex-col gap-5 items-center absolute left-1/2 -translate-x-1/2 top-[82%] w-full">
                  <div className="flex justify-center items-center overflow-hidden rounded-full border-4 border-surface-brand bg-white size-[70px]">
                    {item?.image?.path && (
                      <img
                        src={item?.image?.path ?? ""}
                        alt={item?.name}
                        height={50}
                        width={50}
                        className="obejct-contain"
                      />
                    )}
                  </div>
                  <div className="text-center flex flex-col gap-1.5">
                    <h3 className="text-base font-bold">{item?.name}</h3>
                    <p className="text-sm">{item?.job_title}</p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-40">
          {Array.from({ length: totalDots }).map((_, index) => (
            <span
              onClick={() => scrollTo?.(index)}
              key={index}
              className={cn(activeIndex === index ? "dot-active" : "dot")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
