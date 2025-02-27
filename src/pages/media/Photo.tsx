import { useEffect, useState } from "react";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../../../components/ui/carousel";
import { type CarouselApi } from "../../../components/ui/carousel";
import YearTab from "@/components/Video/YearTab";
import useGetPhotos from "@/hooks/media/useGetPhotos";
import Loader from "@/components/Loader";
import { useGetEn } from "@/hooks/language/useGetEn";

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

  const title = useGetEn("Photo Report", "Фоторепортаж");

  return (
    <div className="">
      <BreadCrumbs
        second={useGetEn("Media", "Медиа")}
        path="/media/photo"
        third={title}
      />
      <Title title={title} className="mb-8" />

      <h4 className="mb-8 font-semibold text-[21px] leading-none">
        {useGetEn("Exhibition", "Экспозиция")}
      </h4>

      <YearTab />

      {data ? (
        <Carousel className="md:px-10" setApi={setApi}>
          <CarouselContent>
            {data ? (
              data.map((item, i) => (
                <CarouselItem key={i} className="w-full max-h-[450px] ">
                  <img
                    src={item.media_url}
                    alt=""
                    className="w-full h-full object-cover overflow-hidden object-center"
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
    </div>
  );
};

export default Photo;
