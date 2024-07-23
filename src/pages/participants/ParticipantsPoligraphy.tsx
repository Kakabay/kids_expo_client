import { BreadCrumbs } from '../../components/ui/BreadCrumbs';
import { Title } from '../../components/ui/Title';
import useGetPrints from '../../hooks/participants/services/useGetPrints';
import { useTranslate } from '../../utils/useTranslate';

const ParticipantsPoligraphy = () => {
  const { data } = useGetPrints();

  return (
    <div>
      <BreadCrumbs
        second={useTranslate('Участникам', 'Participants')}
        third={useTranslate('Полиграфия', 'Услуги для экспонентов')}
      />
      <Title title={useTranslate('Полиграфия', 'Инженерные услуги')} mb32 />

      <div
        className="select-inner select-prints"
        dangerouslySetInnerHTML={{ __html: data ? data[0].content : '' }}
      />
    </div>
  );
};

export default ParticipantsPoligraphy;
