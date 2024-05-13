import { useQuery } from "@tanstack/react-query";
import expoService from "../../services/api/requests/expo.service";
import { useLang } from "../../services/zustand/zusLang";

const useGetBenefits = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const {
    isLoading: benefitsIsLoading,
    isSuccess: benefitsIsSuccess,
    isError: benefitsIsError,
    data: benefitsData,
  } = useQuery({
    queryKey: ["benefitsData", localization],
    queryFn: () => expoService.getBenefits(localization),
    select: ({ data }) => data.data,
  });

  return {
    benefitsData,
    benefitsIsError,
    benefitsIsSuccess,
    benefitsIsLoading,
  };
};

export default useGetBenefits;
