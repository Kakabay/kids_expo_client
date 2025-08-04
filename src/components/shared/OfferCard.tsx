import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
  text: string;
  className?: string;
  title: string;
  img: string;
  link: string;
}

export const OfferCard: FC<Props> = ({ className, title, text, img, link }) => {
  const { t } = useTranslation("home");

  return (
    <article
      className={cn(
        "md:px-8 md:py-6 p-4 relative overflow-hidden h-[296px] md:w-full w-[300px] text-on_primary",
        className
      )}
    >
      <div className="absolute size-full z-10 top-0 left-0 bg-gradient-to-r from-25 to-[#8755B8]/60 from-[#7545A4]" />
      <img
        src={img}
        className="absolute size-full top-0 right-0 object-cover"
      />

      <div className="relative z-20 h-full">
        <div className="text-white">
          <h4 className="md:text-2xl font-bold text-lg mb-6  z-20">{title}</h4>
          <p className="md:text-base text-sm normal max-w-[360px] z-20">
            {text}
          </p>
        </div>

        <Link className="absolute bottom-0 left-0" target="_blank" to={link}>
          <Button
            className="text-sm flex items-center gap-2 text-white px-0 h-fit py-0 z-20"
            variant={"link"}
          >
            <Download size={14} />
            {t("download")}
          </Button>
        </Link>
      </div>
    </article>
  );
};
