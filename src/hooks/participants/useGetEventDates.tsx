import { useQuery } from "@tanstack/react-query";
import { useLang } from "../../services/zustand/zusLang";
import expoService from "../../services/api/requests/expo.service";

const useGetEventDates = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const {
    isLoading: eventDatesIsloading,
    isSuccess: eventDatesIsSuccess,
    isError: eventDatesIsError,
    data: eventsDatesData,
  } = useQuery({
    queryKey: ["eventDatesData", localization],
    queryFn: () => expoService.getEventDates(localization),
    select: ({ data }) => data,
  });

  return {
    eventDatesIsError,
    eventDatesIsSuccess,
    eventDatesIsloading,
    eventsDatesData,
  };
};

export default useGetEventDates;
