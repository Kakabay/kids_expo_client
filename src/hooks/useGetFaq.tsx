import { useQuery } from "@tanstack/react-query";
import { useLang } from "../services/zustand/zusLang";
import expoService from "../services/api/requests/expo.service";
import { useFaq } from "../services/zustand/zusFaq";

const useGetFaq = () => {
  const localization = useLang((state) => state.activeLang.localization);
  const currentRadio = useFaq((state) => state.activeRadio);

  const {
    isError: faqIsError,
    isLoading: faqIsLoading,
    isSuccess: faqIsSuccess,
    data: faqData,
  } = useQuery({
    queryKey: ["faqData", localization, currentRadio],
    queryFn: () => expoService.getFaq(localization, currentRadio),
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
