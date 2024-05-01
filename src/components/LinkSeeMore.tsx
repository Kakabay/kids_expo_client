import { Link } from 'react-router-dom';

interface IProps {
  path: string;
}

export const LinkSeeMore = ({ path }: IProps) => {
  return (
    <Link to={path} className="flex items-center text-[14px] gap-[10px] text-orange">
      <p>Узнать больше</p>
      <img src="../assets/icons/link-arrow.png" alt="arrow" />
    </Link>
  );
};
