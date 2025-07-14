import clsx from "clsx";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const NavBtn = ({ left = false }: { left?: boolean }) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={btnRef}
      className={clsx("", {
        "next-btn": !left,
        "prev-btn": left,
      })}
    >
      <img
        src={"../assets/icons/nav-btn.svg"}
        alt="arrow"
        className={clsx("img-auto transition-all", {
          "rotate-180": left,
          // "hover:opacity-90": btnRef.current?.disabled,
        })}
      />
    </button>
  );
};
