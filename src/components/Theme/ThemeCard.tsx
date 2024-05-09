import { useLang } from '../../services/zustand/zusLang';

export const ThemeCard = ({
  title,
  titleEn,
  path,
}: {
  title: string;
  titleEn: string;
  path: string;
}) => {
  const localization = useLang((state) => state.activeLang.localization);

  return (
    <div className="py-[15px] border-t-[1px] border-t-[#DADADA]">
      <div className="flex items-center gap-[10px]">
        <img src={path} alt="" />
        <h3 className="text-purple leading-[135%] text-[21px] font-semibold">
          {localization === 'en' ? titleEn : title}
        </h3>
      </div>
    </div>
  );
};
