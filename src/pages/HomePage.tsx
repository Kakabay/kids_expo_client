import { Card } from "../components/Home/Card";
import { LinkSeeMore } from "../components/ui/LinkSeeMore";
import { cardsData, cardsRectData } from "../database/home.data";
import { Slider } from "../components/Home/Slider";
import NewsSection from "../components/Home/NewsSection";
import { useLang } from "../services/zustand/zusLang";
import { useEffect } from "react";
import { useGetEn } from "../hooks/language/useGetEn";
import { PartnersSection } from "../components/Home/PartnersSection";

export default function HomePage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const localization = useLang((state) => state.activeLang.localization);

  return (
    <>
      <section>
        <Slider />
      </section>

      <section className="pb-10 relative z-10">
        <div className="container">
          <div className="grid translate-y-[-50px] gap-y-4 grid-cols-1 tab:grid-cols-4 gap-5 tab:gap-[30px]">
            {cardsData
              .filter((item) => (localization === "en" ? item.en : !item.en))
              .map((item, i) => (
                <Card {...item} key={i} />
              ))}
          </div>

          <div className="flex tab:flex-row flex-col-reverse gap-[30px]">
            <div className="flex tab:flex-col flex-wrap gap-3">
              {cardsRectData
                .filter((item) => (localization === "en" ? item.en : !item.en))
                .map((item) => (
                  <Card {...item} rect key={item.path} />
                ))}
            </div>

            <div className="flex flex-col tab:items-end justify-between">
              <p className="sm-[16px] md:text-[24px] leading-[130%] font-light tab:mb-0 mb-8">
                {useGetEn(
                  `“Everything for Children”
                  is the largest congress and exhibition B2B event in the
                  field of children's goods industry in Turkmenistan,
                  Central Asia and the CIS countries, uniting
                  professionals who produce and
                  purchase quality products.`,
                  `«Все для детей» - крупнейшее конгресно-выставочное В2В-мероприятие в сфере индустрии
                  детских товаров на территории Туркменистана, стран ЦА и СНГ, объединяющее
                  профессионалов, производящих и закупающих качественную продукцию.`
                )}
              </p>
              <LinkSeeMore
                text={useGetEn("To learn more", "Узнать больше")}
                path="/exhibition-about"
              />
            </div>
          </div>
        </div>
      </section>

      <NewsSection />

      <PartnersSection />

      <section className="mb-[50px] bg-[#f9f9f9]">
        <div className="flex py-5 justify-center container">
          <a href="https://exposale.net/ru" target="_blank">
            <img
              src="https://exposale.net/template-admin/assets/elFinder/files/banners/728x90rus.png"
              title="Найди свою выставку на EXPOSALE.net"
            />
          </a>
        </div>
      </section>

      <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[480px] mb-[50px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.67827952586!2d58.29659607507902!3d37.8912058554459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f7003944259cb1d%3A0xafc893357e4b0d2!2z0KLQvtGA0LPQvtCy0L4t0L_RgNC-0LzRi9GI0LvQtdC90L3QsNGPINC_0LDQu9Cw0YLQsCDQotGD0YDQutC80LXQvdC40YHRgtCw0L3QsA!5e0!3m2!1sru!2s!4v1713164734635!5m2!1sru!2s"
          className="absolute inset-0 w-full h-full "
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </section>
    </>
  );
}
