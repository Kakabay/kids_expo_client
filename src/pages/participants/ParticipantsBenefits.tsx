import useGetBenefits from "../../hooks/participants/useGetBenefits";
import Loader from "../../components/shared/Loader";
import { CoverLayout } from "@/components/layout/CoverLayout";
import { useTranslation } from "react-i18next";

export const ParticipantsBenefits = () => {
  const { benefitsData, benefitsIsLoading } = useGetBenefits();
  const { t } = useTranslation("index");

  const { title, text } = t("participantsBenefits", {
    returnObjects: true,
  }) as { title: string; text: string };

  return (
    <CoverLayout title={title}>
      <h3 className="text-[21px] md:leading-[100%] leading-[115%] font-semibold mb-[42px]">
        {text}
      </h3>

      <div className="grid min-[1150px]:grid-cols-2 grid-cols-1 grid-rows-2 gap-6 min-[1150px]gap-[42px]">
        {benefitsData
          ? benefitsData.map((item, i) => (
              <div
                key={i}
                className="flex items-start px-4 py-6 bg-pureWhite rounded-sm gap-[10px] text-[14px] leading-[130%]"
              >
                <img src="/assets/icons/benefits-star.svg" alt="" />
                <p>{item.text}</p>
              </div>
            ))
          : null}
      </div>
      {benefitsIsLoading && <Loader />}
    </CoverLayout>
  );
};
