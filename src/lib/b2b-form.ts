import { z } from "zod";

export const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 МБ

export const formSchema = z.object({
  event_id: z.number().default(3),

  meeting_type: z.string(),
  company_name: z
    .string()
    .min(3, { message: "Название компании должно быть не менее 3 символов" }),
  contact_person: z
    .string()
    .min(3, { message: "Имя представителя должно быть не менее 3 символов" }),
  contact_person_position: z
    .string()
    .min(3, { message: "Должность должна быть не менее 3 символов" }),
  participant_count: z
    .string()
    .min(1, { message: "Укажите количество участников" }),
  country: z
    .string()
    .min(3, { message: "Название страны должно быть не менее 3 символов" }),
  email: z.string().email({ message: "Укажите корректный email" }),
  phone: z
    .string()
    .min(8, { message: "Номер телефона должен быть не менее 8 символов" }),
  web_site: z.string().optional(),

  main_purpose: z.string().min(3, { message: "Укажите цель встречи" }),
  short_description: z.string().optional(),
  department: z.string().optional(),
  industry: z.string().optional(),
  key_service: z.string().optional(),
  experience: z.string().optional(),

  preferred_date: z.string().optional(),
  preferred_meeting_type: z.string().optional(),
  preferred_language: z.string().optional(),
  extra_requirements: z.string().optional(),
  company_profile: z
    .custom<File>((value) => value instanceof File, {
      message: "Выберите корректный файл",
    })
    .refine(
      (file) =>
        file &&
        ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
      {
        message: "Допускаются только файлы JPG, PNG и PDF",
      }
    )
    .optional(),
  proposal_presentation: z
    .custom<File>((value) => value instanceof File, {
      message: "Выберите корректный файл",
    })
    .refine(
      (file) =>
        file &&
        ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
      {
        message: "Допускаются только файлы JPG, PNG и PDF",
      }
    )
    .optional(),
  relevant_certification: z
    .custom<File>((value) => value instanceof File, {
      message: "Выберите корректный файл",
    })
    .refine(
      (file) =>
        file &&
        ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
      {
        message: "Допускаются только файлы JPG, PNG и PDF",
      }
    )
    .optional(),
});

export type FormType = z.infer<typeof formSchema>;

export const defaultValuesOfB2b = {
  meeting_type: "b2b",
  company_name: "",
  contact_person: "",
  contact_person_position: "",
  country: "",
  email: "",
  phone: "",
  website: "",
  main_purpose: "",
  short_description: "",
  department: "",
  industry: "",
  key_service: "",
  experience: "",
  preferred_date: "",
  preferred_meeting_type: "",
  preferred_language: "",
  extra_requirements: "",
};
