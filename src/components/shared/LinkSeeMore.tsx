import { Link } from "react-router-dom";

interface IProps {
  path: string;
  text: string;
}

export const LinkSeeMore = ({ path, text }: IProps) => {
  return path ? (
    <Link
      target="_blank"
      to={path}
      className="flex items-center text-[14px] gap-[10px] text-orange"
    >
      <p>{text}</p>
      <img src="../assets/icons/link-arrow.png" alt="arrow" />
    </Link>
  ) : (
    <div className="flex items-center text-[14px] gap-[10px] text-orange">
      <p>{text}</p>
      <img src="../assets/icons/link-arrow.png" alt="arrow" />
    </div>
  );
};
