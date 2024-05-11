import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface IProps {
  title: string;
  content: string;
}

export const Select = ({ title, content }: IProps) => {
  const [openTitles, setOpenTitles] = useState<string[]>([]);

  const onTitle = (name: string) => {
    if (openTitles.includes(name)) {
      setOpenTitles(openTitles.filter((item) => item !== name));
    } else {
      setOpenTitles((prev) => [...prev, name]);
    }
  };

  return (
    <div className="w-full">
      <motion.div
        onClick={() => onTitle(title)}
        className={clsx(
          'w-full flex items-center justify-between border-y-[1px] border-y-black2 cursor-pointer',
        )}>
        <h2 className="sm:text-[21px] text-[16px] sm:leading-[100%] leading-[120%] sm:font-semibold font-[400] py-4 sm:py-5">
          {title}
        </h2>
        <img
          src={'/assets/icons/faq/select-arrow.svg'}
          alt="arrow"
          className={clsx('rotate-[180deg] transition-all gap-4', {
            'rotate-[360deg]': openTitles.includes(title || ''),
          })}
        />
      </motion.div>
      <div className="flex flex-col w-full max-w-[1000px]">
        <AnimatePresence>
          {openTitles.includes(title || '') && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="select-inner py-10"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
