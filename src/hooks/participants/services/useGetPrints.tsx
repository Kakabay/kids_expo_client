import { useQuery } from '@tanstack/react-query';
import expoService from '../../../services/api/requests/expo.service';
import { useLang } from '../../../services/zustand/zusLang';

const useGetPrints = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const { isLoading, isSuccess, isError, data } = useQuery({
    queryKey: ['printsData', localization],
    queryFn: () => expoService.getPrints(localization),
    select: ({ data }) => data.data,
  });

  return {
    isLoading,
    isSuccess,
    isError,
    data,
  };
};

export default useGetPrints;
