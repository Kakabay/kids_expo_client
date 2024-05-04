import { Link } from 'react-router-dom';

interface IProps {
  title: string;
  published_at: string;
  path: string;
}

export const NewsCard = ({ title, published_at, path }: IProps) => {
  return (
    <div className="bg-bgWhite rounded-sm mx-auto sm:max-w-[290px] w-full transition-all hover:hover-shadow cursor-pointer h-full">
      <Link to={''} className="h-full">
        {/* Aspect ration 1.8:1 */}
        <img
          src={path}
          // width={mobile ? 620 : 290}
          // height={mobile ? 400 : 160}
          alt="photo"
          className="h-[160px] w-full object-cover mb-[25px]"
        />
        <div className="">
          <p className="font-bold leading-[125%] text-[16px] news-text mb-[10px]">{title}</p>
          <p className="text-extraSm leading-[125%] text-gray news-text">{published_at}</p>
        </div>
      </Link>
    </div>
  );
};
