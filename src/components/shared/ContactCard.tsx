import { cn, useTranslate } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
  suptitle: string;
  suptitleEn: string;
  title: string;
  titleEn: string;
  image: string;
}

export const ContactCard: FC<Props> = ({
  className,
  suptitle,
  suptitleEn,
  title,
  titleEn,
  image,
}) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="bg-secondary_container size-16 rounded-[2px] p-3">
        <img src={image} alt="contact icon" className="size-full" />
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-sm text-[#454545]">
          {useTranslate(suptitle, suptitleEn)}
        </h4>
        <h5 className=" font-bold"> {useTranslate(title, titleEn)}</h5>
      </div>
    </div>
  );
};
