import { useQuery } from '@tanstack/react-query';
import expoService from '../../../services/api/requests/expo.service';
import { useLang } from '../../../services/zustand/zusLang';

const useGetEngeener = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const { isLoading, isSuccess, isError, data } = useQuery({
    queryKey: ['engeenerData', localization],
    queryFn: () => expoService.getEngeener(localization),
    select: ({ data }) => data.data,
  });

  return {
    isLoading,
    isSuccess,
    isError,
    data,
  };
};

export default useGetEngeener;
