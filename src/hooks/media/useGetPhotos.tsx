import { useQuery } from "@tanstack/react-query";
import expoService from "../../services/api/requests/expo.service";
import { useLang } from "../../services/zustand/zusLang";

const useGetPhotos = (id: number) => {
  const localization = useLang((state) => state.activeLang.localization);

  const { isError, isLoading, data, isSuccess } = useQuery({
    queryKey: ["photosData", localization, id],
    queryFn: () => expoService.getPhotos(localization, id),
    select: ({ data }) => data.data,
  });

  return {
    isError,
    isLoading,
    data,
    isSuccess,
  };
};

export default useGetPhotos;
