import { useQuery } from '@tanstack/react-query';
import { AxiosPromise } from 'axios';
import expoService from '../services/api/requests/expo.service';
import { GetBannersTypes } from '../services/api/types/getBannersTypes';
import { useLang } from '../services/zustand/zusLang';

const useGetBanners = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const {
    isError: bannersIsError,
    isLoading: bannersIsLoading,
    data: bannersData,
    isSuccess: bannersIsSuccess,
  } = useQuery({
    queryKey: ['bannersData', localization],
    queryFn: (): AxiosPromise<GetBannersTypes> => expoService.getBanners(localization),
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
