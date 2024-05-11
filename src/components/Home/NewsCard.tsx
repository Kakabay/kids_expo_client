import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface IProps {
  title: string;
  published_at: string;
  path: string;
  id: number;
  grid?: boolean;
}

export const NewsCard = ({ title, published_at, path, id }: IProps) => {
  return (
    <div
      className={clsx('rounded-sm w-full transition-all hover:hover-shadow cursor-pointer h-full')}>
      <Link to={`/news/:${id}`} className={clsx('h-full')}>
        {/* Aspect ration 1.8:1 */}
        <img src={path} alt="photo" className="h-[160px] w-full object-cover mb-[25px]" />
        <div className={clsx('')}>
          <p className="font-bold leading-[125%] text-[16px] news-text mb-[10px]">{title}</p>
          <p className={clsx('text-[13px] leading-[125%] text-gray news-text', {})}>
            {published_at}
          </p>
        </div>
      </Link>
    </div>
  );
};

interface IProps {
  title: string;
  published_at: string;
  path: string;
  id: number;
  grid?: boolean;
}

export const NewsCardFlex = ({ title, published_at, path, id }: IProps) => {
  return (
    <div
      className={clsx('rounded-sm w-full transition-all hover:hover-shadow cursor-pointer h-full')}>
      <Link to={`/news/:${id}`} className={clsx('h-full grid grid-cols-2')}>
        {/* Aspect ration 1.8:1 */}
        <img src={path} alt="photo" className="h-[160px] w-[400px] object-cover mb-[25px]" />
        <div className="pl-4 py-6">
          <p className="font-bold leading-[125%] text-[16px] news-text mb-[10px]">{title}</p>
          <p className={clsx('text-[13px] leading-[125%] text-gray news-text')}>{published_at}</p>
        </div>
      </Link>
    </div>
  );
};
