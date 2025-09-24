import { z } from "zod";

export type SponsorFormType = z.infer<typeof sponsorFormSchema>;

export const sponsorFormSchema = z.object({
  event_id: z.number().min(1, { message: "Выберите мероприятие" }),
  area_is_equipped: z.boolean().default(false),
  company_name: z
    .string()
    .min(3, { message: "Название компании должно быть не менее 3 символов" }),

  contact_person: z
    .string()
    .min(3, { message: "Имя представителя должно быть не менее 3 символов" }),

  contact_person_position: z
    .string()
    .min(3, { message: "Должность должна быть не менее 3 символов" }),

  country: z
    .string()
    .min(3, { message: "Название страны должно быть не менее 3 символов" }),

  email: z.string().email({ message: "Укажите корректный email" }),

  phone: z
    .string()
    .min(8, { message: "Номер телефона должен быть не менее 8 символов" }),

  website: z.string().optional(),

  viza_support: z.boolean(),
});

export const sponsorDefaultValues = {
  event_id: 3,
  company_name: "",
  contact_person: "",
  contact_person_position: "",
  country: "",
  email: "",
  phone: "",
  website: "",
  viza_support: false,
};
