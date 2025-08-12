import clsx from "clsx";

interface IProps {
  id: number;
  name: string;
  activeRadio: number;
  changeRadio?: (name: string) => void;
}

export const Radio = ({ name, id, activeRadio }: IProps) => {
  return (
    <div className="flex items-center gap-[10px] cursor-pointer">
      <div className="flex items-center gap-[10px]">
        <div className="border-[1px] h-3 w-3 p-[2px] rounded-full border-black1">
          <div
            className={clsx(
              "bg-purple transition-all rounded-full opacity-0 w-full h-full",
              {
                "opacity-100": id === activeRadio,
              }
            )}
          />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
};
