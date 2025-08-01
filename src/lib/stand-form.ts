import { z } from "zod";

export type StandFormType = z.infer<typeof standFormSchema>;

export const standFormSchema = z.object({
  area_is_equipped: z.boolean(),
  event_id: z.number(),

  company_name: z
    .string()
    .min(3, { message: "Название компании должно быть не менее 3 символов" }),

  contact_person: z
    .string()
    .min(3, { message: "Имя представителя должно быть не менее 3 символов" }),

  contact_person_postion: z
    .string()
    .min(3, { message: "Должность должна быть не менее 3 символов" }),

  participant_count: z.preprocess(
    (val) => Number(val),
    z.number().min(1, "Укажите количество участников")
  ),

  country: z
    .string()
    .min(3, { message: "Название страны должно быть не менее 3 символов" }),

  email: z.string().email({ message: "Укажите корректный email" }),

  phone: z
    .string()
    .min(8, { message: "Номер телефона должен быть не менее 8 символов" }),

  website: z.string().optional(),

  viza_support: z.boolean().optional(),
});

export const standDefaultValues = {
  area_is_equipped: false,
  event_id: 3,
  company_name: "",
  contact_person: "",
  contact_person_postion: "",
  participant_count: 1,
  country: "",
  email: "",
  phone: "",
  website: "",
  viza_support: true,
};
