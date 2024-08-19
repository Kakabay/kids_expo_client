import { useEffect, useState } from 'react';
import { BreadCrumbs } from '../../components/ui/BreadCrumbs';
import { Title } from '../../components/ui/Title';
import clsx from 'clsx';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../../components/ui/carousel';
import { type CarouselApi } from '../../components/ui/carousel';

const data = [
  {
    year: '2023',
  },
  {
    year: '2024',
  },
];

const items = [
  {
    img: '/assets/images/photo.png',
  },
  {
    img: '/assets/images/photo.png',
  },
  {
    img: '/assets/images/photo.png',
  },
  {
    img: '/assets/images/photo.png',
  },
];

const Photo = () => {
  const [active, setActive] = useState('2023');
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="">
      <BreadCrumbs second={'Медиа'} path="/media/photo" third="Фоторепортаж" />
      <Title title="Фоторепортаж" className="mb-8" />

      <div className="pb-2 border-b border-[#DADADA] flex items-center gap-5 mb-8">
        {data.map((item, i) => (
          <div
            onClick={() => setActive(item.year)}
            key={i}
            className={clsx(
              'text-[14px] cursor-pointer relative after:w-8 after:absolute after:transition-all  after:border-b-[2px] after:rounded-full after:border-purple after:-bottom-[9.5px] after:left-0',
              {
                'after:opacity-100': active === item.year,
                'after:opacity-0': active !== item.year,
              },
            )}>
            {item.year}
          </div>
        ))}
      </div>

      <h4 className="mb-8 font-semibold text-[21px] leading-none">Экспозиция</h4>

      <Carousel setApi={setApi}>
        <CarouselContent>
          {items.map((item, i) => (
            <CarouselItem key={i} className="w-full">
              <img src={item.img} alt="" className="w-full h-full object-cover" />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex items-center justify-between mt-4">
          <div className="text-black text-[14px]">
            {current}/{items.length}
          </div>

          <div className="flex items-center gap-5">
            <CarouselPrevious variant={'default'} />
            <CarouselNext variant={'default'} />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Photo;
