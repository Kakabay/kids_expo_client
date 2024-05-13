import { useQuery } from "@tanstack/react-query";
import expoService from "../../services/api/requests/expo.service";
import { useLang } from "../../services/zustand/zusLang";

const useGetTopics = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const {
    isLoading: topicsIsLoading,
    isError: topicsIsError,
    isSuccess: topicsIsSuccess,
    data: topicsData,
  } = useQuery({
    queryKey: ["topicsData", localization],
    queryFn: () => expoService.getTopics(localization),
    select: ({ data }) => data.data,
  });

  return {
    topicsData,
    topicsIsError,
    topicsIsLoading,
    topicsIsSuccess,
  };
};

export default useGetTopics;
