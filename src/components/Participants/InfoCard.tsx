import clsx from 'clsx';

export const InfoCard = ({
  orang,
  header,
  footer,
}: {
  orang?: boolean;
  header: string;
  footer: string;
}) => {
  return (
    <div className="leading-[120%] text-center rounded-sm drop-shadow-participantsCardShadow">
      <div
        className={clsx('py-[10px] text-white text-[24px] leading-[135%] font-medium', {
          'bg-[#ED5417]': orang,
          'bg-purple': !orang,
        })}>
        {header}
      </div>
      <div className="py-[10px] flex items-center gap-[10px]">
        <img src="/assets/icons/calendar.svg" alt="calendar" />
        <div className="text-[20px] font-medium">{footer}</div>
      </div>
    </div>
  );
};
