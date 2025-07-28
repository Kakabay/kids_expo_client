import { FC } from "react";
import { motion } from "framer-motion";
import { FieldError, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { useLang } from "@/services/zustand/zusLang";
import { Field } from "./Field";
import { b2bStage3 } from "@/database/b2b.data";
import { useArrayIndex, useScrollTop } from "@/lib/utils";

interface Props {
  className?: string;
  handlePrev: VoidFunction;
}

export const Stage3: FC<Props> = ({ handlePrev }) => {
  useScrollTop();

  const { control, formState } = useFormContext();
  const lang = useLang((state) => state.activeLang.localization);

  const translate = useArrayIndex(lang);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.3 } }}
      transition={{ duration: 1 }}
    >
      <h2 className="h2 mb-8">{b2bStage3[translate].h2}</h2>

      <div className="flex flex-col gap-6">
        <Field
          control={control}
          name={"preferred_datetime"}
          error={formState.errors.preferred_datetime as FieldError}
          placeholder=""
          label={b2bStage3[translate].data[0].label}
        />
        <Field
          control={control}
          name={"meeting_format"}
          error={formState.errors.meeting_format as FieldError}
          placeholder=""
          label={b2bStage3[translate].data[1].label}
        />
        <Field
          control={control}
          name={"preferred_language"}
          error={formState.errors.preferred_language as FieldError}
          placeholder=""
          label={b2bStage3[translate].data[2].label}
        />

        <Field
          control={control}
          name={"logistics_requirements"}
          error={formState.errors.logistics_requirements as FieldError}
          placeholder=""
          label={b2bStage3[translate].data[3].label}
        />
      </div>

      <div className="flex flex-col gap-8">
        <div>
          <h3 className="h2 mt-10">{b2bStage3[translate].secondH2}</h3>
          <h5 className="text-on_surface_v">{b2bStage3[translate].subtitle}</h5>
        </div>

        <Field
          control={control}
          name="company_profile"
          label={b2bStage3[translate].data[4].label}
          type="file"
          textDark
        />
        <Field
          control={control}
          name="proposal_presentation"
          label={b2bStage3[translate].data[5].label}
          type="file"
          textDark
        />
        <Field
          control={control}
          name="relevant_certification"
          label={b2bStage3[translate].data[6].label}
          type="file"
          textDark
        />
      </div>

      <div className="flex items-center gap-6 mt-10">
        <Button
          type="button"
          onClick={handlePrev}
          variant={"outline"}
          className="text-on_surface"
        >
          {lang === "ru" ? "Назад" : "Back"}
        </Button>

        <Button
          disabled={formState.isSubmitting}
          type="submit"
          className="w-full"
        >
          {formState.isSubmitting ? (
            <Loader className="animate-spin" />
          ) : (
            b2bStage3[translate].button
          )}
        </Button>
      </div>
    </motion.div>
  );
};
