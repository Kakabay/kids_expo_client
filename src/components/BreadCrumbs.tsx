import { Link } from 'react-router-dom';

export const BreadCrumbs = ({
  second,
  third,
  path,
}: {
  second: string;
  third?: string;
  path?: string;
  path2?: string;
  cursor?: boolean;
}) => {
  return (
    <div className="text-[12px] text-gray4 flex items-center mob:mb-6 mb-5">
      <Link to={'/'}>Главная</Link>

      <p className="px-1">/</p>

      {third ? <Link to={path ? path : ''}>{second}</Link> : <p>{second}</p>}

      {third && <p className="px-1">/</p>}

      {third && <p>{third}</p>}
    </div>
  );
};
