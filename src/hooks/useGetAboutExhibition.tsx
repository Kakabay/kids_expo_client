import { useQuery } from "@tanstack/react-query";
import expoService from "../services/api/requests/expo.service";
import { useLang } from "../services/zustand/zusLang";

const useGetAboutExhibition = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const {
    isError: aboutExhibitionIsError,
    isLoading: aboutExhibitionIsLoading,
    data: aboutExhibitionData,
    isSuccess: aboutExhibitionIsSuccess,
  } = useQuery({
    queryKey: ["aboutExhibitionData", localization],
    queryFn: () => expoService.getAboutExhibition(localization),
    select: ({ data }) => data,
  });

  return {
    aboutExhibitionIsError,
    aboutExhibitionIsLoading,
    aboutExhibitionData,
    aboutExhibitionIsSuccess,
  };
};

export default useGetAboutExhibition;
