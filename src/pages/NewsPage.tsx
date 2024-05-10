import clsx from 'clsx';
import { useState } from 'react';
import { v4 } from 'uuid';
import { NewsCard } from '../components/Home/NewsCard';
import { Button } from '../components/ui/Button';
import { SidebarLayout } from '../components/global/SidebarLayout';
import { BreadCrumbs } from '../components/ui/BreadCrumbs';
import { Title } from '../components/ui/Title';

export const NewsPage = () => {
  const [grid, setGrid] = useState(false);

  const menu = ['Новости', 'СМИ о нас'];

  return (
    <SidebarLayout>
      <BreadCrumbs second="Новости" />

      <Title title="Новости" mb24 />

      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-[24px] pb-[5px]">
          <div className="pointer-events-none opacity-0 flex items-center gap-5">
            {menu.map((item) => (
              <p key={v4()} className="cursor-pointer leading-[130%]">
                {item}
              </p>
            ))}
          </div>
          <img
            onClick={() => setGrid(!grid)}
            className="hidden sm:block cursor-pointer"
            src={!grid ? '/assets/icons/news/col.svg' : '/assets/icons/news/grid.svg'}
            alt="сетка"
          />
        </div>

        {/* <div className="hidden sm:flex w-full max-w-[184px] items-center cursor-pointer justify-center mx-auto mb-10 md:mb-[24px] gap-[10px]">
    <Image src={message} alt="Письмо" />
    <p className="leading-[125%] text-extraSm">подписаться на новости</p>
  </div> */}

        {/* <div
        className={clsx('mb-[48px] lg:mb-[108px]', {
          'flex flex-col gap-6': !grid,
          'grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 lg:gap-y-[85px]': grid,
        })}>
        {newsData
          ? newsData.data.map((item) => (
              <NewsCard
                grid={grid}
                key={v4()}
                id={item.id}
                title={item.title}
                date={item.published_at}
                img={
                  item.featured_images.length > 0
                    ? item.featured_images[0].path
                    : newsData.data[0].featured_images[0].path
                }
              />
            ))
          : 'Loading'}
      </div> */}

        <div className="hidden sm:flex flex-col gap-6 w-full max-w-[180px] mx-auto justify-center items-center">
          {/* {newsData && totalNews > perPage && perPage >= totalNews && ( */}
          <div>
            <Button text={'Показать ещё'} />
          </div>
          {/* )} */}
          {/* {newsData?.meta ? (
          <Pagination
            current={current}
            setCurrent={setCurrent}
            totalPage={newsData?.meta.total}
            lastPage={newsData?.meta.last_page}
            currentPage={newsData?.meta.current_page}
          />
        ) : null} */}
        </div>
      </div>
    </SidebarLayout>
  );
};
