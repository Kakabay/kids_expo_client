import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import useGetVideos from "@/hooks/media/useGetVideos";
import VideoSlider from "@/components/shared/VideoSlider";
import { useMedia } from "@/services/zustand/zusMedia";
import { CoverLayout } from "@/components/layout/CoverLayout";
import { useTranslate } from "@/lib/useTranslate";
import clsx from "clsx";

export default function Video() {
  const [active, setActive] = useState("1");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { data } = useGetVideos();

  const { activeVideo } = useMedia();

  useEffect(() => {
    setIsPlaying(false);
  }, [activeVideo]);

  const title = useTranslate("video.title");

  return (
    <CoverLayout title={title}>
      <div className="pb-2 border-b border-[#DADADA] flex items-center gap-5 mb-8">
        {["2024", "2025"].map((item, i) => (
          <div
            onClick={() => setActive(item)}
            key={i}
            className={clsx(
              "text-[14px] cursor-pointer relative after:w-8 after:absolute after:transition-all  after:border-b-[2px] after:rounded-full after:border-purple after:-bottom-[9.5px] after:left-0",
              {
                "after:opacity-100": active === item,
                "after:opacity-0": active !== item,
              }
            )}
          >
            {item}
          </div>
        ))}
      </div>

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
}
