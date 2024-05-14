import { useQuery } from '@tanstack/react-query';
import { useLang } from '../../services/zustand/zusLang';
import expoService from '../../services/api/requests/expo.service';

const useGetDocs = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const {
    isLoading: docsIsLoading,
    isSuccess: docsIsSuccess,
    isError: docsIsError,
    data: docsData,
  } = useQuery({
    queryKey: ['docsData', localization],
    queryFn: () => expoService.getDocs(localization),
    select: ({ data }) => data.data,
  });

  return {
    docsData,
    docsIsError,
    docsIsSuccess,
    docsIsLoading,
  };
};

export default useGetDocs;
