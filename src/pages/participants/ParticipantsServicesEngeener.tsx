import { BlankButton } from '../../components/Participants/BlanButton';
import { ThemeCardAccordion } from '../../components/Theme/ThemeCard';
import { BreadCrumbs } from '../../components/ui/BreadCrumbs';
import { Title } from '../../components/ui/Title';
import { engeenerServicesData } from '../../database/participantsServices.data';
import { useTranslate } from '../../utils/useTranslate';

const ParticipantsServicesEngeener = () => {
  return (
    <div>
      <BreadCrumbs
        second={useTranslate('Участникам', 'Participants')}
        third={useTranslate('Услуги для экспонентов', 'Услуги для экспонентов')}
      />
      <Title title={useTranslate('Инженерные услуги', 'Инженерные услуги')} mb32 />

      <div className="border-b-[1px] border-[#DADADA] mb-8">
        {engeenerServicesData.map((item, i) => (
          <ThemeCardAccordion {...item} key={i} />
        ))}
      </div>

      <BlankButton path="" />
    </div>
  );
};

export default ParticipantsServicesEngeener;
