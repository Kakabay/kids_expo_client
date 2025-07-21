import clsx from "clsx";
import { useState } from "react";

const data = [
  {
    year: "2024",
  },
];

const YearTab = () => {
  const [active, setActive] = useState("2024");

  return (
    <div className="pb-2 border-b border-[#DADADA] flex items-center gap-5 mb-8">
      {data.map((item, i) => (
        <div
          onClick={() => setActive(item.year)}
          key={i}
          className={clsx(
            "text-[14px] cursor-pointer relative after:w-8 after:absolute after:transition-all  after:border-b-[2px] after:rounded-full after:border-purple after:-bottom-[9.5px] after:left-0",
            {
              "after:opacity-100": active === item.year,
              "after:opacity-0": active !== item.year,
            }
          )}
        >
          {item.year}
        </div>
      ))}
    </div>
  );
};

export default YearTab;
