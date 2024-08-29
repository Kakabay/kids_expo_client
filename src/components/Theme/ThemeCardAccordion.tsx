import { useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

export const ThemeCardAccordion = ({
  ...rest
}: {
  title: string;
  imageUrl: string;
  content: string;
}) => {
  const { title, imageUrl, content } = rest;
  const [openTitles, setOpenTitles] = useState<string[]>([]);

  const onTitle = (name: string) => {
    if (openTitles.includes(name)) {
      setOpenTitles(openTitles.filter((item) => item !== name));
    } else {
      setOpenTitles((prev) => [...prev, name]);
    }
  };

  return (
    <>
      <div className="">
        <div
          onClick={() => onTitle(title)}
          className="flex items-center cursor-pointer justify-between border-y-[1px] py-4 border-y-[#DADADA]"
        >
          <div className="flex justify-between items-center gap-2.5 ">
            <img
              src={imageUrl}
              alt="icon"
              className="w-10 sm:w-[52px] h-full"
            />
            <h3 className="text-purple text-center sm:text-left leading-[135%] text-[16px] sm:text-[21px] font-semibold">
              {title}
            </h3>
          </div>
          <img
            src="/assets/icons/faq/select-arrow.svg"
            alt="arrow"
            className={clsx("transition-all ", {
              "rotate-180": openTitles.includes(title || ""),
            })}
          />
        </div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0, marginTop: 0 }}
        animate={
          openTitles.includes(title || "")
            ? { height: "100%", opacity: 1, marginTop: 24 }
            : {}
        }
        className="select-inner overflow-hidden"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
};
