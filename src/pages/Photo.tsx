import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";
import { type CarouselApi } from "../components/ui/carousel";
import useGetPhotos from "@/hooks/media/useGetPhotos";
import Loader from "@/components/shared/Loader";
import { useGetEn } from "@/hooks/language/useGetEn";
import { CoverLayout } from "@/components/layout/CoverLayout";
import { useTranslate } from "@/lib/useTranslate";
import clsx from "clsx";

export const years = [
  {
    title: "2024",
    id: 1,
  },
  {
    title: "2025",
    id: 2,
  },
];

export const url = "https://turkmenexpo.com/app/storage/app/media/";

export default function Photo() {
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(1);
  const [api, setApi] = useState<CarouselApi>();
  const title = useTranslate("photo");

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const { data, isLoading } = useGetPhotos(active);

  return (
    <CoverLayout title={title}>
      <h4 className="mb-8 font-semibold text-[21px] leading-none">
        {useGetEn("Exhibition", "Экспозиция")}
      </h4>

      <div className="pb-2 border-b border-[#DADADA] flex items-center gap-5 mb-8">
        {years.map((item, i) => (
          <div
            onClick={() => setActive(item.id)}
            key={i}
            className={clsx(
              "text-[14px] cursor-pointer relative after:w-8 after:absolute after:transition-all  after:border-b-[2px] after:rounded-full after:border-purple after:-bottom-[9.5px] after:left-0",
              {
                "after:opacity-100": active === item.id,
                "after:opacity-0": active !== item.id,
              }
            )}
          >
            {item.title}
          </div>
        ))}
      </div>

      {data?.photos ? (
        <Carousel className="md:px-20" setApi={setApi}>
          <CarouselContent>
            {data ? (
              data?.photos?.map((item, i) => (
                <CarouselItem
                  key={i}
                  className="basis-full max-h-[650px] overflow-hidden"
                >
                  <img
                    src={url + item.url}
                    alt=""
                    className="size-full object-cover"
                  />
                </CarouselItem>
              ))
            ) : (
              <Loader />
            )}
          </CarouselContent>

          <div className="flex items-center justify-between mt-4">
            <div className="text-black text-[14px]">
              {current}/{data?.photos?.length}
            </div>

            <div className="flex items-center gap-5">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </Carousel>
      ) : (
        isLoading && <Loader />
      )}
    </CoverLayout>
  );
}
