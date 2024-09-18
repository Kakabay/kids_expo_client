import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';

interface IProps {
  title: string;
  published_at: string;
  path: string;
  id: number;
  grid?: boolean;
  page?: boolean;
}

export const NewsCard = ({ path, published_at, grid, id, title }: IProps) => {
  const small = useMediaQuery('(min-width: 630px)');

  return grid || !small ? (
    <Link to={`/news/${id}`} className="border-[1px] border-gray/30 cursor-pointer">
      <img
        width={430}
        height={160}
        src={path}
        alt="событие"
        className="h-[160px] w-full object-cover"
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
        <img src={path} alt="" className="object-cover flex-[0_0_300px] h-[160px]" />
        <div className="p-6 w-full border-y-[1px] border-r-[1px] border-y-gray/30 border-r-gray/30">
          <div className="text-gray4 mb-[10px]">{published_at}</div>
          <div className="font-bold leading-[125%] text-[16px]">{title}</div>
        </div>
      </Link>
    </>
  );
};

interface IProps {
  title: string;
  published_at: string;
  path: string;
  id: number;
  grid?: boolean;
  page?: boolean;
}

export const HomeNewsCard = ({ path, published_at, id, title }: IProps) => {
  const mobile = useMediaQuery('(min-width: 500px)');

  return (
    <Link to={`/news/${id}`}>
      <img
        src={path}
        alt="news_image"
        width={mobile ? 290 : 500}
        height={160}
        className="h-[160px] w-full object-cover object-center"
      />
      <div
        className={clsx('py-6', {
          'max-w-[250px]': mobile,
          'w-[500px]': !mobile,
        })}>
        <div className="leading-[125%] font-medium news-text mb-[10px]">{title}</div>
        <div className="text-[#8D9399] text-[13px]">{published_at}</div>
      </div>
    </Link>
  );
};
