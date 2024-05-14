import { v4 } from 'uuid';
import { SidebarLayout } from '../../components/global/SidebarLayout';
import { BreadCrumbs } from '../../components/ui/BreadCrumbs';
import { Title } from '../../components/ui/Title';
import { useLang } from '../../services/zustand/zusLang';
import useGetBenefits from '../../hooks/participants/useGetBenefits';

export const ParticipantsBenefits = () => {
  const localization = useLang((state) => state.activeLang.localization);
  const chooseDataLang = (en: string, ru: string) => (localization === 'en' ? en : ru);

  const { benefitsData, benefitsIsError, benefitsIsLoading, benefitsIsSuccess } = useGetBenefits();

  return (
    <SidebarLayout>
      <BreadCrumbs
        second={chooseDataLang('Participations', 'Участникам')}
        path="/participants-info"
        third={chooseDataLang('Benefits of participations', 'Преимущества участия')}
      />

      <Title title={chooseDataLang('Benefits of participations', 'Преимущества участия')} mb24 />

      <h3 className="text-[21px] md:leading-[100%] leading-[115%] font-semibold mb-[42px]">
        {chooseDataLang(
          'By taking part in “Kids Expo: Everything for Children”, companies will have:',
          'Приняв участие на «Kids Expo: всё для детей» у компаний появятся:',
        )}
      </h3>

      <div className="grid min-[1150px]:grid-cols-2 grid-cols-1 grid-rows-2 gap-6 min-[1150px]gap-[42px]">
        {benefitsData
          ? benefitsData.map((item) => (
              <div
                key={v4()}
                className="flex items-start px-4 py-6 bg-pureWhite rounded-sm gap-[10px] text-[14px] leading-[130%]">
                <img src="/assets/icons/benefits-star.svg" alt="" />
                <p>{item.text}</p>
              </div>
            ))
          : null}
      </div>
    </SidebarLayout>
  );
};
