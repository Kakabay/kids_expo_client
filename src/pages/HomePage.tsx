import { Card } from "../components/Home/Card";
import { LinkSeeMore } from "../components/ui/LinkSeeMore";
import { cardsData, cardsRectData } from "../database/home.data";
import { Slider } from "../components/Home/Slider";
import NewsSection from "../components/Home/NewsSection";
import { useLang } from "../services/zustand/zusLang";
import { useEffect } from "react";
import { useGetEn } from "../hooks/language/useGetEn";
import { PartnersSection } from "../components/Home/PartnersSection";
import { Title } from "@/components/ui/Title";

export default function HomePage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const localization = useLang((state) => state.activeLang.localization);

  const titleRu = "Изучите отчет Kids Expo 2024!";

  const pRu = `
  Отчет Kids Expo 2024
  – одного из крупнейшего мероприятия для индустрии детских товаров иразвлечений. В нем представлен анализ посещаемости, данные о
  странах-участниках, оценка удовлетворенности гостей, а также ключевые тренды, аналитика рынка, инсайты отэкспертов, которые формируют будущее детской индустрии.  `;

  const titleEn = "Explore the Kids Expo 2024 Report!";
  const pEn = `
  The
  Kids Expo 2024 Report covers one of the largest events in thechildren's products and entertainment industry. It includes an analysis
  of attendance, data on participating countries, visitor satisfaction assessment,as well as key trends, market analytics, and expert insights
  shaping the future of the children's industry.
  `;

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

          <div className="flex flex-col-reverse gap-[30px]">
            <div className="grid tab:grid-cols-3 grid-cols-1 gap-6">
              {cardsRectData
                .filter((item) => (localization === "en" ? item.en : !item.en))
                .map((item) => (
                  <Card {...item} rect key={item.path} />
                ))}
            </div>

            <div className="flex flex-col-reverse lg:flex-row justify-between  gap-6">
              <div>
                <Title title={useGetEn(titleEn, titleRu)} className="mb-6" />
                <p className="sm-[16px] md:text-[20px] leading-[130%] font-light mb-8">
                  {useGetEn(pEn, pRu)}
                </p>
                <LinkSeeMore
                  text={useGetEn("Download", "Скачать")}
                  path="/exhibition-about"
                />
              </div>

              <video
                controls
                autoPlay
                loop
                muted
                src="https://editor.turkmenexpo.com/storage/app/media/video/KidsExpo%202024_%20Turkmenistan.mp4"
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
