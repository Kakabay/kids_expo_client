import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const VideoSlider = () => {
  return (
    <div className="">
      <h4 className="mb-[26px] mt-8 text-[21px] font-semibold">
        Смотрите также:{" "}
      </h4>
      <Carousel className="">
        <div className="w-full h-full relative z-50 bg-gradient-to-r from-black/10 via-transparent to-black/10">
          <CarouselContent className="gap-4 relative -z-10 top-0 left-0">
            {[...new Array(8)].map((_, i) => (
              <CarouselItem key={i} className="basis-1/4 h-[111px] w-[200px]">
                <img
                  src="/assets/images/photo.png"
                  alt=""
                  className="w-full h-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/3 left-2 border-0 hover:none" />
          <CarouselNext className="absolute top-1/3 right-2 border-0 hover:none" />
        </div>
      </Carousel>
    </div>
  );
};

export default VideoSlider;
