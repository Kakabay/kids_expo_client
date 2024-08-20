import { useRef, useState } from "react";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import YearTab from "@/components/Video/YearTab";
import { Play } from "lucide-react";
import useGetVideos from "@/hooks/media/useGetVideos";
import VideoSlider from "@/components/Video/VideoSlider";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const { data } = useGetVideos();

  return (
    <div className="">
      <BreadCrumbs second={"Медиа"} path="/media/photo" third="Видеорепортаж" />
      <Title title="Видеорепортаж" className="mb-8" />

      <YearTab />

      <div className="relative w-full">
        {!isPlaying && (
          <div className="w-full h-full bg-black/50 absolute top-0 left-0 " />
        )}
        <video
          controls
          autoPlay={isPlaying}
          poster="/assets/images/photo.png"
          src={data ? data?.[0].media_url : ""}
          className="w-full h-full object-cover"
          ref={videoRef}
        />

        {!isPlaying && (
          <button
            onClick={() => {
              videoRef.current?.play();
              setIsPlaying(true);
            }}
            className="size-20 rounded-full bg-purple absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 "
          >
            <Play size={35} className="text-white fill-white mx-auto" />
          </button>
        )}
      </div>
      <VideoSlider />
    </div>
  );
};

export default Video;
