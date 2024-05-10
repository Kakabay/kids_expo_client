import { useQuery } from "@tanstack/react-query";
import { useLang } from "../services/zustand/zusLang";
import expoService from "../services/api/requests/expo.service";

const useGetContacts = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const {
    isError: contactsIsError,
    isLoading: contactsIsLoading,
    isSuccess: contactsIsSuccess,
    data: contactsData,
  } = useQuery({
    queryKey: ["contacts", localization],
    queryFn: () => expoService.getContacts(localization),
    select: ({ data }) => data.data,
  });

  return {
    contactsData,
    contactsIsError,
    contactsIsLoading,
    contactsIsSuccess,
  };
};

export default useGetContacts;
