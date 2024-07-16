import clsx from "clsx";
import { Link } from "react-router-dom";
import useGetDocs from "../../hooks/participants/useGetDocs";

interface IProps {
  title: string;
  path: string;
  rect?: boolean;
  link: string;
}

export const Card = ({ title, path, link, rect = false }: IProps) => {
  const { docsData } = useGetDocs();

  const docPath = docsData?.find((item) =>
    item.doc_path.includes(
      "http://editor.turkmenexpo.com/storage/app/media/doc/Travel"
    )
  );

  return link.includes("https") ? (
    <a
      target="_blank"
      href={docPath?.doc_path ? docPath.doc_path : ""}
      className={clsx("bg-white rounded-[10px] drop-shadow-cardShadow", {
        "px-5 pt-5 h-[156px] pb-[50px] gap-[10px] flex flex-col items-center bg-white rounded-[10px] drop-shadow-cardShadow":
          !rect,
        "px-10 flex items-center gap-5 w-[350px] py-5 drop-shadow-rectCardShadow":
          rect,
      })}
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
    </a>
  ) : (
    <Link
      to={link}
      className={clsx("bg-white rounded-[10px] drop-shadow-cardShadow", {
        "px-5 pt-5 h-[156px] pb-[50px] gap-[10px] flex flex-col items-center bg-white rounded-[10px] drop-shadow-cardShadow":
          !rect,
        "px-10 flex items-center gap-5 w-[350px] py-5 drop-shadow-rectCardShadow":
          rect,
      })}
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
