import expoService from "@/services/api/requests/expo.service";
import { useLang } from "@/services/zustand/zusLang";
import { useQuery } from "@tanstack/react-query";

export const useGetParticipants = () => {
  const lang = useLang((state) => state.activeLang.localization);

  const { data, isPending } = useQuery({
    queryKey: ["participants", lang],
    queryFn: () => expoService.getParticipants(lang),
    select: ({ data }) => data.data,
  });

  return { data, isPending };
};
