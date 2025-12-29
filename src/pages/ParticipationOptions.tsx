import { CoverLayout } from "@/components/layout/CoverLayout";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/lib/utils";
import { useLang } from "@/services/zustand/zusLang";

const exampleImage = "/about-place.jpg";

const participationOptionsContent = {
  title: {
    ruText: "Варианты участия",
    enText: "Participation Options",
    tmText: "Gatnaşyk görnüşleri",
  },
  exhibitionSpace: {
    ruText: "Аренда выставочной площади",
    enText: "Exhibition Space Rental",
    tmText: "Sergi meýdançasynyň kireýine alynmagy",
  },
  spaceOnly: {
    ruText: "Необорудованная площадь",
    enText: "Space Only",
    tmText: "Enjamsyz meýdança",
  },
  example: {
    ruText: "Пример",
    enText: "Example",
    tmText: "Mysal",
  },
  spaceOnlyDescription: {
    ruText:
      "Чистая площадь для последующей застройки (стандартная застройка или по индивидуальному дизайну). Включает: общую уборку и охрану павильона. Электричество в стоимость не включено.",
    enText:
      "Raw exhibition space for subsequent construction (standard booth or customized design). Includes general cleaning and pavilion security. Electricity is not included in the price.",
    tmText:
      "Soňky gurluşyk üçin niýetlenen arassa sergi meýdançasy (standart gurluşyk ýa-da aýratyn dizaýn boýunça). Bahasyna pawilýonyň umumy arassalanyşy we howpsuzlygy girýär. Elektrik üpjünçiligi bahasyna girmeýär.",
  },
  standardBooth: {
    ruText: "Стандартная застройка",
    enText: "Standard Booth Construction",
    tmText: "Standart gurluşyk",
  },
  customBooth: {
    ruText: "Индивидуальный дизайн",
    enText: "Custom Booth Design",
    tmText: "Aýratyn dizaýn",
  },
  boothExampleDescription: {
    ruText:
      "Включает: базовое электроподключение (220V - 2 кВт), стены (стандартные или индивидуальный дизайн). Общую уборку и охрану павильона.",
    enText:
      "Includes: basic electrical connection (220V - 2 kW), walls (standard or customized design), general cleaning, and pavilion security.",
    tmText:
      "Bahasyna girýär: esasy elektrik üpjünçiligi (220V – 2 kWt), diwarlar (standart ýa-da aýratyn dizaýn boýunça), pawilýonyň umumy arassalanyşy we howpsuzlygy.",
  },
  registrationFee: {
    ruText: "Участие со стендом включает регистрационную оплату.",
    enText: "Participation with a booth includes a registration fee.",
    tmText: "Stend bilen gatnaşmak hasaba alyş tölegini öz içine alýar.",
  },
  pricingNote: {
    ruText: "Пожалуйста уточните стоимость у менеджера проекта.",
    enText: "Please check the pricing with the project manager.",
    tmText:
      "Bahany anyklamak üçin taslama dolandyryjysy bilen habarlaşmagyňyzy haýyş edýäris.",
  },
  partnershipTitle: {
    ruText: "Партнёрские возможности",
    enText: "Partnership Opportunities",
    tmText: "Hyzmatdaşlyk mümkinçilikleri",
  },
  partnershipIntro: {
    ruText:
      'Если Вы заинтересованы в более активном выходе на рынок или целью Вашей компании является максимальное продвижение на рынок, используйте пакет "Партнерство выставки". Приобретая данную опцию, Вы получаете:',
    enText:
      'If your company is interested in a more active market presence or aims to maximize market promotion, we recommend the "Exhibition Partnership" package. By choosing this option, you will receive:',
    tmText:
      'Eger kompaniýaňyz bazarda has işjeň çykyş etmek isleýän bolsa ýa-da maksadyňyz bazarda giňden tanalmak bolsa, "Sergi hyzmatdaşlygy" paketini saýlamagy maslahat berýäris. Bu paket size şulary hödürleýär:',
  },
  partnershipItems: [
    {
      ruText: "Статус Партнера выставки, в зависимости от выбранного пакета",
      enText: "Exhibition Partner status, depending on the selected package",
      tmText: "Saýlanan paketiňize görä Serginiň hyzmatdaşlygy derejesi",
    },
    {
      ruText:
        "Масштабную рекламную кампанию (размещение логотипа компании на всей рекламной продукции выставки)",
      enText:
        "A large-scale advertising campaign (placement of your company logo on all exhibition promotional materials)",
      tmText:
        "Kämil reklama kampaniýasy (kompaniýa logotipiňiziň serginiň ähli reklama materiallarynda ýerleşdirilmegi)",
    },
    {
      ruText: "Широкую узнаваемость",
      enText: "Wide recognition",
      tmText: "Giň tanalmak we üns çekmek",
    },
    {
      ruText: "Ассоциирование выставки с именем Вашей компании и др.",
      enText:
        "Association of the exhibition with your company's name, and more",
      tmText:
        "Sergini kompaniýa adyňyz bilen baglanyşdyrmak we başga-da birnäçe artykmaçlyklar",
    },
  ],
  partnershipNote: {
    ruText: "Пожалуйста, уточните стоимость у менеджера проекта.",
    enText: "Please contact the project manager to clarify the cost.",
    tmText:
      "Baha we giňişleýin maglumat üçin proýekt menežeri bilen habarlaşmagyňyzy haýyş edýäris.",
  },
  exampleImageAlt: {
    ruText: "Пример площадки",
    enText: "Example space",
    tmText: "Meýdança mysaly",
  },
  standardExampleAlt: {
    ruText: "Пример стандартной застройки",
    enText: "Standard booth example",
    tmText: "Standart gurluşyk mysaly",
  },
  customExampleAlt: {
    ruText: "Пример индивидуального дизайна",
    enText: "Custom booth example",
    tmText: "Aýratyn dizaýn mysaly",
  },
};

