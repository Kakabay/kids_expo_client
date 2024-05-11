import { useForm } from 'react-hook-form';
import { SidebarLayout } from '../../components/global/SidebarLayout';
import { BreadCrumbs } from '../../components/ui/BreadCrumbs';
import { Title } from '../../components/ui/Title';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// import DropDown from '../../components/ui/DropDown';
import expoService from '../../services/api/requests/expo.service';
import { useLang } from '../../services/zustand/zusLang';
// import { useParticipantsForm } from '../../services/zustand/zusForm';

interface ResType {
  title?: string;
  titleEn?: string;
  id: number;
}

export const responseMethod: ResType[] = [
  {
    title: 'телефон',
    titleEn: 'phone',
    id: 1,
  },
  {
    title: 'E-mail',
    titleEn: 'E-mail',
    id: 2,
  },
];

const phoneNumberRegex = /^\+\d{11}$/;

const ParticipantsApply = () => {
  const formSchema = z.object({
    company_name: z
      .string({ required_error: 'Заполните поле!' })
      .min(2, 'Минимальная длина 2 символа'),
    web_site: z.string().optional(),
    what_demonstrated: z.string().optional(),
    // area: z.string().refine((value) => (value === '' ? true : /^-?\d+(\.\d+)?$/.test(value)), {
    //   message: 'Площадь должна быть указана в цифрах',
    // }),
    phone: z
      .string({ message: 'Заполните поле!' })
      .refine((value) => phoneNumberRegex.test(value), {
        message: 'Неверный формат номера телефона',
      }),
    email: z.string().email('Недействительный адрес электронной почты'),
    contact_person: z.string({ message: 'Заполните поле!' }).min(5, 'Минимальная длина 5 символов'),
    // equipment: z.enum(['not-equipment', 'equipment'], {
    //   message: 'Выберите один из параметров',
    // }),
    agree: z.boolean().refine((value) => value === true, {
      message: 'Вы должны принять условия использования',
    }),
  });

  type FormFields = z.infer<typeof formSchema>;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  });

  const chooseDataLang = (en: string, ru: string) => (localization === 'en' ? en : ru);

  const localization = useLang((state) => state.activeLang.localization);
  // const activeresponseMethod = useParticipantsForm((state) => state.activeMethod.id);

  const onSubmit = (data: FormFields) => {
    console.log(data);
    expoService.postParticipantForm({
      company_name: data.company_name,
      phone: data.phone,
      email: data.email,
      area: 0,
      // response_method: activeresponseMethod,
      contact_person: data.contact_person,
      // area_is_equipped: data.equipment === 'equipment' ? true : false,
      what_demonstrated: data.what_demonstrated ? data.what_demonstrated : '',
      web_site: data.web_site ? data.web_site : '',
    });
    reset();
  };

  return (
    <SidebarLayout>
      <BreadCrumbs
        second={chooseDataLang('Participants', 'Участникам')}
        third={chooseDataLang('Application for participation', 'Онлайн-заявка для участников')}
      />

      <Title
        title={chooseDataLang('Application for participation', 'Онлайн-заявка для участников')}
        mb32
      />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-[540px]">
        <div className="flex flex-col gap-4">
          <label htmlFor="company_name" className="form-label">
            {chooseDataLang('Company name:', 'Название компании:')}
            <span className="text-lightRed">*</span>
          </label>
          <input
            {...register('company_name')}
            name="company_name"
            id="company_name"
            type="text"
            className="form-input"
          />
          {errors.company_name && (
            <span className="text-lightRed">{errors.company_name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="contact_person" className="form-label">
            {chooseDataLang('Contact person (full name):', 'Контактное лицо (Ф.И.О.):')}
            <span className="text-lightRed">*</span>
          </label>
          <input
            {...register('contact_person')}
            name="contact_person"
            type="text"
            id="contact_person"
            className="form-input"
          />
          {errors.contact_person && (
            <span className="text-lightRed">{errors.contact_person.message}</span>
          )}

          <div className="flex flex-col gap-4">
            <label htmlFor="web_site" className="form-label">
              {chooseDataLang('Web site:', 'Веб-сайт:')}
            </label>
            <input
              {...register('web_site')}
              name="web_site"
              id="web_site"
              type="text"
              className="form-input"
            />
            {errors.web_site && <span className="text-lightRed">{errors.web_site.message}</span>}
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="phone" className="form-label">
              {chooseDataLang('Phone:', 'Телефон:')}
              <span className="text-lightRed">*</span>
            </label>
            <input
              {...register('phone')}
              name="phone"
              id="phone"
              type="text"
              className="form-input"
            />
            {errors.phone && <span className="text-lightRed">{errors.phone.message}</span>}
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="form-label">
              E-mail:<span className="text-lightRed">*</span>
            </label>
            <input
              {...register('email')}
              name="email"
              id="email"
              type="text"
              className="form-input"
            />
            {errors.email && <span className="text-lightRed">{errors.email.message}</span>}
          </div>

          {/* <div className="flex flex-col gap-4">
          <label htmlFor="area" className="form-label">
            {chooseDataLang('Required area, m2', 'Требуемая площадь, м2')}
          </label>
          <input {...register('area')} name="area" id="area" type="string" className="form-input" />
          {errors.area && <span className="text-lightRed">{errors.area.message}</span>}
        </div> */}

          <div className="flex flex-col gap-4">
            <label htmlFor="what_demonstrated" className="form-label">
              {chooseDataLang(
                'Products / equipment / services demonstrated:',
                'Демонстрируемая продукция / оборудование / услуги:',
              )}
            </label>
            <textarea
              {...register('what_demonstrated')}
              rows={7}
              name="what_demonstrated"
              id="what_demonstrated"
              className="form-input"
            />
            {errors.what_demonstrated && (
              <span className="text-lightRed">{errors.what_demonstrated.message}</span>
            )}
          </div>
        </div>

        {/* <DropDown /> */}

        {/* <div className="flex flex-col gap-4">
          <p className="text-[14px] leading-[140%] w-full">
            {chooseDataLang(
              'Products  /equipment / services demonstrated',
              'Демонстрируемая продукция / оборудование / услуги',
            )}
          </p>
          <div className="flex items-center gap-[10px]">
            <input
              {...register('equipment')}
              name="equipment"
              type="radio"
              id="equipment"
              className="form-input cursor-pointer"
              value={'equipment'}
            />
            <label htmlFor="equipment" className="text-[13px] cursor-pointer">
              {chooseDataLang('Equipped', 'Оборудованная')}
            </label>
          </div>

          <div className="flex items-center gap-[10px]">
            <input
              {...register('equipment')}
              name="equipment"
              type="radio"
              id="not-equipment"
              className="form-input cursor-pointer"
              value={'not-equipment'}
            />
            <label htmlFor="not-equipment" className="text-[13px] cursor-pointer">
              {chooseDataLang('unequipped', 'необорудованная')}
            </label>
          </div>
          {errors.equipment && <span className="text-lightRed">{errors.equipment.message}</span>}
        </div> */}

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <input
              {...register('agree')}
              name="agree"
              id="agree"
              type="checkbox"
              className="form-input cursor-pointer"
            />
            <label htmlFor="agree" className="text-[13px] cursor-pointer">
              {chooseDataLang(
                'I agree to the processing of my data',
                'Даю согласие на обработку своих данных',
              )}
            </label>
          </div>
          {errors.agree && <p className="text-lightRed">{errors.agree.message}</p>}
        </div>

        <button className="w-full py-[17px] bg-purple text-white">
          {chooseDataLang('Send', 'Отправить')}
        </button>
      </form>
    </SidebarLayout>
  );
};

export default ParticipantsApply;
