import { Card } from "../components/Home/Card";
import { LinkSeeMore } from "../components/LinkSeeMore";
import { NavBtn } from "../components/NavBtn";
import { PageLayout } from "../components/PageLayout";
import { Title } from "../components/Title";
import { cardsData, cardsRectData } from "../database/home.data";
import { newsData } from "../database/news.data";
import { NewsCard } from "../components/Home/NewsCard";
import { Button } from "../components/Button";
import { Slider } from "../components/Home/Slider";

export default function HomePage() {
  return (
    <PageLayout>
      <section>
        <Slider />
      </section>

      <section className="pb-10 bg-white2 relative z-10">
        <div className="container">
          <div className="grid translate-y-[-50px] gap-y-3 grid-cols-1 tab:grid-cols-4 gap-5 tab:gap-[30px]">
            {cardsData.map((item) => (
              <Card {...item} />
            ))}
          </div>

          <div className="flex tab:flex-row flex-col-reverse gap-[30px]">
            <div className="flex tab:flex-col flex-wrap gap-3">
              {cardsRectData.map((item) => (
                <Card {...item} rect />
              ))}
            </div>

            <div className="flex flex-col tab:items-end justify-between">
              <p className="text-[24px] leading-[130%] font-light tab:mb-0 mb-8">
                «Все для детей» - крупнейшее конгресно-выставочное
                В2В-мероприятие в сфере индустрии детских товаров на территории
                Туркменистана, стран ЦА и СНГ, объединяющее профессионалов,
                производящих и закупающих качественную продукцию.
              </p>
              <LinkSeeMore path="" />
            </div>
          </div>
        </div>
      </section>

      <section className="container pt-[100px] pb-[50px]">
        <div className="flex items-center justify-between mb-10">
          <Title title="Новости" />
          <div className="flex gap-5">
            <NavBtn left />
            <NavBtn />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {newsData.map((item) => (
            <NewsCard {...item} />
          ))}
        </div>

        <Button text="Все новости" />
      </section>

      <section className="relative w-full h-[480px] google-map mb-[50px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.67827952586!2d58.29659607507902!3d37.8912058554459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f7003944259cb1d%3A0xafc893357e4b0d2!2z0KLQvtGA0LPQvtCy0L4t0L_RgNC-0LzRi9GI0LvQtdC90L3QsNGPINC_0LDQu9Cw0YLQsCDQotGD0YDQutC80LXQvdC40YHRgtCw0L3QsA!5e0!3m2!1sru!2s!4v1713164734635!5m2!1sru!2s"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </section>
    </PageLayout>
  );
}
