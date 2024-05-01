import { Link } from 'react-router-dom';

interface IProps {
  img: string;
  date: string;
  text: string;
  mobile?: boolean;
}

export const NewsCard = ({ img, text, date }: IProps) => {
  return (
    <div className="bg-bgWhite rounded-sm mx-auto sm:max-w-[290px] w-full transition-all hover:hover-shadow cursor-pointer h-full">
      <Link to={''} className="h-full">
        {/* Aspect ration 1.8:1 */}
        <img
          src={img}
          // width={mobile ? 620 : 290}
          // height={mobile ? 400 : 160}
          alt="photo"
          className="h-[160px] w-full object-cover mb-[25px]"
        />
        <div className=" h-full sm:h-[137px]">
          <p className="font-bold leading-[125%] text-[16px] news-text mb-[10px]">{text}</p>
          <p className="text-extraSm leading-[125%] text-gray">{date}</p>
        </div>
      </Link>
    </div>
  );
};
