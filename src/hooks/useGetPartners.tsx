import { useQuery } from "@tanstack/react-query";
import { useLang } from "../services/zustand/zusLang";
import expoService from "../services/api/requests/expo.service";

const useGetPartners = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const {
    data: partnersData,
    isLoading: partnersIsLoading,
    isSuccess: partnersIsSuccess,
    isError: partnersIsError,
  } = useQuery({
    queryKey: ["partnersData", localization],
    queryFn: () => expoService.getPartners(localization),
    select: ({ data }) => data.data,
  });

  return {
    partnersData,
    partnersIsError,
    partnersIsLoading,
    partnersIsSuccess,
  };
};

export default useGetPartners;
