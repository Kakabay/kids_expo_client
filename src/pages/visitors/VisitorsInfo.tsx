import { CoverLayout } from "@/components/layout/CoverLayout";
import { useScrollTop, useTranslate } from "@/lib/utils";

export const VisitorsInfo = () => {
  useScrollTop();

  const title = useTranslate(
    "Информация для посетителей",
    "Information for visitors"
  );

  return (
    <CoverLayout title={title}>
      <p className="md:text-[22px] text-[18px] leading-[130%] md:leading-[150%] font-light mb-12">
        {useTranslate(
          "С 21 по 23 августа 2025 года в Ашхабаде пройдет Международная универсальная выставка-ярмарка «Kids Expo: Всё для детей».",
          "From August 21 to 23, 2025, the International Universal Exhibition-Fair “Kids Expo: Everything for Children” will be held in Ashgabat"
        )}
      </p>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-8 lg:gap-[42px]">
        <div className="px-4 py-6 bg-pureWhite w-full h-full text-center rounded-sm">
          <img
            src="/assets/icons/visitors/time.svg"
            alt=""
            className="mb-4 mx-auto"
          />
          <h4 className="font-bold leading-[125%] mb-2">
            {useTranslate("Часы работы:", "Opening hours:")}
          </h4>
          <div className="leading-[150%]">
            {useTranslate(
              "21–22 августа: с 09:00 до 18:00",
              "August 21–22: from 09:00 to 18:00"
            )}

            <br />

            {useTranslate(
              "23 августа: с 09:00 до 16:00",
              "August 23: from 09:00 to 16:00"
            )}
          </div>
        </div>

        <div className="px-4 py-6 bg-pureWhite text-center w-full h-full rounded-sm">
          <img
            src="/assets/icons/visitors/location.svg"
            alt=""
            className="mb-4 mx-auto"
          />
          <h4 className="font-bold leading-[125%] mb-2">
            {useTranslate("Место проведения:", "Venue:")}
          </h4>
          <p className="leading-[150%]">
            {useTranslate(
              "Выставочный центр Торгово-промышленной палаты Туркменистана",
              "Exhibition center of the Chamber of Commerce and Industry of Turkmenistan"
            )}
          </p>
        </div>
      </div>
    </CoverLayout>
  );
};
