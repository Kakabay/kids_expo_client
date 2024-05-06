import clsx from 'clsx';

export const Button = ({ text, news }: { text: string; news?: boolean }) => {
  return (
    <div
      className={clsx(
        'cursor-pointer w-fit mx-auto py-[17px] px-[50px] text-[14px] text-purple border-[1px] border-purple rounded-sm hover:text-white hover:bg-purple transition-all',
        { 'mt-10': news },
      )}>
      {text}
    </div>
  );
};
