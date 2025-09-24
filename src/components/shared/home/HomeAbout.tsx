import { FC, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useOnClickOutside } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AboutCard } from "../AboutCard";

interface Props {
  className?: string;
}

export const HomeAbout: FC<Props> = ({ className }) => {
  const [emblaRef] = useEmblaCarousel();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const { t } = useTranslation("home");

  const data = t("buttons", { returnObjects: true }) as {
    name: string;
    link: string;
  }[];

  const { title, text, stats } = t("about", { returnObjects: true }) as {
    title: string;
    text: string;
    link?: string;
    stats: { name: string }[];
  };

  const titles = ["8,400 m²", "10000+", "100+", "80%"];

  useOnClickOutside(ref, () => {
    setOpen(false);
  });

  return (
    <section
      className={cn("pt-10 md:pb-24 pb-14 bg-surface-primary", className)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center container gap-6 mb-20">
        {data.map((item) => (
          <Link
            key={item.name}
            to={item.link}
            className="bg-interactive-background-primary text-white h-12 w-full flex items-center justify-center rounded-sm font-bold"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex flex-col container gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <h2 className="h2 font-bold text-left">{title}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: text }}
              className="md:text-base flex flex-col gap-6 text-sm normal text-left text-[#454545]"
            />

            <Button
              ref={ref}
              onClick={() => setOpen(!open)}
              variant={"outline"}
              className="flex flex-col gap-4 w-fit h-auto items-center overflow-hidden"
            >
              <div className="flex items-center gap-2">{t("download")}</div>

              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex items-center gap-2">
                      <Download size={14} />
                      <a
                        target="_blank"
                        href="https://editor.turkmenexpo.com/storage/app/media/report/ReportKidsExpo2024_ru.pdf"
                      >
                        2024
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      <Download size={14} />

                      <div className="cursor-default">2025</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
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
            {stats.map((item, i) => (
              <AboutCard
                title={titles[i]}
                key={item.name}
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
