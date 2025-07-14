import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const CoverLayout = ({
  title,
  children,
  className,
}: {
  className?: string;
  title: string;
  children: ReactNode;
}) => {
  return (
    <section>
      <div className="w-full h-[216px] relative flex items-center justify-center mb-16">
        <img
          src="/assets/images/cover.png"
          alt="cover"
          className="size-full absolute top-0 left-0 object-cover"
        />
        <h1 className="text-5xl font-medium relative z-10 text-white">
          {title}
        </h1>
      </div>

      <div className={cn("container mb-24", className)}>{children}</div>
    </section>
  );
};
