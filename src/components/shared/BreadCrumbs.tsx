import { useTranslate } from "@/lib/utils";
import { Link } from "react-router-dom";

export const BreadCrumbs = ({
  second,
  third,
  path,
}: {
  second: string | boolean;
  third?: string | boolean;
  path?: string;
  path2?: string;
  cursor?: boolean;
}) => {
  return (
    <div className="text-[12px] text-[#8C8C8C] flex items-center mob:mb-6 mb-5">
      <Link to={"/"}>{useTranslate("Главная", "Home")}</Link>

      <p className="px-1">/</p>

      {third ? (
        <Link to={path ? path : ""}>{second as string}</Link>
      ) : (
        <p>{second as string}</p>
      )}

      {third && <p className="px-1">/</p>}

      {third && <p>{third as string}</p>}
    </div>
  );
};
