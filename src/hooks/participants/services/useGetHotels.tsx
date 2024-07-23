import { useQuery } from '@tanstack/react-query';
import expoService from '../../../services/api/requests/expo.service';
import { useLang } from '../../../services/zustand/zusLang';

const useGetHotels = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const { isLoading, isSuccess, isError, data } = useQuery({
    queryKey: ['hotelsData', localization],
    queryFn: () => expoService.getHotels(localization),
    select: ({ data }) => data.data,
  });

  return {
    isLoading,
    isSuccess,
    isError,
    data,
  };
};

export default useGetHotels;
