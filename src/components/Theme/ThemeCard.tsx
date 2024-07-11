export const ThemeCard = ({ ...rest }: { name: string; path: string }) => {
  const { name, path } = rest;

  return (
    <div className="py-[15px] border-t-[1px] border-t-[#DADADA]">
      <div className="flex flex-col sm:flex-row items-center gap-[10px]">
        <img src={path} alt="icon" className="w-[80px] sm:w-[52px] h-full" />
        <h3 className="text-purple text-center sm:text-left leading-[135%] text-[16px] sm:text-[21px] font-semibold">
          {name}
        </h3>
      </div>
    </div>
  );
};

export const ThemeCardAccordion = ({
  ...rest
}: {
  name: string;
  path: string;
}) => {
  const { name, path } = rest;

  return (
    <div className="border-t-[1px] py-4 border-t-[#DADADA]">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img src={path} alt="icon" className="w-20 sm:w-[52px] h-full" />
          <h3 className="text-purple text-center sm:text-left leading-[135%] text-[16px] sm:text-[21px] font-semibold">
            {name}
          </h3>
        </div>

        <img src="/assets/icons/faq/select-arrow.svg" alt="arrow" />
      </div>
    </div>
  );
};
