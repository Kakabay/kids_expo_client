import { cn, useTranslate } from "@/lib/utils";
import { FC } from "react";

interface Props {
  title: string;
  subtitleEn: string;
  subtitle: string;
  className?: string;
}

export const AboutCard: FC<Props> = ({
  className,
  title,
  subtitle,
  subtitleEn,
}) => {
  return (
    <article
      className={cn(
        "p-4 rounded-sm relative bg-surface-muted h-[126px] w-full overflow-hidden",
        className
      )}
    >
      <img
        src="/assets/icons/stats-bg.svg"
        className="absolute top-2 right-0"
      />
      <h2 className="text-text-accent-alt font-bold text-[32px] semibold leading-[130%] mb-2">
        {title}
      </h2>

      <h4 className="text-on_surface normal text-base">
        {useTranslate(subtitle, subtitleEn)}
      </h4>
    </article>
  );
};
