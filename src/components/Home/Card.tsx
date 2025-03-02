import clsx from "clsx";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
  path: string;
  rect?: boolean;
  link: string;
}

export const Card = ({ title, path, link, rect = false }: IProps) => {
  return link.includes("https") ? (
    <Link
      target="_blank"
      // href={docPath?.doc_path ? docPath.doc_path : ''}
      to={link}
      className={clsx(
        "bg-white rounded-[10px] w-full drop-shadow-cardShadow hover:shadow-md transition-all",
        {
          "px-5 pt-5 h-[156px] pb-[50px] gap-[10px] flex flex-col items-center bg-white rounded-[10px] drop-shadow-cardShadow":
            !rect,
          "px-10 flex items-center gap-5 w-[350px] py-5 drop-shadow-rectCardShadow":
            rect,
        }
      )}
    >
      <img src={path} alt="" />
      <h3
        className={clsx("leading-[130%]", {
          "text-[16px] font-normal text-black1": rect,
          "text-center text-[24px] font-light text-black2": !rect,
        })}
      >
        {title}
      </h3>
    </Link>
  ) : (
    <Link
      to={link}
      className={clsx(
        "bg-white rounded-[10px] hover:shadow-md transition-all drop-shadow-cardShadow",
        {
          "px-5 pt-5 h-[156px] pb-[50px] gap-[10px] flex flex-col items-center bg-white rounded-[10px] drop-shadow-cardShadow":
            !rect,
          "px-10 flex items-center gap-5  py-5 drop-shadow-rectCardShadow":
            rect,
        }
      )}
    >
      <img src={path} alt="" />
      <h3
        className={clsx("leading-[130%]", {
          "text-[16px] font-normal text-black1": rect,
          "text-center text-[24px] font-light text-black2": !rect,
        })}
      >
        {title}
      </h3>
    </Link>
  );
};
