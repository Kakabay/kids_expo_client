import { useEffect } from 'react';
import { SidebarLayout } from '../../components/global/SidebarLayout';
import { BreadCrumbs } from '../../components/ui/BreadCrumbs';
import { Title } from '../../components/ui/Title';
import { useGetEn } from '../../hooks/language/useGetEn';

export const ExhibitionSupport = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <SidebarLayout>
      <BreadCrumbs
        second={useGetEn('Exhibition', 'Выставка')}
        path="/exhibition-about"
        third={useGetEn('Information support', 'Информационная поддержка')}
      />

      <Title title={useGetEn('Information support', 'Информационная поддержка')} mb24 />

      <h3 className="text-[18px] font-semibold leading-[120%] mb-[22px]">
        {useGetEn('We invite you to become our partners', 'Приглашаем Вас стать нашими партнерами')}
      </h3>

      <div className="flex flex-col gap-4 sm:gap-3">
        <p className="leading-[125%]">
          {useGetEn('Khojamuradov Magtymguly', 'Ходжамурадов Махтумкули')}
        </p>
        <div className="flex flex-col gap-[10px] leading-[125%]">
          <div className="flex items-center">
            <img src="/assets/icons/exhibition-support/phone.svg" alt="" />
            <p>+993 62 00-62-00</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/assets/icons/exhibition-support/mail.svg" alt="" />
            <p className="text-purple">magtymguly.hojamyradov@turkmenexpo.com</p>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};
