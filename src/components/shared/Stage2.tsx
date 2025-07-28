import { FC } from "react";
import { FieldError, useFormContext } from "react-hook-form";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLang } from "@/services/zustand/zusLang";
import { useArrayIndex, useScrollTop } from "@/lib/utils";
import { Field } from "./Field";
import { b2bStage2 } from "@/database/b2b.data";

interface Props {
  className?: string;
  handleNext: VoidFunction;
  handlePrev: VoidFunction;
}

export const Stage2: FC<Props> = ({ handleNext, handlePrev }) => {
  useScrollTop();

  const lang = useLang((state) => state.activeLang.localization);
  const { control, formState } = useFormContext();

  const translate = useArrayIndex(lang);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.3 } }}
      exit={{ opacity: 0, y: 100 }}
    >
      <h2 className="h2 mb-8">{b2bStage2[translate].h2}</h2>

      <div className="flex flex-col gap-8">
        <Field
          control={control}
          name={"meeting_purpose"}
          error={formState.errors.meeting_purpose as FieldError}
          placeholder=""
          label={b2bStage2[translate].data[0].label}
        />
        <Field
          control={control}
          name={"project_description"}
          error={formState.errors.project_description as FieldError}
          placeholder=""
          label={b2bStage2[translate].data[1].label}
        />
        <Field
          control={control}
          name={"government_agency"}
          error={formState.errors.government_agency as FieldError}
          placeholder=""
          label={b2bStage2[translate].data[2].label}
        />

        <h2 className="h2 mt-4">{b2bStage2[translate].secondH2}</h2>

        <Field
          control={control}
          name={"industry"}
          error={formState.errors.industry as FieldError}
          placeholder=""
          label={b2bStage2[translate].data[3].label}
        />
        <Field
          control={control}
          name={"key_services"}
          error={formState.errors.key_services as FieldError}
          placeholder=""
          label={b2bStage2[translate].data[4].label}
        />
        <Field
          control={control}
          name={"gov_experience"}
          error={formState.errors.gov_experience as FieldError}
          placeholder=""
          label={b2bStage2[translate].data[5].label}
        />
      </div>

      <div className="flex items-center gap-6 mt-10">
        <Button
          type="button"
          onClick={handlePrev}
          variant={"outline"}
          className="text-on_surface border-0 text-text-interactive"
        >
          {lang === "ru" ? "Назад" : "Back"}
        </Button>

        <Button
          variant={"outline"}
          type="button"
          onClick={handleNext}
          className="w-full"
        >
          {lang === "ru" ? "Далее" : "Next"}
        </Button>
      </div>
    </motion.div>
  );
};
