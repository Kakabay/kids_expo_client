import { useQuery } from "@tanstack/react-query";
import expoService from "../services/api/requests/expo.service";
import { useLang } from "../services/zustand/zusLang";

const useGetBanners = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const {
    isError: bannersIsError,
    isLoading: bannersIsLoading,
    data: bannersData,
    isSuccess: bannersIsSuccess,
  } = useQuery({
    queryKey: ["bannersData", localization],
    queryFn: () => expoService.getBanners(localization),
    select: ({ data }) => data.data,
  });

  return {
    bannersIsError,
    bannersIsLoading,
    bannersData,
    bannersIsSuccess,
  };
};

export default useGetBanners;