const ArrowIcon = () => (
  <svg
    width="14"
    height="20"
    viewBox="0 0 14 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M7 1V15M7 15L2 10M7 15L12 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ParticipationOptions() {
  useScrollTop();
  const lang = useLang((state) => state.activeLang.localization);
  const getText = (item: { ruText: string; enText: string; tmText: string }) =>
    lang === "ru" ? item.ruText : lang === "tm" ? item.tmText : item.enText;

  return (
    <CoverLayout title={getText(participationOptionsContent.title)}>
      <div className="mx-auto max-w-[900px] text-on_surface">
        <p className="mb-10 text-3xl font-medium">
          {getText(participationOptionsContent.title)}
        </p>

        <Button className="mb-2 md:text-sm w-full">
          1. {getText(participationOptionsContent.exhibitionSpace)}
        </Button>

        <Button
          variant={"outline"}
          className="w-full mb-10 border border-primary py-1 text-center text-sm text-primary md:text-sm"
        >
          {getText(participationOptionsContent.spaceOnly)}
        </Button>

        <p className="mb-5 text-center text-sm">
          {getText(participationOptionsContent.example)}
        </p>

        <div className="mx-auto h-[180px] w-full max-w-[754px] md:h-[377px]">
          <img
            src={exampleImage}
            alt={getText(participationOptionsContent.exampleImageAlt)}
            className="size-full rounded-sm object-cover"
          />
        </div>

        <div className="mt-5 text-center text-sm leading-relaxed">
          <p>{getText(participationOptionsContent.spaceOnlyDescription)}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="w-full flex flex-col items-center gap-2 text-primary">
            <ArrowIcon />
            <div className="w-full border border-primary py-1 text-center text-sm text-primary md:text-sm">
              {getText(participationOptionsContent.standardBooth)}
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 text-primary">
            <ArrowIcon />
            <div className="w-full border border-primary py-1 text-center text-sm text-primary md:text-sm">
              {getText(participationOptionsContent.customBooth)}
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <p className="mb-5 text-sm">
              {getText(participationOptionsContent.example)}:
            </p>
            <img
              src={exampleImage}
              alt={getText(participationOptionsContent.standardExampleAlt)}
              className="h-[160px] w-full rounded-sm object-cover md:h-[190px]"
            />
            <p className="mt-2 text-sm leading-relaxed">
              {getText(participationOptionsContent.boothExampleDescription)}
            </p>
          </div>
          <div>
            <p className="mb-5 text-sm">
              {getText(participationOptionsContent.example)}:
            </p>
            <img
              src={exampleImage}
              alt={getText(participationOptionsContent.customExampleAlt)}
              className="h-[160px] w-full rounded-sm object-cover md:h-[190px]"
            />
            <p className="mt-2 text-sm leading-relaxed">
              {getText(participationOptionsContent.boothExampleDescription)}
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-on_surface">
          {getText(participationOptionsContent.registrationFee)}
        </p>
        <p className="text-center text-sm">
          {getText(participationOptionsContent.pricingNote)}
        </p>

        <div className="mt-6 bg-primary py-3 text-center text-xs font-medium text-on_primary md:text-sm">
          2. {getText(participationOptionsContent.partnershipTitle)}
        </div>

        <div className="mt-3 text-sm leading-relaxed">
          <p className="mb-2">
            {getText(participationOptionsContent.partnershipIntro)}
          </p>
          <ul className="list-disc pl-5">
            {participationOptionsContent.partnershipItems.map((item) => (
              <li key={item.enText}>{getText(item)}</li>
            ))}
          </ul>
          <p className="mt-2">
            {getText(participationOptionsContent.partnershipNote)}
          </p>
        </div>
      </div>
    </CoverLayout>
  );
}
