import clsx from "clsx";
import { useState } from "react";
import { v4 } from "uuid";
import useGetNews from "../hooks/useGetNews";
import { Pagination } from "../components/shared/Pagination";
import Loader from "../components/shared/Loader";
import { CustomButton } from "../components/shared/CustomButton";
import { NewsCard } from "@/components/shared/NewsCard";
import { useScrollTop, useTranslate } from "@/lib/utils";

export const NewsPage = () => {
  useScrollTop();

  const [grid, setGrid] = useState(true);

  const [current, setCurrent] = useState(1);

  const [perPage, setPerPage] = useState(6);

  const { newsData, newsIsLoading } = useGetNews({
    current,
    perPage,
  });

  const title = useTranslate("Новости", "News");

  return (
    <div className="container mb-24">
      <h2 className="h2 mt-8">{title}</h2>

      <div className="flex flex-col">
        <div className="flex justify-between items-end mb-[24px] pb-[5px]">
          <div className="" />
          <img
            onClick={() => setGrid(!grid)}
            className="hidden sm:block cursor-pointer"
            src={
              !grid
                ? "/assets/icons/news/grid.svg"
                : "/assets/icons/news/col.svg"
            }
            alt="сетка"
          />
        </div>

        <div
          className={clsx("grid gap-5", {
            "min-[1400px]:grid-cols-3 sm:grid-cols-2 grid-cols-1": grid,
          })}
        >
          {newsData &&
            newsData.data.map((item) => (
              <NewsCard
                page
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
            ))}
        </div>

        <div className="hidden sm:flex flex-col gap-6 w-full max-w-[180px] mx-auto justify-center items-center">
          {newsData &&
            newsData.meta.total > perPage &&
            perPage >= newsData.meta.total && (
              <div onClick={() => setPerPage((prev) => prev + 6)}>
                <CustomButton text={"Показать ещё"} little />
              </div>
            )}
          {newsData?.meta ? (
            <Pagination
              current={current}
              setCurrent={setCurrent}
              totalPage={newsData?.meta.total}
              lastPage={newsData?.meta.last_page}
              currentPage={newsData?.meta.current_page}
            />
          ) : null}
        </div>
      </div>

      {newsIsLoading && <Loader />}
    </div>
  );
};
