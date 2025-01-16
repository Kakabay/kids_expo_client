import Loader from '../../components/Loader';
import { BreadCrumbs } from '../../components/ui/BreadCrumbs';
import { Title } from '../../components/ui/Title';
import useGetHotels from '../../hooks/participants/services/useGetHotels';
import { useTranslate } from '../../utils/useTranslate';

const ParticipantsHotels = () => {
  const { data, isLoading } = useGetHotels();

  return (
    <div>
      <BreadCrumbs
        second={useTranslate('Участникам', 'Participants')}
        third={useTranslate('Размещение в гостиницах', 'Услуги для экспонентов')}
      />
      <Title title={useTranslate('Туристические услуги', 'Туристические услуги')} mb32 />

      <div
        className="select-inner"
        dangerouslySetInnerHTML={{ __html: data ? data[0].content : '' }}
      />

      {/* <div className="flex flex-col gap-8">
        <div className="h-[305px] relative w-full">
          <img src="" alt="" />

          <div className="flex items-center justify-center bg-purple text-white py-5 rounded-[0_0_5px_5px] font-medium">
            <div className="">Гостиница «Арчабиль» 5*</div>
          </div>
        </div>
      </div> */}
      {isLoading && <Loader />}
    </div>
  );
};

export default ParticipantsHotels;
