import { BreadCrumbs } from "../components/ui/BreadCrumbs";
import { Title } from "../components/ui/Title";
import { useLang } from "../services/zustand/zusLang";

export const ContactsPage = () => {
  const chooseDataLang = (en: string, ru: string) =>
    localization === "en" ? en : ru;

  const localization = useLang((state) => state.activeLang.localization);

  return (
    <div className="container pt-5">
      <BreadCrumbs second={chooseDataLang("Contacts", "Контакты")} />

      <Title title={chooseDataLang("Contacts", "Контакты")} />
    </div>
  );
};
