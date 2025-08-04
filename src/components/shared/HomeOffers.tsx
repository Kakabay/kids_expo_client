import { FC } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { OfferCard } from "./OfferCard";
import { useTranslation } from "react-i18next";

export const HomeOffers: FC = () => {
  const [emblaRef] = useEmblaCarousel({ align: "start" });

  const { t } = useTranslation("home");

  const data = t("offers", { returnObjects: true }) as {
    title: string;
    text: string;
  }[];

  return (
    <section className="bg-surface-secondary py-10 md:my-20 my-0 relative overflow-hidden">
      <div className="container">
        <div ref={emblaRef} className="embla ">
          <div className="mb-2 flex gap-6 embla__container">
            {data.map((item, i) => (
              <OfferCard
                link=""
                img={`/assets/images/offer-${i + 1}.png`}
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
