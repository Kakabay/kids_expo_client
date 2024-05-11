import { BreadCrumbs } from '../components/ui/BreadCrumbs';
import { Title } from '../components/ui/Title';
import useGetContacts from '../hooks/useGetContacts';
import { useLang } from '../services/zustand/zusLang';

export const ContactsPage = () => {
  const chooseDataLang = (en: string, ru: string) => (localization === 'en' ? en : ru);

  const localization = useLang((state) => state.activeLang.localization);

  const { contactsData, contactsIsError, contactsIsLoading, contactsIsSuccess } = useGetContacts();

  if (contactsIsError) {
    return <h1>Error...</h1>;
  }

  if (contactsIsLoading) {
    return <h1>Loading...</h1>;
  }

  if (contactsIsSuccess) {
    return (
      <div className="container pt-5">
        <BreadCrumbs second={chooseDataLang('Contacts', 'Контакты')} />

        <Title title={chooseDataLang('Contacts', 'Контакты')} />

        <div className="mt-[35px] flex flex-col gap-2 leading-[130%]">
          {contactsData?.map((item) => (
            <>
              <h4 className="font-bold leading-[125%]">Ходжамурадов Махтумкули</h4>
              <p className="text-[14px]">{item.services[0].phone}</p>
              <p className="text-[14px] text-purple">{item.services[0].email}</p>
            </>
          ))}
        </div>
      </div>
    );
  }
};
