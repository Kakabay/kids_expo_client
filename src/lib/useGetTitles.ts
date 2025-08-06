import { useTranslation } from "react-i18next";

type TitlesKeys = "theme" | "venue" | "about" | "support" | "supportTitle";

export const useGetTitles = (): Record<TitlesKeys, string> => {
  const { t } = useTranslation("index");

  const theme = t("theme");
  const venue = t("venue");
  const about = t("about");
  const support = t("informationSupport");
  const supportTitle = t("supportPage.title");

  return {
    theme,
    venue,
    about,
    support,
    supportTitle,
  };
};
