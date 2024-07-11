import clsx from "clsx";

export const GetTicketBtn = ({
  href,
  className,
}: {
  href: string;
  className?: string;
}) => {
  return (
    <a
      target="_blank"
      href={href}
      className={clsx(
        className,
        "bg-[#ED5417] transition-all duration-300 text-white p-4 rounded-sm cursor-pointer text-[14px] font-medium flex items-center gap-1 leading-none"
      )}
    >
      <div className="">Получить билет</div>
      <img src="/assets/icons/header/outward.svg" alt="" />
    </a>
  );
};
