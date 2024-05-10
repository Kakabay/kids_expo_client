import { SidebarLayout } from "../../components/global/SidebarLayout";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import { useLang } from "../../services/zustand/zusLang";

export const VisitorsInfo = () => {
  const chooseDataLang = (en: string, ru: string) =>
    localization === "en" ? en : ru;

  const localization = useLang((state) => state.activeLang.localization);

  return (
    <SidebarLayout>
      <BreadCrumbs
        second={chooseDataLang("For visitors", "Посетителям")}
        third={chooseDataLang(
          "Information for visitors",
          "Информация для посетителей"
        )}
      />

      <Title
        title={chooseDataLang(
          "Information for visitors",
          "Информация для посетителей"
        )}
        mb24
      />

      <p className="text-[22px] leading-[150%] font-light mb-12">
        {chooseDataLang(
          `For the first time in history, from August 19 to 22, 2024, the International Universal Exhibition-Fair “Kids Expo: Everything for Children” will be held in Ashgabat.`,
          `Впервые в истории с 19 по 22 августа 2024 года в Ашхабаде пройдет Международная универсальная выставка-ярмарка «Kids Expo: Всё для детей». `
        )}
      </p>

      <div className="grid grid-cols-2 gap-[42px]">
        <div className="px-4 py-6 bg-pureWhite text-center rounded-sm">
          <img
            src="/assets/icons/visitors/time.svg"
            alt=""
            className="mb-4 mx-auto"
          />
          <h4 className="font-bold leading-[125%] mb-2">
            {chooseDataLang("Opening hours:", "Часы работы:")}
          </h4>
          <p className="leading-[150%]">
            {chooseDataLang(
              "August 19–21: from 09:00 to 18:00",
              "19–21 августа: с 09:00 до 18:00"
            )}
            <br />
            {chooseDataLang(
              "August 22: from 09:00 to 16:00",
              "22 августа: с 09:00 до 16:00"
            )}
          </p>
        </div>

        <div className="px-4 py-6 bg-pureWhite text-center rounded-sm">
          <img
            src="/assets/icons/visitors/location.svg"
            alt=""
            className="mb-4 mx-auto"
          />
          <h4 className="font-bold leading-[125%] mb-2">
            {chooseDataLang("Opening hours:", "Часы работы:")}
          </h4>
          <p className="leading-[150%]">
            {chooseDataLang(
              "Exhibition center of the Chamber of Commerce and Industry of Turkmenistan",
              "Выставочный центр Торгово-промышленной палаты Туркменистана"
            )}
          </p>
        </div>
      </div>
    </SidebarLayout>
  );
};
