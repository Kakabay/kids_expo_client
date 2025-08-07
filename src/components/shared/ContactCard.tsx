import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface Props {
  className?: string;
  suptitle: string;
  title: string;
  image: ReactNode;
}

export const ContactCard: FC<Props> = ({
  className,
  suptitle,
  title,
  image,
}) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="flex items-center justify-center size-16 rounded-[2px] p-3">
        {image}
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-sm text-[#454545]">{suptitle}</h4>
        <h5 className=" font-bold"> {title}</h5>
      </div>
    </div>
  );
};
