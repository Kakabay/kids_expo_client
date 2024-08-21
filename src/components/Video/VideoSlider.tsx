import useGetVideos from '@/hooks/media/useGetVideos';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Loader from '../Loader';
import { useMedia, VideoType } from '@/services/zustand/zusMedia';

const VideoSlider = () => {
  const { data, isLoading } = useGetVideos();

  const { setActiveVideo } = useMedia();

  return data ? (
    <div className="">
      <h4 className="mb-[26px] mt-8 text-[21px] font-semibold">Смотрите также: </h4>
      <Carousel className="w-full h-full relative z-50 ">
        <div className="">
          <CarouselContent className="relative pointer-events-auto top-0 left-0">
            {data.map((item, i) => (
              <CarouselItem
                onClick={() => setActiveVideo(item as VideoType)}
                key={i}
                className="basis-1/4 max-h-[111px] w-full cursor-pointer">
                <img src={item.preview} alt="" className="object-cover h-full w-full" />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <div className="bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none w-full h-[111px] absolute top-0 left-0"> */}
          <CarouselPrevious className="absolute top-1/3 left-2 pointer-events-auto z-50 border-0 hover:bg-purple/90 hover:text-white" />
          <CarouselNext className="absolute top-1/3 right-2 pointer-events-auto z-50 border-0 hover:hover:bg-purple/90 hover:text-white" />
          {/* </div> */}
        </div>
      </Carousel>
    </div>
  ) : isLoading ? (
    <Loader />
  ) : (
    <h1>Error</h1>
  );
};

export default VideoSlider;
