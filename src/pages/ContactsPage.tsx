import useGetContacts from "../hooks/useGetContacts";
import Loader from "../components/shared/Loader";
import { useTranslate } from "@/lib/utils";

export default function ContactsPage() {
  const title = useTranslate("Контакты", "Contacts");

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
              <p>+993 71 87-18-13</p>
              <p className="text-[14px] text-purple">
                {item.services[0].email}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
