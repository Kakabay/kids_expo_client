import { useQuery } from '@tanstack/react-query';
import expoService from '../services/api/requests/expo.service';
import { useLang } from '../services/zustand/zusLang';

type PropsType = {
  page: number;
  perPage: number;
};

const useGetNews = ({ page, perPage }: PropsType) => {
  const localization = useLang((state) => state.activeLang.localization);

  const {
    isError: newsIsError,
    isLoading: newsIsLoading,
    data: newsData,
    isSuccess: newsIsSuccess,
  } = useQuery({
    queryKey: ['newsData', localization, page, perPage],
    queryFn: () => expoService.getNews({ localization, page, perPage }),

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
