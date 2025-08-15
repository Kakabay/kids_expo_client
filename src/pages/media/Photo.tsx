import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../../components/ui/carousel";
import { type CarouselApi } from "../../components/ui/carousel";
import YearTab from "@/components/shared/YearTab";
import useGetPhotos from "@/hooks/media/useGetPhotos";
import Loader from "@/components/shared/Loader";
import { useGetEn } from "@/hooks/language/useGetEn";
import { CoverLayout } from "@/components/layout/CoverLayout";
import { useTranslate } from "@/lib/useTranslate";

// const items = [
//   {
//     img: '/assets/images/photo.png',
//   },
//   {
//     img: '/assets/images/photo.png',
//   },
//   {
//     img: '/assets/images/photo.png',
//   },
//   {
//     img: '/assets/images/photo.png',
//   },
// ];

const Photo = () => {
  const [current, setCurrent] = useState(0);
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

  const { data, isLoading } = useGetPhotos();

  return (
    <CoverLayout title={title}>
      <h4 className="mb-8 font-semibold text-[21px] leading-none">
        {useGetEn("Exhibition", "Экспозиция")}
      </h4>

      <YearTab />

      {data ? (
        <Carousel className="md:px-20" setApi={setApi}>
          <CarouselContent>
            {data ? (
              data.map((item, i) => (
                <CarouselItem
                  key={i}
                  className="basis-full max-h-[650px] overflow-hidden"
                >
                  <img
                    src={item.media_url}
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
              {current}/{data.length}
            </div>

            <div className="flex items-center gap-5">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </Carousel>
      ) : isLoading ? (
        <Loader />
      ) : (
        <h1>Error</h1>
      )}
    </CoverLayout>
  );
};

export default Photo;
