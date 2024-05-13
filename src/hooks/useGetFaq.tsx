import { useQuery } from "@tanstack/react-query";
import { useLang } from "../services/zustand/zusLang";
import expoService from "../services/api/requests/expo.service";

const useGetFaq = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const {
    isError: faqIsError,
    isLoading: faqIsLoading,
    isSuccess: faqIsSuccess,
    data: faqData,
  } = useQuery({
    queryKey: ["faqData", localization],
    queryFn: () => expoService.getFaq(localization),
    select: ({ data }) => data.data,
  });

  return {
    faqData,
    faqIsError,
    faqIsLoading,
    faqIsSuccess,
  };
};

export default useGetFaq;
