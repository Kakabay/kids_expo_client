import { motion } from "framer-motion";

import { FC } from "react";
import { FieldError, useFormContext } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useLang } from "@/services/zustand/zusLang";
import { useArrayIndex, useScrollTop } from "@/lib/utils";
import { b2bStage1 } from "@/database/b2b.data";
import { Field } from "./Field";

interface Props {
  className?: string;
  handleNext: VoidFunction;
}

export const Stage1: FC<Props> = ({ handleNext }) => {
  useScrollTop();
  const { control, formState } = useFormContext();
  const lang = useLang((state) => state.activeLang.localization);

  const translate = useArrayIndex(lang);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: "100%", transition: { duration: 0.2 } }}
      className="w-full"
    >
      <h2 className="h2 mb-8">{b2bStage1[translate].h2}</h2>

      <div className="flex flex-col gap-8">
        <FormField
          defaultValue={1}
          control={control}
          name="meeting_type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-xl">
                {lang === "ru" ? "Тип:" : "Type:"}
              </FormLabel>

              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-4"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value={"b2b"}
                        checked={field.value === "b2b"}
                      />
                    </FormControl>
                    <FormLabel className="text-base">B2B</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value={"b2g"}
                        checked={field.value === "b2g"}
                      />
                    </FormControl>
                    <FormLabel className="text-base">B2G</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />

        <Field
          control={control}
          name={"company_name"}
          error={formState.errors.company_name as FieldError}
          placeholder=""
          label={b2bStage1[translate].data[0].label}
        />
        <Field
          control={control}
          name={"contact_person"}
          error={formState.errors.contact_person as FieldError}
          placeholder=""
          label={b2bStage1[translate].data[1].label}
        />
        <Field
          control={control}
          name={"contact_person_position"}
          error={formState.errors.contact_person_position as FieldError}
          placeholder=""
          label={b2bStage1[translate].data[2].label}
        />
        <Field
          type="number"
          control={control}
          name={"participant_count"}
          error={formState.errors.participant_count as FieldError}
          placeholder=""
          label={b2bStage1[translate].data[3].label}
        />
        <Field
          control={control}
          name={"country"}
          error={formState.errors.country as FieldError}
          placeholder=""
          label={b2bStage1[translate].data[4].label}
        />
        <Field
          control={control}
          name={"email"}
          error={formState.errors.email as FieldError}
          placeholder=""
          label={b2bStage1[translate].data[5].label}
        />
        <Field
          control={control}
          name={"phone"}
          error={formState.errors.phone as FieldError}
          placeholder=""
          label={b2bStage1[translate].data[6].label}
        />
        <Field
          control={control}
          name={"web_site"}
          placeholder=""
          label={b2bStage1[translate].data[7].label}
        />
      </div>

      <Button
        variant={"outline"}
        type="button"
        onClick={handleNext}
        className="w-full mt-10"
      >
        {lang === "ru" ? "Далее" : "Next"}
      </Button>
    </motion.div>
  );
};
