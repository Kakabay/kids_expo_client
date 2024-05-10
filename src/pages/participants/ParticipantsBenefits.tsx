import { v4 } from "uuid";
import { SidebarLayout } from "../../components/global/SidebarLayout";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import { useLang } from "../../services/zustand/zusLang";

const benefitsData = [
  {
    en: "A unique opportunity to promote your brand and products on the market of Turkmenistan and Central Asia",
    title:
      "Уникальная возможность продвижения вашего бренда и продукции на рынке Туркменистана и Центральной Азии",
  },
  {
    en: "Opportunity to establish long-term business partnerships with companies from Turkmenistan, Central Asia and other countries",
    title:
      "Возможность установить долгосрочные деловые партнерства с компаниями из Туркменистана, Центральной Азии и других стран",
  },
  {
    en: "Presenting your products in front of thousands of visitors and potential customers",
    title:
      "Представление вашей продукции перед тысячами посетителей и потенциальных клиентов",
  },
  {
    en: "A unique opportunity to participate on preferential terms (air travel, local transport, accommodation on preferential terms, visa support)",
    title:
      "Уникальная возможность участвовать по льготным условиям (авиаперелет, местный транспорт, проживание по льготным условиям, визовая поддержка).",
  },
];

export const ParticipantsBenefits = () => {
  const localization = useLang((state) => state.activeLang.localization);
  const chooseDataLang = (en: string, ru: string) =>
    localization === "en" ? en : ru;

  return (
    <SidebarLayout>
      <BreadCrumbs
        second={chooseDataLang("Participations", "Участникам")}
        path="/participants-info"
        third={chooseDataLang(
          "Benefits of participations",
          "Преимущества участия"
        )}
      />

      <Title
        title={chooseDataLang(
          "Benefits of participations",
          "Преимущества участия"
        )}
        mb24
      />

      <h3 className="text-[21px] font-semibold mb-[42px]">
        {chooseDataLang(
          "By taking part in “Kids Expo: Everything for Children”, companies will have:",
          "Приняв участие на «Kids Expo: всё для детей» у компаний появятся:"
        )}
      </h3>

      <div className="grid grid-cols-2 grid-rows-2 gap-[42px]">
        {benefitsData.map((item) => (
          <div
            key={v4()}
            className="flex items-start px-4 py-6 bg-pureWhite rounded-sm gap-[10px] text-[14px] leading-[130%]"
          >
            <img src="/assets/icons/benefits-star.svg" alt="" />
            <p>{localization === "en" ? item.en : item.title}</p>
          </div>
        ))}
      </div>
    </SidebarLayout>
  );
};
