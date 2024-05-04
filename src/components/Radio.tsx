import clsx from 'clsx';
import { useFaq } from '../zustand/zusFaq';

interface IProps {
  name: string;
  active?: boolean;
  changeRadio?: (name: string) => void;
}

export const Radio = ({ name, active }: IProps) => {
  const filter = useFaq((state) => state.filter);

  return (
    <div onClick={() => filter(name)} className="flex items-center gap-[10px] cursor-pointer">
      <div className="flex items-center gap-[10px]">
        <div className="border-[1px] h-3 w-3 p-[2px] rounded-full border-black1">
          <div
            className={clsx('bg-purple transition-all rounded-full opacity-0 w-full h-full', {
              'opacity-100': active,
            })}
          />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
};
