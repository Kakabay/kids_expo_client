import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AnimatePresence, motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader } from "lucide-react";
import { CoverLayout } from "@/components/layout/CoverLayout";
import { useLang } from "@/services/zustand/zusLang";
import {
  sponsorDefaultValues,
  sponsorFormSchema,
  SponsorFormType,
} from "@/lib/sponsor-form";
import { useArrayIndex, useTranslate } from "@/lib/utils";
import expoService from "@/services/api/requests/expo.service";
import { standData } from "@/lib/stand-form.data";
import { Field } from "@/components/shared/Field";
import { FormSuccesStatus } from "@/components/shared/FormSuccessStatus";

const SponsorFormPage = () => {
  const lang = useLang((state) => state.activeLang.localization);
  const [success, setSuccess] = useState(false);
  const form = useForm<SponsorFormType>({
    resolver: zodResolver(sponsorFormSchema),
    defaultValues: sponsorDefaultValues,
  });

  const onSubmit = async (data: SponsorFormType) => {
    try {
      const status = await expoService.postSponsor(data);

      if (status) {
        setSuccess(true);
      }
    } catch (error) {
      console.error("POST sponsor error", error);
    }
  };

  const title = useTranslate("Стать спонсором", "Become a sponsor");

  const errors = form.formState.errors;

  const translate = useArrayIndex(lang);

  return (
    <CoverLayout title={title}>
      <AnimatePresence>
        {!success && (
          <Form {...form}>
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-[828px] mx-auto px-5 md:mt-20 mt-10 mb-20 md:mb-[120px] flex flex-col gap-8"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <Field
                label={standData[translate].label_1}
                name="company_name"
                control={form.control}
                error={errors.company_name}
              />
              <Field
                label={standData[translate].label_2}
                name="contact_person"
                control={form.control}
                error={errors.contact_person}
              />
              <Field
                label={standData[translate].label_3}
                name="contact_person_postion"
                control={form.control}
                error={errors.contact_person_postion}
              />
              <Field
                label={standData[translate].label_4}
                name="country"
                control={form.control}
                error={errors.country}
              />
              <Field
                label={standData[translate].label_5}
                name="email"
                control={form.control}
                error={errors.email}
              />
              <Field
                label={standData[translate].label_6}
                name="phone"
                control={form.control}
                error={errors.phone}
              />
              <Field
                label={standData[translate].label_7}
                name="website"
                control={form.control}
              />

              <FormField
                control={form.control}
                name="viza_support"
                render={({ field }) => (
                  <FormItem className="space-y-5">
                    <FormLabel className="text-xl">
                      {standData[translate].visa}
                    </FormLabel>

                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-4 ml-3"
                      >
                        <FormItem className="flex items-center space-x-5 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value={true}
                              checked={field.value}
                            />
                          </FormControl>
                          <FormLabel className="text-base">
                            {standData[translate].visa_radio}
                          </FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-5 space-y-0 ">
                          <FormControl>
                            <RadioGroupItem
                              value={false}
                              checked={!field.value}
                            />
                          </FormControl>
                          <FormLabel className="text-base">
                            {standData[translate].visa_radio_2}
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button disabled={form.formState.isSubmitting} className="mt-5">
                {form.formState.isSubmitting ? (
                  <Loader className="animate-spin" />
                ) : (
                  standData[translate].button
                )}
              </Button>
            </motion.form>
          </Form>
        )}
      </AnimatePresence>

      {success && <FormSuccesStatus delay={0.3} />}
    </CoverLayout>
  );
};

export default SponsorFormPage;
