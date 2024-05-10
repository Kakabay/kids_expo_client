import clsx from "clsx";
import { useLang } from "../../services/zustand/zusLang";

export const InfoCard = ({
  orang,
  header,
  headerEn,
  footerEn,
  footer,
}: {
  orang?: boolean;
  header: string;
  headerEn: string;
  footer: string;
  footerEn: string;
}) => {
  const localization = useLang((state) => state.activeLang.localization);

  return (
    <div className="leading-[120%] bg-white text-center rounded-sm drop-shadow-participantsCardShadow">
      <div
        className={clsx(
          "py-[10px] text-white text-[24px] leading-[135%] font-medium rounded-t-sm",
          {
            "bg-[#ED5417]": orang,
            "bg-purple": !orang,
          }
        )}
      >
        {localization === "en" ? headerEn : header}
      </div>

      <div className="py-[14px] text-center justify-center flex items-center gap-[10px]">
        <img src="/assets/icons/calendar.svg" alt="calendar" />
        <div className="text-[20px] font-medium">
          {localization === "en" ? footerEn : footer}
        </div>
      </div>
    </div>
  );
};
