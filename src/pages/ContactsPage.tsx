import { v4 } from 'uuid';
import { BreadCrumbs } from '../components/ui/BreadCrumbs';
import { Title } from '../components/ui/Title';
import useGetContacts from '../hooks/useGetContacts';
import { useLang } from '../services/zustand/zusLang';

export const ContactsPage = () => {
  const chooseDataLang = (en: string, ru: string) => (localization === 'en' ? en : ru);

  const localization = useLang((state) => state.activeLang.localization);

  const { contactsData, contactsIsError, contactsIsLoading, contactsIsSuccess } = useGetContacts();

  if (contactsIsError) {
    return (
      <div className="container">
        <h1>Error...</h1>
      </div>
    );
  }

  if (contactsIsLoading) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (contactsIsSuccess) {
    return (
      <div className="container pt-5">
        <BreadCrumbs second={chooseDataLang('Contacts', 'Контакты')} />

        <Title title={chooseDataLang('Contacts', 'Контакты')} />

        <div className="mt-[35px] flex flex-col gap-2 leading-[130%]">
          {contactsData?.map((item) => (
            <div key={v4()}>
              <h4 className="font-bold leading-[125%] mb-2">Ходжамурадов Махтумкули</h4>
              <p className="text-[14px]">{item.services[0].phone}</p>
              <p className="text-[14px] text-purple">{item.services[0].email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
