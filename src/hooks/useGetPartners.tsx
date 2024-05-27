import { useQuery } from "@tanstack/react-query";
import expoService from "../services/api/requests/expo.service";

const useGetPartners = () => {
  const {
    data: partnersData,
    isLoading: partnersIsLoading,
    isSuccess: partnersIsSuccess,
    isError: partnersIsError,
  } = useQuery({
    queryKey: ["partnersData"],
    queryFn: () => expoService.getPartners(),
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
