// import { useEffect, useRef, useState } from "react";
// import { Play } from "lucide-react";
// import useGetVideos from "@/hooks/media/useGetVideos";
// import VideoSlider from "@/components/shared/VideoSlider";
// import { useMedia } from "@/services/zustand/zusMedia";
// import { CoverLayout } from "@/components/layout/CoverLayout";
// import { useTranslate } from "@/lib/useTranslate";
// import clsx from "clsx";
// import { url, years } from "./Photo";

// export default function Video() {
//   const [active, setActive] = useState(1);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const { data } = useGetVideos(active);

//   const activeVideo = useMedia((state) => state.activeVideo);

//   useEffect(() => {
//     setIsPlaying(false);
//   }, [activeVideo.media_url]);

//   const title = useTranslate("video.title");

//   return (
//     <CoverLayout title={title}>
//       <div className="pb-2 border-b border-[#DADADA] flex items-center gap-5 mb-8">
//         {years.map((item, i) => (
//           <div
//             onClick={() => setActive(item.id)}
//             key={i}
//             className={clsx(
//               "text-[14px] cursor-pointer relative after:w-8 after:absolute after:transition-all  after:border-b-[2px] after:rounded-full after:border-purple after:-bottom-[9.5px] after:left-0",
//               {
//                 "after:opacity-100": active === item.id,
//                 "after:opacity-0": active !== item.id,
//               }
//             )}
//           >
//             {item.title}
//           </div>
//         ))}
//       </div>

//       <div className="relative w-full max-h-[600px]">
//         {!isPlaying && (
//           <div className="w-full h-full bg-black/50 absolute top-0 left-0 " />
//         )}
//         <video
//           onClick={() => setIsPlaying(true)}
//           controls
//           poster={
//             activeVideo.preview
//               ? activeVideo.preview
//               : data
//               ? data.photos[0].url
//               : ""
//           }
//           src={
//             activeVideo.media_url
//               ? activeVideo.media_url
//               : data
//               ? data.videos[active]
//               : ""
//           }
//           className="w-full max-h-[600px] object-cover"
//           ref={videoRef}
//         />

//         {!isPlaying && (
//           <button
//             onClick={() => {
//               videoRef.current?.play();
//               setIsPlaying(true);
//             }}
//             className="size-10 md:size-20 rounded-full bg-purple absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 "
//           >
//             <Play className="size-4 md:size-[35px] text-white fill-white mx-auto" />
//           </button>
//         )}
//       </div>
//       <VideoSlider />
//     </CoverLayout>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import useGetVideos from "@/hooks/media/useGetVideos";
import { useMedia } from "@/services/zustand/zusMedia";
import { CoverLayout } from "@/components/layout/CoverLayout";
import { useTranslate } from "@/lib/useTranslate";
import clsx from "clsx";
import { url, years } from "./Photo";

export default function Video() {
  const [activeCategoryId, setActiveCategoryId] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { data } = useGetVideos(activeCategoryId);
  const { activeVideo, setActiveVideo } = useMedia();

  useEffect(() => {
    if (data?.videos && data?.videos?.length > 0 && !activeVideo) {
      setActiveVideo(data.videos[0]);
    }
  }, [data?.videos, activeVideo, setActiveVideo]);

  useEffect(() => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [activeVideo?.id]);

  const title = useTranslate("video.title");

  const getVideoUrl = () => {
    return url + activeVideo?.url || data?.videos?.[0]?.url || "";
  };

  const getPosterUrl = () => {
    return url + activeVideo?.preview || data?.videos?.[0]?.preview || "";
  };

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoSelect = (video: any) => {
    setActiveVideo(video);
  };

  return (
    <CoverLayout title={title}>
      <div className="pb-2 border-b border-[#DADADA] flex items-center gap-5 mb-8">
        {years.map((item) => (
          <div
            onClick={() => setActiveCategoryId(item.id)}
            key={item.id}
            className={clsx(
              "text-[14px] cursor-pointer relative after:w-8 after:absolute after:transition-all after:border-b-[2px] after:rounded-full after:border-purple after:-bottom-[9.5px] after:left-0",
              {
                "after:opacity-100": activeCategoryId === item.id,
                "after:opacity-0": activeCategoryId !== item.id,
              }
            )}
          >
            {item.title}
          </div>
        ))}
      </div>

      <div className="relative w-full max-h-[600px] mb-8">
        {!isPlaying && (
          <div className="w-full h-full bg-black/50 absolute top-0 left-0 z-10" />
        )}

        <video
          onClick={handlePlay}
          controls={isPlaying}
          poster={getPosterUrl()}
          src={getVideoUrl()}
          className="w-full max-h-[600px] object-cover"
          ref={videoRef}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="size-10 md:size-20 rounded-full bg-purple absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <Play className="size-4 md:size-[35px] text-white fill-white mx-auto" />
          </button>
        )}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Другие видео</h3>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {data?.videos?.map((video) => (
            <div
              key={video.id}
              onClick={() => handleVideoSelect(video)}
              className={clsx(
                "flex-shrink-0 cursor-pointer transition-all border-2 rounded-lg",
                {
                  "border-purple shadow-lg": activeVideo?.id === video.id,
                  "border-transparent": activeVideo?.id !== video.id,
                }
              )}
            >
              <video
                src={url + video.url}
                className="w-40 h-24 object-cover rounded-md"
                muted
                preload="metadata"
              />
              <p className="text-sm mt-2 max-w-[160px] truncate">
                {video.header}
              </p>
            </div>
          ))}
        </div>
      </div>
    </CoverLayout>
  );
}
