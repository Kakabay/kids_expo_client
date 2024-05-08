import { useForm } from "react-hook-form";
import { SidebarLayout } from "../../components/global/SidebarLayout";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DropDown from "../../components/ui/DropDown";

interface ResType {
  title: string;
  id: string;
}

export const responseMethod: ResType[] = [
  {
    title: "телефон",
    id: "phone",
  },
  {
    title: "E-mail",
    id: "email",
  },
];

const ParticipantsApply = () => {
  const formSchema = z.object({
    company_name: z.string({ required_error: "Заполните поле!" }),
    web_site: z.string().optional(),
    address: z.string().optional(),
    phone: z.string({ message: "Заполните поле!" }),
    email: z.string().email("Недействительный адрес электронной почты"),
    contact_person: z.string({ message: "Заполните поле!" }),
    position: z.string({ message: "Заполните поле!" }),
    close_area: z.string().optional(),
    open_area: z.string().optional(),
    note: z.string().optional(),
    product_info: z.string().optional(),
    trademarks: z.string().optional(),
    country_trademarks: z.string().optional(),
    agree: z.boolean(),
  });

  type FormFields = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormFields) => {
    console.log(data);
  };

  return (
    <SidebarLayout>
      <BreadCrumbs second="Участникам" third="Заявка на участие" />

      <Title title="Заявка на участие" mb32 />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-[540px]"
      >
        <div className="flex flex-col gap-4">
          <label htmlFor="company_name" className="form-label">
            Название фирмы<span className="text-lightRed">*</span>
          </label>
          <input
            {...register("company_name")}
            name="company_name"
            type="text"
            className="form-input"
          />
          {errors.company_name && (
            <span className="text-lightRed">{errors.company_name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="web_site" className="form-label">
            Сайт
          </label>
          <input
            {...register("web_site")}
            name="web_site"
            type="text"
            className="form-input"
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="phone" className="form-label">
            Телефон:<span className="text-lightRed">*</span>
          </label>
          <input
            {...register("phone")}
            name="phone"
            type="text"
            className="form-input"
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="email" className="form-label">
            E-mail:<span className="text-lightRed">*</span>
          </label>
          <input
            {...register("email")}
            name="email"
            type="text"
            className="form-input"
          />
          {errors.email && (
            <span className="text-lightRed">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="contact_person" className="form-label">
            Контактное лицо (Ф.И.О.):<span className="text-lightRed">*</span>
          </label>
          <input
            {...register("contact_person")}
            name="contact_person"
            type="text"
            className="form-input"
          />
        </div>

        <DropDown />

        <div className="flex flex-col gap-4">
          <p className="text-[14px] leading-[140%] w-full">
            Демонстрируемая продукция / оборудование / услуги
          </p>
          <div className="flex items-center gap-[10px]">
            <input
              {...register("agree")}
              name="agree"
              type="radio"
              className="form-input cursor-pointer"
            />
            <label htmlFor="agree" className="text-[13px] cursor-pointer">
              Оборудованная
            </label>
          </div>

          <div className="flex items-center gap-[10px]">
            <input
              {...register("agree")}
              name="agree"
              type="radio"
              className="form-input cursor-pointer"
            />
            <label htmlFor="agree" className="text-[13px] cursor-pointer">
              Необорудованная
            </label>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <input
            {...register("agree")}
            name="agree"
            type="checkbox"
            className="form-input cursor-pointer"
          />
          <label htmlFor="agree" className="text-[13px] cursor-pointer">
            Даю согласие на обработку своих данных
          </label>
        </div>

        <button className="w-full py-[17px] bg-purple text-white">
          Отправить
        </button>
      </form>
    </SidebarLayout>
  );
};

export default ParticipantsApply;
