import { useEffect, useRef, useState } from "react";
import YearTab from "@/components/shared/YearTab";
import { Play } from "lucide-react";
import useGetVideos from "@/hooks/media/useGetVideos";
import VideoSlider from "@/components/shared/VideoSlider";
import { useMedia } from "@/services/zustand/zusMedia";
import { CoverLayout } from "@/components/layout/CoverLayout";
import { useTranslate } from "@/lib/utils";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { data } = useGetVideos();

  const { activeVideo } = useMedia();

  useEffect(() => {
    setIsPlaying(false);
  }, [activeVideo]);

  const title = useTranslate("Video Report", "Видеорепортаж");

  return (
    <CoverLayout title={title}>
      <YearTab />

      <div className="relative w-full max-h-[600px]">
        {!isPlaying && (
          <div className="w-full h-full bg-black/50 absolute top-0 left-0 " />
        )}
        <video
          onClick={() => setIsPlaying(true)}
          controls
          poster={
            activeVideo.preview
              ? activeVideo.preview
              : data
              ? data[0].preview
              : ""
          }
          src={
            activeVideo.media_url
              ? activeVideo.media_url
              : data
              ? data[0].media_url
              : ""
          }
          className="w-full max-h-[600px] object-cover"
          ref={videoRef}
        />

        {!isPlaying && (
          <button
            onClick={() => {
              videoRef.current?.play();
              setIsPlaying(true);
            }}
            className="size-10 md:size-20 rounded-full bg-purple absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 "
          >
            <Play className="size-4 md:size-[35px] text-white fill-white mx-auto" />
          </button>
        )}
      </div>
      <VideoSlider />
    </CoverLayout>
  );
};

export default Video;
