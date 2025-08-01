import { FC } from "react";
import { cn, useTranslate } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { mainButtons, stats } from "@/constantas";
import { AboutCard } from "./AboutCard";
import { Download } from "lucide-react";
import { useLang } from "@/services/zustand/zusLang";

interface Props {
  className?: string;
}

export const HomeAbout: FC<Props> = ({ className }) => {
  const lang = useLang((state) => state.activeLang.localization);
  const [emblaRef] = useEmblaCarousel();

  const title = useTranslate(
    "Изучите отчет Kids Expo 2024!",
    "Explore the Kids Expo 2024 Report!"
  );
  const text = useTranslate(
    "Отчет Kids Expo 2024 – одного из крупнейшего мероприятия для индустрии детских товаров иразвлечений. В нем представлен анализ посещаемости, данные о странах-участниках, оценка удовлетворенности гостей, а также ключевые тренды, аналитика рынка, инсайты отэкспертов, которые формируют будущее детской индустрии.",
    "The Kids Expo 2024 Report covers one of the largest events in thechildren's products and entertainment industry. It includes an analysis of attendance, data on participating countries, visitor satisfaction assessment,as well as key trends, market analytics, and expert insights shaping the future of the children's industry."
  );

  const button = useTranslate("Скачать", "Download");

  const link = useTranslate(
    "https://editor.turkmenexpo.com/storage/app/media/report/ReportKidsExpo2024_ru.pdf",
    ""
  );

  return (
    <section
      className={cn("pt-10 md:pb-24 pb-14 bg-surface-primary", className)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center container gap-6 mb-20">
        {mainButtons.map((item) => (
          <Link
            target={item.link.includes("https") ? "_blank" : ""}
            key={item.title}
            to={item.link}
            className="bg-interactive-background-primary text-white h-12 w-full flex items-center justify-center rounded-sm font-bold"
          >
            {lang === "ru" ? item.title : item.titleEn}
          </Link>
        ))}
      </div>

      <div className="flex flex-col container gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <h2 className="h2 font-bold text-left">{title}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: text ? text : "" }}
              className="md:text-base flex flex-col gap-6 text-sm normal text-left text-[#454545]"
            />

            <div className="flex w-full gap-8">
              <Link to={link ?? ""} target="_blank" className="w-fit">
                <Button variant={"outline"} className="flex items-center gap-2">
                  <Download size={14} /> {button}
                </Button>
              </Link>
            </div>
          </div>

          <video
            src="https://editor.turkmenexpo.com/storage/app/media/video/KidsExpo%202024_%20Turkmenistan.mp4"
            muted
            controls
            autoPlay
            loop
            className="w-full h-auto"
          />
        </div>

        <div ref={emblaRef} className="embla overflow-hidden">
          <div className="flex embla__container items-center gap-6">
            {stats.map((item) => (
              <AboutCard
                key={item.title}
                {...item}
                className="embla__slide flex-[0_0_288px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
