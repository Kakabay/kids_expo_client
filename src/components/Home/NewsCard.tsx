import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface IProps {
  title: string;
  published_at: string;
  path: string;
  id: number;
  grid?: boolean;
}

export const NewsCard = ({ title, published_at, path, id, grid }: IProps) => {
  return (
    <div
      className={clsx('rounded-sm w-full transition-all hover:hover-shadow cursor-pointer h-full')}>
      <Link
        to={`/news/${id}`}
        className={clsx('h-full', {
          'flex flex-col sm:flex-row border-[1px] border-[#DADADA]': grid,
        })}>
        {/* Aspect ration 1.8:1 */}
        <img
          src={path}
          alt="photo"
          className={clsx('max-h-[300px] sm:h-[160px] w-full object-cover', {
            'mb-0 w-[40%]': grid,
            'mb-6': !grid,
          })}
        />
        <div
          className={clsx('w-full', {
            'w-[55%] p-6': grid,
          })}>
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
      className={clsx(
        'rounded-sm w-full border-[1px] border-[#DADADA] transition-all hover:hover-shadow cursor-pointer h-full',
      )}>
      <Link to={`/news/${id}`} className={clsx(' h-full flex')}>
        {/* Aspect ration 1.8:1 */}
        <img src={path} alt="photo" className="h-[160px] w-[40%] object-cover mb-[25px]" />
        <div className="pl-4 py-6">
          <p className="font-bold leading-[125%] text-[16px] news-text mb-[10px]">{title}</p>
          <p className={clsx('text-[13px] leading-[125%] text-gray news-text')}>{published_at}</p>
        </div>
      </Link>
    </div>
  );
};
