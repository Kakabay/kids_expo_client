import { useState } from 'react';

export const ThemeCard = ({ ...rest }: { title: string; imageUrl: string }) => {
  const { title, imageUrl } = rest;

  return (
    <div className="py-[15px] border-t-[1px] border-t-[#DADADA]">
      <div className="flex flex-col sm:flex-row items-center gap-[10px]">
        <img src={imageUrl} alt="icon" className="w-[80px] sm:w-[52px] h-full" />
        <h3 className="text-purple text-center sm:text-left leading-[135%] text-[16px] sm:text-[21px] font-semibold">
          {title}
        </h3>
      </div>
    </div>
  );
};

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
    <div
      onClick={() => onTitle(title)}
      className="border-t-[1px] py-4 flex flex-col border-t-[#DADADA]">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img src={imageUrl} alt="icon" className="w-20 sm:w-[52px] h-full" />
          <h3 className="text-purple text-center sm:text-left leading-[135%] text-[16px] sm:text-[21px] font-semibold">
            {title}
          </h3>
        </div>

        <img src="/assets/icons/faq/select-arrow.svg" alt="arrow" />
      </div>
      {openTitles.includes(title || '') && (
        <div className="select-inner" dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  );
};
