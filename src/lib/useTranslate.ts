import { useTranslation } from "react-i18next";

export const useTranslate = (key: string, file: string = "index"): string => {
  const { t } = useTranslation(file);

  const text = t(key);

  return text;
};
