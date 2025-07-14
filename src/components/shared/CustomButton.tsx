import clsx from 'clsx';

export const CustomButton = ({
  text,
  news,
  little,
  className,
}: {
  text: string;
  className?: string;
  news?: boolean;
  little?: boolean;
}) => {
  return (
    <div
      className={clsx(
        className,
        'cursor-pointer w-fit font-medium mx-auto py-[17px] text-[14px] text-purple border-[1px] border-purple rounded-sm hover:text-white hover:bg-purple transition-all',
        {
          'mt-10': news,
          'px-[16px]': little,
          'px-[50px]': !little,
        },
      )}>
      {text}
    </div>
  );
};
