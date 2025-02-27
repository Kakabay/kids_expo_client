import { useGetEn } from "@/hooks/language/useGetEn";
import clsx from "clsx";
import { Link } from "react-router-dom";

export const GetTicketBtn = ({
  href,
  className,
}: {
  href: string;
  className?: string;
}) => {
  return (
    <Link
      to={href}
      className={clsx(
        className,
        "bg-[#ED5417] transition-all duration-300 text-white p-4 rounded-sm cursor-pointer text-[14px] font-medium flex items-center gap-1 leading-none"
      )}
    >
      <div className="">{useGetEn("Register", "Зарегистрироваться")}</div>
      <img src="/assets/icons/header/outward.svg" alt="" />
    </Link>
  );
};
