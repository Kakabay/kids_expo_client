import clsx from 'clsx';
import { useRef } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const NavBtn = ({
  left = false,
  onNext,
  onPrev,
}: {
  left?: boolean;
  onNext?: () => void;
  onPrev?: () => void;
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      type="button"
      ref={btnRef}
      className={`${!left ? 'next-btn' : 'prev-btn'} `}
      onClick={!left ? onNext : onPrev}>
      <img
        src={'../assets/icons/nav-btn.svg'}
        alt="arrow"
        className={clsx('img-auto', {
          'rotate-180': left,
        })}
      />
    </button>
  );
};
