import { cn, useTranslate } from "@/lib/utils";
import { FC } from "react";

interface Props {
  image: string;
  title: string;
  titleEn: string;
  className?: string;
  iconClassName?: string;
}

export const ThemeCard: FC<Props> = ({
  className,
  image,
  title,
  titleEn,
  iconClassName,
}) => {
  return (
    <article
      className={cn(
        "bg-[#EEEDF4] relative transition-all md:px-6 px-2 md:h-[224px] h-[124px]",
        className
      )}
    >
      <div className="bg-[#EEEDF4] z-20 size-full absolute top-0 left-0" />
      <div className="bg-surface-brand size-full absolute z-10 top-2.5 left-2.5" />
      <div
        className={cn(
          "md:size-[84px] size-12 bg-white p-3 relative z-30",
          iconClassName
        )}
      >
        <img src={image} alt="theme icon" />
      </div>
      <h3 className="md:mt-6 mt-2 md:text-xl z-30 !leading-[120%] text-sm font-bold relative">
        {useTranslate(title, titleEn)}
      </h3>
    </article>
  );
};
