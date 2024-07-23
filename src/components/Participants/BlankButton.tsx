import clsx from 'clsx';

export const BlankButton = ({ path, className }: { path: string; className?: string }) => {
  return (
    <a
      href={path}
      className={clsx(
        'flex items-center bg-[##F5F0F9] rounded-[5px] justify-center gap-1 py-2 border-[#E7DBF0] border-[1px]',
        className,
      )}>
      <img src="/assets/icons/participants-services/file-extension.svg" alt="file" />
      <div className="leading-[150%] -tracking-[2%]">Скачать бланк заказа</div>
    </a>
  );
};
