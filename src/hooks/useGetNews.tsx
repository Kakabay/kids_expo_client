import { useQuery } from "@tanstack/react-query";
import expoService from "../services/api/requests/expo.service";
import { useLang } from "../services/zustand/zusLang";

type PropsType = {
  current: number;
  perPage: number;
};

const useGetNews = ({ current, perPage }: PropsType) => {
  const localization = useLang((state) => state.activeLang.localization);

  const {
    isError: newsIsError,
    isLoading: newsIsLoading,
    data: newsData,
    isSuccess: newsIsSuccess,
  } = useQuery({
    queryKey: ["newsData", localization, current, perPage],
    queryFn: () => expoService.getNews({ localization, current, perPage }),
    select: ({ data }) => data,
  });

  return {
    newsIsError,
    newsIsLoading,
    newsData,
    newsIsSuccess,
  };
};

export default useGetNews;
