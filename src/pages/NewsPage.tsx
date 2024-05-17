import clsx from 'clsx';
import { useState } from 'react';
import { v4 } from 'uuid';
import { NewsCard } from '../components/Home/NewsCard';
import { Button } from '../components/ui/Button';
import { SidebarLayout } from '../components/global/SidebarLayout';
import { BreadCrumbs } from '../components/ui/BreadCrumbs';
import { Title } from '../components/ui/Title';
import useGetNews from '../hooks/useGetNews';
import { useLang } from '../services/zustand/zusLang';

export const NewsPage = () => {
  const chooseDataLang = (en: string, ru: string) => (localization === 'en' ? en : ru);

  const localization = useLang((state) => state.activeLang.localization);

  const [grid, setGrid] = useState(false);

  const menu = ['Новости', 'СМИ о нас'];

  const [page] = useState(0);
  const [perPage, setPerPage] = useState(6);

  const { newsData, newsIsError, newsIsLoading, newsIsSuccess } = useGetNews({
    page,
    perPage,
  });

  if (newsIsError) {
    <h1>Error</h1>;
  }
  if (newsIsLoading) {
    <h1>Loading...</h1>;
  }
  if (newsIsSuccess) {
    return (
      <SidebarLayout>
        <BreadCrumbs second={chooseDataLang('News', 'Новости')} />

        <Title title={chooseDataLang('News', 'Новости')} mb24 />

        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-[24px] pb-[5px]">
            <div className="pointer-events-none hidden sm opacity-0 sm:flex items-center gap-5">
              {menu.map((item) => (
                <p key={v4()} className="cursor-pointer leading-[130%]">
                  {item}
                </p>
              ))}
            </div>
            <img
              onClick={() => setGrid(!grid)}
              className="hidden sm:block cursor-pointer"
              src={!grid ? '/assets/icons/news/grid.svg' : '/assets/icons/news/col.svg'}
              alt="сетка"
            />
          </div>

          {/* <div className="hidden sm:flex w-full max-w-[184px] items-center cursor-pointer justify-center mx-auto mb-10 md:mb-[24px] gap-[10px]">
      <Image src={message} alt="Письмо" />
      <p className="leading-[125%] text-extraSm">подписаться на новости</p>
    </div> */}

          <div
            className={clsx('grid gap-8', {
              'min-[1200px]:grid-cols-3 gap-8 sm:grid-cols-2 grid-cols-1': !grid,
            })}>
            {newsData
              ? newsData.data.map((item) => (
                  <NewsCard
                    key={v4()}
                    id={item.id}
                    title={item.title}
                    published_at={item.published_at}
                    path={
                      item.featured_images.length > 0
                        ? item.featured_images[0].path
                        : newsData.data[0].featured_images[0].path
                    }
                    grid={grid}
                  />
                ))
              : 'Loading'}
          </div>

          <div className="hidden sm:flex flex-col gap-6 w-full max-w-[180px] mx-auto justify-center items-center">
            {newsData && newsData.meta.total > perPage && perPage >= newsData.meta.total && (
              <div onClick={() => setPerPage((prev) => prev + 6)}>
                <Button text={'Показать ещё'} little />
              </div>
            )}
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
  }
};
