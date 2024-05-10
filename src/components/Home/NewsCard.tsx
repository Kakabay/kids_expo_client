import clsx from "clsx";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
  published_at: string;
  path: string;
  id: number;
  grid?: boolean;
}

export const NewsCard = ({
  title,
  published_at,
  path,
  id,
  grid = false,
}: IProps) => {
  return (
    <div
      className={clsx(
        "rounded-sm w-full transition-all hover:hover-shadow cursor-pointer h-full",
        {
          "mx-auto": grid,
        }
      )}
    >
      <Link
        to={""}
        className={clsx("h-full", {
          "flex w-full": !grid,
        })}
      >
        {/* Aspect ration 1.8:1 */}
        <img
          src={path}
          alt="photo"
          className="h-[160px] w-full object-cover mb-[25px]"
        />
        <div
          className={clsx("", {
            "p-[25px] w-full": !grid,
          })}
        >
          <p className="font-bold leading-[125%] text-[16px] news-text mb-[10px]">
            {title}
          </p>
          <p
            className={clsx(
              "text-[13px] leading-[125%] text-gray news-text",
              {}
            )}
          >
            {published_at}
          </p>
        </div>
      </Link>
    </div>
  );
};
