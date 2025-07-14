import { FC, MouseEvent, useRef, useState } from "react";
import { cn, useTranslate } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  className?: string;
  title: string;
  titleEn: string;
  titleClassName?: string;
  content: {
    title: string;
    titleEn: string;
    link: string;
  }[];
}

export const HoverMenu: FC<Props> = ({
  className,
  title,
  content,
  titleClassName,
  titleEn,
}) => {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [active, setActive] = useState(false);

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const relatedTarget = e.relatedTarget as Node | null;

    if (
      !triggerRef.current?.contains(relatedTarget as Node) &&
      !contentRef.current?.contains(relatedTarget as Node)
    ) {
      setActive(false);
    }
  };

  return (
    <div className={cn("relative", className)}>
      <div
        ref={triggerRef}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className={cn(
          "text-sm text-text-secondary cursor-pointer font-bold flex items-center gap-2",
          titleClassName
        )}
      >
        {useTranslate(title, titleEn)}
        <ChevronDown size={14} />
      </div>

      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={active ? { opacity: 1, pointerEvents: "auto" } : {}}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className={cn(
          "py-1 rounded-[8px] top-5 left-0 flex flex-col bg-surface-brand absolute z-50 text-text-on-brand-secondary w-[184px]",
          className
        )}
      >
        {content.map((item) => (
          <Link key={item.title} to={item.link} className="px-6 py-3">
            {useTranslate(item.title, item.titleEn)}
          </Link>
        ))}
      </motion.div>
    </div>
  );
};
