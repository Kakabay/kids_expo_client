import { cn } from "@/lib/utils";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

interface IProps {
  title: string;
  published_at: string;
  path: string;
  id: number;
  grid?: boolean;
  page?: boolean;
}

export const NewsCard = ({ path, published_at, grid, id, title }: IProps) => {
  const small = useMediaQuery("(min-width: 630px)");

  return grid || !small ? (
    <Link
      to={`/news/${id}`}
      className="border-[1px] border-gray/30 cursor-pointer"
    >
      <img
        width={430}
        height={160}
        src={path}
        alt="событие"
        className="h-[220px] w-full object-cover"
      />
      <div className="px-[16px] py-[25px] sm:p-[25px]">
        <p className="text-extraSm text-gray4 mb-[10px]">{published_at}</p>
        <p className="font-bold text-[16px] leading-[125%] w-full max-w-[355px] news-text">
          {title}
        </p>
      </div>
    </Link>
  ) : (
    <>
      <Link to={`/news/${id}`} className="flex">
        <img
          src={path}
          alt=""
          className="object-cover flex-[0_0_300px] h-[160px]"
        />
        <div className="p-6 w-full border-y-[1px] border-r-[1px] border-y-gray/30 border-r-gray/30">
          <div className="text-gray4 mb-[10px]">{published_at}</div>
          <div className="font-bold leading-[125%] text-[16px]">{title}</div>
        </div>
      </Link>
    </>
  );
};

interface IProps {
  className?: string;
  title: string;
  published_at: string;
  path: string;
  id: number;
  grid?: boolean;
  page?: boolean;
}

export const HomeNewsCard = ({
  path,
  published_at,
  id,
  title,
  className,
}: IProps) => {
  const mobile = useMediaQuery("(min-width: 500px)");

  return (
    <Link
      to={`/news/${id}`}
      className={cn("bg-white drop-shadow-lg rounded", className)}
    >
      <img
        src={path}
        alt="news_image"
        width={mobile ? 290 : 500}
        height={220}
        className="h-[220px] w-full object-cover object-center"
      />
      <div
        className={clsx("p-4", {
          "max-w-[250px]": mobile,
          "max-w-[500px]": !mobile,
        })}
      >
        <div className="text-[#8D9399] ьи-2 text-[13px]">{published_at}</div>
        <div className="leading-[125%] news-text font-bold">{title}</div>
      </div>
    </Link>
  );
};
