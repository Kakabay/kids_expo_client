import { Link } from "react-router-dom";

interface IProps {
  img: string;
  date: string;
  grid: boolean;
  id: string;
  title: string;
}

export const NewsCard = ({ date, img, title, id, grid }: IProps) => {
  return grid ? (
    <Link
      to={`/news/${id}`}
      className="border-[1px] border-navyBlue cursor-pointer"
    >
      <img
        width={430}
        height={210}
        src={""}
        alt="событие"
        className="h-[210px] w-full object-cover"
      />
      <div className="px-[16px] py-[25px] sm:p-[25px]">
        <p className="text-extraSm text-gray4 mb-[10px]">{date}</p>
        <p className="font-bold text-[16px] leading-[125%] w-full max-w-[355px]">
          {title}
        </p>
      </div>
    </Link>
  ) : (
    <>
      <Link
        to={`/news/${id}`}
        className="block sm:hidden border-[1px] border-navyBlue cursor-pointer"
      >
        <img
          width={700}
          height={156}
          src={img}
          alt="событие"
          className="w-[700px] h-full object-cover"
        />
        <div className="px-[16px] py-[25px] sm:p-[25px]">
          <p className="text-extraSm text-gray4 mb-[10px]">{date}</p>
          <p className="font-bold text-[16px] leading-[125%] w-full max-w-[355px]">
            {title}
          </p>
        </div>
      </Link>

      <Link
        to={`/news/${id}`}
        className="hidden sm:block border-[1px] border-navyBlue cursor-pointer"
      >
        <div className="flex flex-col sm:flex-row">
          <img
            className="hidden md:block h-[156px] w-[500px] object-cover"
            height={156}
            width={500}
            src={""}
            alt="событие"
          />
          <img
            className="md:hidden w-[400px] h-[156px] object-cover"
            width={400}
            height={95}
            src={""}
            alt="событие"
          />
          <div className="p-[25px]">
            <p className="text-extraSm text-gray4 mb-[10px]">{date}</p>
            <p className="font-bold text-[14px] md:text-[16px] leading-[125%] w-full max-w-[483px]">
              {title}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};
