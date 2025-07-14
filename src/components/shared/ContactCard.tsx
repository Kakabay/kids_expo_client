import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
  suptitle: string;
  title: string;
  image: string;
}

export const ContactCard: FC<Props> = ({
  className,
  suptitle,
  title,
  image,
}) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="bg-secondary_container size-16 rounded-[2px] p-3">
        <img src={image} alt="contact icon" className="size-full" />
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-sm text-[#454545]">{suptitle}</h4>
        <h5 className=" font-bold">{title}</h5>
      </div>
    </div>
  );
};
