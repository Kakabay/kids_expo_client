import clsx from "clsx";

export const InfoCard = ({
  orang,
  title,
  date,
}: {
  orang?: boolean;
  title: string;
  date?: string;
}) => {
  return (
    <div className="leading-[120%] bg-white text-center rounded-sm drop-shadow-participantsCardShadow">
      <div
        className={clsx(
          "py-[10px] text-white text-[24px] leading-[135%] font-medium rounded-t-sm",
          {
            "bg-[#ED5417] row-span-2": orang,
            "bg-purple": !orang,
          }
        )}
      >
        {title}
      </div>

      <div className="py-[14px] text-center justify-center flex items-center gap-[10px]">
        <img src="/assets/icons/calendar.svg" alt="calendar" />
        <div className="text-[20px] font-medium">{date}</div>
      </div>
    </div>
  );
};
