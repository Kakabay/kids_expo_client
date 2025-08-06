import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { defaultValuesOfB2b, formSchema, FormType } from "@/lib/b2b-form";
import { Form } from "@/components/ui/form";

import { FormSuccesStatus } from "./FormSuccessStatus";
import { Stage1 } from "./Stage1";
import { Stage2 } from "./Stage2";
import { Stage3 } from "./Stage3";

interface Props {
  stage: number;
  setStage: (i: number | any) => void;

  success: boolean;
  setSuccess: (status: boolean) => void;
}

export const B2bForm: FC<Props> = ({
  stage,
  setStage,
  success,
  setSuccess,
}) => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValuesOfB2b,
    mode: "onChange",
  });

  const getFieldsForStage = (currentStage: number): (keyof FormType)[] => {
    switch (currentStage) {
      case 1:
        return [
          "meeting_type",
          "company_name",
          "contact_person",
          "contact_person_position",
          "participant_count",
          "country",
          "email",
          "phone",
          "web_site",
        ];
      case 2:
        return [
          "main_purpose",
          "short_description",
          "department",
          "industry",
          "key_service",
          "experience",
        ];
      case 3:
        return [
          "preferred_date",
          "preferred_meeting_type",
          "preferred_language",
          "extra_requirements",
          "company_profile",
          "proposal_presentation",
          "relevant_certification",
        ];
      default:
        return [];
    }
  };

  const handleNext = async () => {
    const fieldsToValidate = getFieldsForStage(stage);
    const isValid = await form.trigger(fieldsToValidate);

    if (isValid) {
      setStage((prev: number) => prev + 1);
    }
  };

  const handlePrev = () => setStage((prev: number) => prev - 1);

  const onSubmit = async (values: FormType) => {
    try {
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        if (
          key !== "company_profile" &&
          key !== "proposal_presentation" &&
          key !== "relevant_certification" &&
          value !== undefined &&
          !(value instanceof File)
        ) {
          formData.append(key, value as string);
        }
      });

      const documents = [
        values.company_profile,
        values.proposal_presentation,
        values.relevant_certification,
      ].filter(Boolean);

      documents.forEach((file) => {
        formData.append("documents[]", file as File);
      });

      const res = await axios.post(
        "https://editor.turkmenexpo.com/api/v1/applications/meeting",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 201) {
        setSuccess(true);
      }
    } catch (error) {
      console.error("Ошибка при отправке B2B формы:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="relative">
          <AnimatePresence>
            {stage === 1 && <Stage1 handleNext={handleNext} />}
          </AnimatePresence>
          <AnimatePresence>
            {stage === 2 && (
              <Stage2 handleNext={handleNext} handlePrev={handlePrev} />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {stage === 3 && success === false && (
              <Stage3 handlePrev={handlePrev} />
            )}
          </AnimatePresence>

          {success && <FormSuccesStatus />}
        </div>
      </form>
    </Form>
  );
};
