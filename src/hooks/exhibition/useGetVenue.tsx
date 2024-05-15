import { useQuery } from '@tanstack/react-query';
import { useLang } from '../../services/zustand/zusLang';
import expoService from '../../services/api/requests/expo.service';

const useGetVenue = () => {
  const localization = useLang((state) => state.activeLang.localization);
  const {
    isLoading: venueIsLoading,
    isSuccess: venueIsSuccess,
    isError: venueIsError,
    data: venueData,
  } = useQuery({
    queryKey: ['venueData', localization],
    queryFn: () => expoService.getVenueExhibition(localization),
    select: ({ data }) => data,
  });

  return {
    venueData,
    venueIsError,
    venueIsLoading,
    venueIsSuccess,
  };
};

export default useGetVenue;
