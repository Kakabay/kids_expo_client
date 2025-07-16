import useGetContacts from "../hooks/useGetContacts";
import Loader from "../components/shared/Loader";
import { useScrollTop, useTranslate } from "@/lib/utils";
import { useLang } from "@/services/zustand/zusLang";

export const ContactsPage = () => {
  useScrollTop();
  const title = useTranslate("Контакты", "Contacts");
  const localization = useLang((state) => state.activeLang.localization);

  const {
    contactsData,
    contactsIsError,
    contactsIsLoading,
    contactsIsSuccess,
  } = useGetContacts();

  if (contactsIsError) {
    return (
      <div className="container">
        <h1>Error...</h1>
      </div>
    );
  }

  if (contactsIsLoading) {
    return <Loader />;
  }

  if (contactsIsSuccess) {
    return (
      <div className="container">
        <h2 className="h2 mt-10">{title}</h2>

        <div className="mt-[35px] flex flex-col gap-2 leading-[130%]">
          {contactsData?.map((item, i) => (
            <div key={i}>
              <h4 className="font-bold leading-[125%] mb-2">
                {localization === "en"
                  ? "Hojamuradov Magtymguly"
                  : "Ходжамурадов Махтумкули"}
              </h4>
              <p className="text-[14px]">{item.services?.[0]?.phone}</p>
              <p className="text-[14px] text-purple">
                {item.services[0].email}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
