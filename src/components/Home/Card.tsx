import clsx from 'clsx';
import { useLang } from '../../services/zustand/zusLang';

interface IProps {
  title: string;
  path: string;
  rect?: boolean;
}

export const Card = ({ title, path, rect = false }: IProps) => {
  return (
    <div
      className={clsx('bg-white rounded-[10px] drop-shadow-cardShadow', {
        'px-5 pt-5 h-[156px] pb-[50px] gap-[10px] flex flex-col items-center bg-white rounded-[10px] drop-shadow-cardShadow':
          !rect,
        'px-10 flex items-center gap-5 w-[350px] py-5': rect,
      })}>
      <img src={path} alt="" />
      <h3
        className={clsx('leading-[130%]', {
          'text-[16px] font-normal text-black1': rect,
          'text-center text-[24px] font-light text-black2': !rect,
        })}>
        {title}
      </h3>
    </div>
  );
};
