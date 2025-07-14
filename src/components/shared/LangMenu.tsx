import { FC, MouseEvent, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { LangStore, useLang } from "@/services/zustand/zusLang";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  className?: string;
  light?: boolean;
}

export const langs = [
  {
    title: "Русский",
    localization: "ru",
  },
  {
    title: "English",
    localization: "en",
  },
];

export const LangMenu: FC<Props> = ({ className }) => {
  const lang = useLang((state) => state.activeLang.localization);
  const setLang = useLang((state) => state.setLang);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleEnter = () => setIsOpen(true);

  const handleLeavae = (e: MouseEvent) => {
    const relatedTarget = e.relatedTarget as Node | null;

    if (
      !menuRef.current?.contains(relatedTarget as Node) &&
      !triggerRef.current?.contains(relatedTarget as Node)
    ) {
      setIsOpen(false);
    }
  };

  const onLang = (lang: LangStore["activeLang"]) => {
    setLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative ">
      <h4
        ref={triggerRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeavae}
        className={cn(
          "flex text-white items-center gap-2 cursor-pointer",
          className
        )}
      >
        <img src={lang === "ru" ? "/ru-flag.svg" : "/en-flag.svg"} alt="" />
        {lang === "ru" ? "Ру" : "En"}
        <ChevronDown />
      </h4>

      <motion.div
        ref={menuRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeavae}
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={isOpen ? { opacity: 1, pointerEvents: "all" } : {}}
        className="py-1 rounded-[8px] top-6 left-0 flex flex-col bg-surface-brand  absolute z-50 text-text-on-brand-secondary w-[140px]"
      >
        {langs
          .filter((item) => item.localization !== lang)
          .map((item, i) => (
            <div
              onClick={() => onLang(item)}
              key={i}
              className="flex gap-3 py-3 px-6 items-center cursor-pointer"
            >
              <img
                src={
                  item.localization === "ru" ? "/ru-flag.svg" : "/en-flag.svg"
                }
                alt="flag"
              />
              <h5>{item.title}</h5>
            </div>
          ))}
      </motion.div>
    </div>
  );
};
