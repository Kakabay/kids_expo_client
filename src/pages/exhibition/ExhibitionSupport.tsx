import { SidebarLayout } from "../../components/global/SidebarLayout";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import { useLang } from "../../services/zustand/zusLang";

export const ExhibitionSupport = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const chooseDataLang = (en: string, ru: string) =>
    localization === "en" ? en : ru;

  return (
    <SidebarLayout>
      <BreadCrumbs
        second={chooseDataLang("Exhibition", "Выставка")}
        path="/exhibition-about"
        third={chooseDataLang(
          "Information support",
          "Информационная поддержка"
        )}
      />

      <Title
        title={chooseDataLang(
          "Information support",
          "Информационная поддержка"
        )}
        mb24
      />

      <h3 className="text-[18px] font-semibold leading-[120%] mb-[22px]">
        {chooseDataLang(
          "We invite you to become our partners",
          "Приглашаем Вас стать нашими партнерами"
        )}
      </h3>

      <div className="flex flex-col gap-2">
        <p className="leading-[125%]">
          {chooseDataLang(
            "Khojamuradov Magtymguly, director of Turkmen Expo",
            "Ходжамурадов Махтумкули, директор Turkmen Expo"
          )}
        </p>
        <div className="flex flex-col gap-[10px] leading-[125%]">
          <div className="flex items-center">
            <img src="/assets/icons/exhibition-support/phone.svg" alt="" />
            <p>+993 62 00-62-00</p>
          </div>
          <div className="flex items-center">
            <img src="/assets/icons/exhibition-support/mail.svg" alt="" />
            <p>+993 62 00-62-00</p>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};
