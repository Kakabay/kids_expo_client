import { useQuery } from "@tanstack/react-query";
import { useLang } from "../services/zustand/zusLang";
import expoService from "../services/api/requests/expo.service";

const useGetSeperateNews = (id: string) => {
  const localization = useLang((state) => state.activeLang.localization);

  const {
    isError: newsSeperateIsError,
    isLoading: newsSeperateIsLoading,
    data: newsSeperateData,
    isSuccess: newsSeperateIsSuccess,
  } = useQuery({
    queryKey: ["newsSeperateData", localization],
    queryFn: () => expoService.getSeperateNews({ localization, id }),
    select: ({ data }) => data.data,
  });

  return {
    newsSeperateData,
    newsSeperateIsError,
    newsSeperateIsLoading,
    newsSeperateIsSuccess,
  };
};

export default useGetSeperateNews;
