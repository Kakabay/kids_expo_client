import { CoverLayout } from "@/components/layout/CoverLayout";
import { useScrollTop, useTranslate } from "@/lib/utils";
import { Bus } from "lucide-react";

export const VisitorsInfo = () => {
  useScrollTop();

  const title = useTranslate(
    "Информация для посетителей",
    "Information for visitors"
  );

  const time = useTranslate("Часы работы:", "Opening hours:");
  const time2 = useTranslate(
    "21–22 августа: с 09:00 до 18:00",
    "August 21–22: from 09:00 to 18:00"
  );
  const time3 = useTranslate(
    "23 августа: с 09:00 до 16:00",
    "August 23: from 09:00 to 16:00"
  );

  const venue = useTranslate("Место проведения:", "Venue:");
  const venueText = useTranslate(
    "Выставочный центр Торгово-промышленной палаты Туркменистана",
    "Exhibition center of the Chamber of Commerce and Industry of Turkmenistan"
  );

  const buses = useTranslate("Автобусы:", "Buses:");

  return (
    <CoverLayout title={title}>
      <p className="md:text-[22px] text-[18px] leading-[130%] md:leading-[150%] font-light mb-12">
        {useTranslate(
          "С 21 по 23 августа 2025 года в Ашхабаде пройдет Международная универсальная выставка-ярмарка «Kids Expo: Всё для детей».",
          "From August 21 to 23, 2025, the International Universal Exhibition-Fair “Kids Expo: Everything for Children” will be held in Ashgabat"
        )}
      </p>

      <div className="flex flex-col justify-center items-center gap-8">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-8 lg:gap-[42px]">
          <div className="px-4 py-6 bg-pureWhite w-full h-full text-center rounded-sm">
            <img
              src="/assets/icons/visitors/time.svg"
              alt=""
              className="mb-4 mx-auto"
            />
            <h4 className="font-bold leading-[125%] mb-2">{time}</h4>
            <div className="leading-[150%]">
              {time2}

              <br />

              {time3}
            </div>
          </div>

          <div className="px-4 py-6 bg-pureWhite text-center w-full h-full rounded-sm">
            <img
              src="/assets/icons/visitors/location.svg"
              alt=""
              className="mb-4 mx-auto"
            />
            <h4 className="font-bold leading-[125%] mb-2">{venue}</h4>
            <p className="leading-[150%]">{venueText}</p>
          </div>
        </div>

        <div className="px-4 py-6 bg-pureWhite text-center flex flex-col items-center w-1/2 h-full rounded-sm">
          <Bus color="#ED5417" size={40} />
          <h4 className="font-bold leading-[125%] mb-2">{buses}</h4>
          <p className="leading-[150%]">35, 54, 56, 57, 58, 103, 121.</p>
        </div>
      </div>
    </CoverLayout>
  );
};
