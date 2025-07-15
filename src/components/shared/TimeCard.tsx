import { cn, useTranslate } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
  title: string;
  date: string;
  dateEn: string;
  titleEn: string;
  bottomClassName?: string;
}

export const TimeCard: FC<Props> = ({
  className,
  title,
  date,
  dateEn,
  bottomClassName,
  titleEn,
}) => {
  return (
    <div className={cn("rounded overflow-hidden", className)}>
      <div className="bg-surface-brand text-white font-bold text-xl flex items-center h-11 px-4">
        {useTranslate(title, titleEn)}
      </div>

      <div
        className={cn(
          "h-14 bg-white font-bold semibold flex items-center text-lg px-4",
          bottomClassName
        )}
      >
        {useTranslate(date, dateEn)}
      </div>
    </div>
  );
};
