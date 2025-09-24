import { useGetTestimonials } from "@/hooks/useGetTestimonials";
import useEmblaCarousel from "embla-carousel-react";
import { Quote } from "lucide-react";
import Loader from "../Loader";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const HomeTestimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, []);
  const [activeIndex, setActiveIndex] = useState(0);

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
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const { data, isPending } = useGetTestimonials();

  if (isPending) return <Loader />;

  return (
    <section className="container my-20">
      <h2 className="h2 mb-8 text-center">Reviews</h2>

      <div ref={emblaRef} className="embla overflow-hidden">
        <div className="embla__container max-w-[710px] mx-auto gap-[20vw] flex">
          {data?.map((item, i) => (
            <article
              key={item?.id ?? i}
              className="relative flex flex-col text-center gap-3 flex-[0_0_100%] justify-center items-center"
            >
              <Quote
                className="absolute left-0 rotate-180 bottom-14
               text-text-interactive stroke-1 fill-text-interactive"
              />
              <Quote className="absolute right-0 bottom-2 text-text-interactive stroke-1 fill-text-interactive" />

              <img
                src={item?.image?.path}
                alt={item?.name}
                className="size-[100px] object-contain bg-black rounded-full"
              />

              <div className="">
                <h3 className="font-bold text-base">{item?.name}</h3>
                <h4 className="text-base">{item?.job_title}</h4>
              </div>
              <p className="text-base text-text-secondary px-14">
                {item?.text}
              </p>
            </article>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: data?.length ?? 3 }).map((_, index) => (
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
