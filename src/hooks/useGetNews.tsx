import { useQuery } from '@tanstack/react-query';
import { AxiosPromise } from 'axios';
import expoService from '../services/api/requests/expo.service';
import { GetNewsTypes } from '../services/api/types/getNewsTypes';
import { useLang } from '../services/zustand/zusLang';

const useGetNews = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const {
    isError: newsIsError,
    isLoading: newsIsLoading,
    data: newsData,
    isSuccess: newsIsSuccess,
  } = useQuery({
    queryKey: ['newsData', localization],
    queryFn: (): AxiosPromise<GetNewsTypes> => expoService.getNews(localization),
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
