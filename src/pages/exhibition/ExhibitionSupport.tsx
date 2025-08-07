import { CoverLayout } from "@/components/layout/CoverLayout";
import { useTranslate } from "@/lib/useTranslate";

export const ExhibitionSupport = () => {
  const title = useTranslate("informationSupport");
  const supportTitle = useTranslate("supportPage.title");

  return (
    <CoverLayout title={title}>
      <h2 className="text-3xl font-semibold leading-[120%] mb-[22px]">
        {supportTitle}
      </h2>

      <div className="flex flex-col gap-4 sm:gap-3">
        <div className="flex flex-col gap-[10px] leading-[125%]">
          <div className="flex items-center">
            <img src="/assets/icons/exhibition-support/phone.svg" alt="" />
            <p>+993 71 87-18-13</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/assets/icons/exhibition-support/mail.svg" alt="" />
            <p className="text-purple">contact@turkmenexpo.com</p>
          </div>
        </div>
      </div>
    </CoverLayout>
  );
};
