import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import expoService from "../../services/api/requests/expo.service";
import { SubmitModal } from "../../components/shared/SubmitModal";
import { useParticipantsForm } from "../../services/zustand/zusForm";
import { AnimatePresence } from "framer-motion";
import { CoverLayout } from "@/components/layout/CoverLayout";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface ResType {
  title?: string;
  titleEn?: string;
  id: number;
}

export const responseMethod: ResType[] = [
  {
    title: "телефон",
    titleEn: "phone",
    id: 1,
  },
  {
    title: "E-mail",
    titleEn: "E-mail",
    id: 2,
  },
];

const phoneNumberRegex = /^\+\d{11}$/;

const formSchema = z.object({
  event_id: z.number().default(3),
  area_is_equipped: z.boolean().default(false),

  company_name: z
    .string({ required_error: "Заполните поле!" })
    .min(2, "Минимальная длина 2 символа"),
  web_site: z.string().optional(),
  what_demonstrated: z.string().optional(),
  phone: z
    .string({ message: "Заполните поле!" })
    .refine((value) => phoneNumberRegex.test(value), {
      message: "Неверный формат номера телефона",
    }),
  email: z.string().email("Недействительный адрес электронной почты"),
  contact_person: z
    .string({ message: "Заполните поле!" })
    .min(5, "Минимальная длина 5 символов"),
  agree: z.boolean().refine((value) => value === true, {
    message: "Вы должны принять условия использования",
  }),
});

export default function ParticipantsApply() {
  const { t } = useTranslation("index");

  const labels = t("participantsApplication.labels", {
    returnObjects: true,
  }) as string[];

  type FormFields = z.infer<typeof formSchema>;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormFields) => {
    try {
      expoService.postParticipantForm({
        area_is_equipped: data.area_is_equipped,
        company_name: data.company_name,
        phone: data.phone,
        email: data.email,
        contact_person: data.contact_person,
        what_demonstrated: data.what_demonstrated ?? "",
        web_site: data.web_site ?? "",
      });
    } catch (error) {
      console.error(error, "POST participants apply");
    } finally {
      setSuccess("success");
    }

    reset();
  };

  const success = useParticipantsForm((state) => state.success);
  const setSuccess = useParticipantsForm((state) => state.setSuccess);

  return (
    <>
      <AnimatePresence>
        {success === "success" && <SubmitModal />}
      </AnimatePresence>

      <CoverLayout
        title={t("participantsApplication.title")}
        className="!w-[700px] mx-auto"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="company_name" className="form-label">
                {labels[0]}
                <span className="text-lightRed">*</span>
              </label>
              <input
                {...register("company_name")}
                name="company_name"
                id="company_name"
                type="text"
                className="form-input"
              />
              {errors.company_name && (
                <span className="text-lightRed">
                  {errors.company_name.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact_person" className="form-label">
                {labels[1]}
                <span className="text-lightRed">*</span>
              </label>
              <input
                {...register("contact_person")}
                name="contact_person"
                type="text"
                id="contact_person"
                className="form-input"
              />
              {errors.contact_person && (
                <span className="text-lightRed">
                  {errors.contact_person.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="web_site" className="form-label">
                {labels[2]}
              </label>
              <input
                {...register("web_site")}
                name="web_site"
                id="web_site"
                type="text"
                className="form-input"
              />
              {errors.web_site && (
                <span className="text-lightRed">{errors.web_site.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="form-label">
                {labels[3]}
                <span className="text-lightRed">*</span>
              </label>
              <input
                {...register("phone")}
                name="phone"
                id="phone"
                type="text"
                className="form-input"
              />
              {errors.phone && (
                <span className="text-lightRed">{errors.phone.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="form-label">
                E-mail:<span className="text-lightRed">*</span>
              </label>
              <input
                {...register("email")}
                name="email"
                id="email"
                type="text"
                className="form-input"
              />
              {errors.email && (
                <span className="text-lightRed">{errors.email.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="what_demonstrated" className="form-label">
                {labels[4]}
              </label>
              <textarea
                {...register("what_demonstrated")}
                rows={7}
                name="what_demonstrated"
                id="what_demonstrated"
                className="form-input !h-24 resize-none"
              />
              {errors.what_demonstrated && (
                <span className="text-lightRed">
                  {errors.what_demonstrated.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2 cursor-pointer">
            <div className="flex items-center">
              <input
                {...register("agree")}
                name="agree"
                id="agree"
                type="checkbox"
                className="form-input cursor-pointer real-checkbox"
              />
              <span className="fake-checkbox" />

              <label
                htmlFor="agree"
                className="text-[13px] cursor-pointer pl-[10px]"
              >
                {labels[5]}
              </label>
            </div>
            {errors.agree && (
              <p className="text-lightRed">{errors.agree.message}</p>
            )}
          </div>

          <Button>{t("send")}</Button>
        </form>
      </CoverLayout>
    </>
  );
}
