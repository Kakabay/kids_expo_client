import clsx from "clsx";
import { useFaq } from "../../services/zustand/zusFaq";
import { useTranslate } from "@/lib/utils";

interface IProps {
  name: string;
  nameEn: string;
  active?: boolean;
  changeRadio?: (name: string) => void;
}

export const Radio = ({ name, active, nameEn }: IProps) => {
  const filter = useFaq((state) => state.filter);

  return (
    <div
      onClick={() => filter(name)}
      className="flex items-center gap-[10px] cursor-pointer"
    >
      <div className="flex items-center gap-[10px]">
        <div className="border-[1px] h-3 w-3 p-[2px] rounded-full border-black1">
          <div
            className={clsx(
              "bg-purple transition-all rounded-full opacity-0 w-full h-full",
              {
                "opacity-100": active,
              }
            )}
          />
        </div>
        <p>{useTranslate(name, nameEn)}</p>
      </div>
    </div>
  );
};
