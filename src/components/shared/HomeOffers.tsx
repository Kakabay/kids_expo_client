import { FC } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { offers } from "@/constantas";
import { OfferCard } from "./OfferCard";

export const HomeOffers: FC = () => {
  const [emblaRef] = useEmblaCarousel({ align: "start" });

  return (
    <section className="bg-surface-secondary py-10 md:my-20 my-0 relative overflow-hidden">
      <div className="container">
        <div ref={emblaRef} className="embla ">
          <div className="mb-2 flex gap-6 embla__container">
            {offers.map((item) => (
              <OfferCard
                {...item}
                key={item.title}
                className="embla__slide flex-[0_0_300px] sm:flex-[0_0_600px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
