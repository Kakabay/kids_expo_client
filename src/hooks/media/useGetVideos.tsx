import { useQuery } from "@tanstack/react-query";
import expoService from "../../services/api/requests/expo.service";
import { useLang } from "../../services/zustand/zusLang";

const useGetVideos = (id: number) => {
  const localization = useLang((state) => state.activeLang.localization);

  const { isError, isLoading, data, isSuccess } = useQuery({
    queryKey: ["videosData", localization, id],
    queryFn: () => expoService.getVideos(localization, id),
    select: ({ data }) => data.data,
  });

  return {
    isError,
    isLoading,
    data,
    isSuccess,
  };
};

export default useGetVideos;
