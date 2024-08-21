import { useEffect, useRef, useState } from 'react';
import { BreadCrumbs } from '../../components/ui/BreadCrumbs';
import { Title } from '../../components/ui/Title';
import YearTab from '@/components/Video/YearTab';
import { Play } from 'lucide-react';
import useGetVideos from '@/hooks/media/useGetVideos';
import VideoSlider from '@/components/Video/VideoSlider';
import { useMedia } from '@/services/zustand/zusMedia';

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const { data } = useGetVideos();

  const { activeVideo, setActiveVideo } = useMedia();

  useEffect(() => {
    setIsPlaying(false);
  }, [activeVideo]);

  return (
    <div className="pointer-events-auto">
      <BreadCrumbs second={'Медиа'} path="/media/photo" third="Видеорепортаж" />
      <Title title="Видеорепортаж" className="mb-8" />

      <YearTab />

      <div className="relative w-full max-h-[470px]">
        {!isPlaying && <div className="w-full h-full bg-black/50 absolute top-0 left-0 " />}
        <video
          onClick={() => setIsPlaying(true)}
          controls
          poster={activeVideo.preview ? activeVideo.preview : data ? data[0].preview : ''}
          src={activeVideo.media_url ? activeVideo.media_url : data ? data[0].media_url : ''}
          className="w-full max-h-[470px] object-cover"
          ref={videoRef}
        />

        {!isPlaying && (
          <button
            onClick={() => {
              videoRef.current?.play();
              setIsPlaying(true);
            }}
            className="size-10 md:size-20 rounded-full bg-purple absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <Play className="size-4 md:size-[35px] text-white fill-white mx-auto" />
          </button>
        )}
      </div>
      <VideoSlider />
    </div>
  );
};

export default Video;
