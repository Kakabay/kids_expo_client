import { CoverLayout } from "@/components/layout/CoverLayout";
import { Field } from "@/components/shared/Field";
import {
  standDefaultValues,
  standFormSchema,
  StandFormType,
} from "@/lib/stand-form";
import { useArrayIndex, useScrollTop, useTranslate } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";
import expoService from "@/services/api/requests/expo.service";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useLang } from "@/services/zustand/zusLang";
import { standData } from "@/lib/stand-form.data";
import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const StandFormPage = () => {
  useScrollTop();
  const lang = useLang((state) => state.activeLang.localization);
  const [success, setSuccess] = useState(false);
  const title = useTranslate("Забронировать стенд", "Book a stand");

  const form = useForm({
    resolver: zodResolver(standFormSchema),
    defaultValues: standDefaultValues,
  });

  const onSubmit = async (data: StandFormType) => {
    const status = await expoService.postStand(data);

    if (status) setSuccess(true);
  };

  const translate = useArrayIndex(lang);

  const errors = form.formState.errors;

  return (
    <CoverLayout title={title} className="bg-[#F6FBF2]">
      <Form {...form}>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="max-w-[828px] px-5 mx-auto mt-20 mb-[120px] flex flex-col gap-8"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="selection_option"
            render={({ field }) => (
              <FormItem className="space-y-5">
                <FormLabel className="text-xl">
                  {standData[translate].h2}
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
                          value={"space"}
                          checked={field.value === "space"}
                        />
                      </FormControl>
                      <FormLabel className="text-base">
                        {standData[translate].radio}
                      </FormLabel>
                    </FormItem>

                    <FormItem className="flex items-center space-x-5 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          value={"package"}
                          checked={field.value === "package"}
                        />
                      </FormControl>
                      <FormLabel className="text-base">
                        {standData[translate].radio_2}
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          <Field
            label={standData[translate].label_1}
            name="company_name"
            control={form.control}
            error={errors.company_name}
          />
          <Field
            label={standData[translate].label_2}
            name="representative_name"
            control={form.control}
            error={errors.representative_name}
          />
          <Field
            label={standData[translate].label_3}
            name="position_title"
            control={form.control}
            error={errors.position_title}
          />
          <Field
            label={standData[translate].number_of_participants}
            type="number"
            name="participants_count"
            control={form.control}
            error={errors.participants_count}
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
            name="phone_number"
            control={form.control}
            error={errors.phone_number}
          />

          <Field
            label={standData[translate].label_7}
            name="website"
            control={form.control}
          />

          <FormField
            control={form.control}
            name="visa_support"
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
                        <RadioGroupItem value={true} checked={field.value} />
                      </FormControl>
                      <FormLabel className="text-base">
                        {standData[translate].visa_radio}
                      </FormLabel>
                    </FormItem>

                    <FormItem className="flex items-center space-x-5 space-y-0 ">
                      <FormControl>
                        <RadioGroupItem value={false} checked={!field.value} />
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
    </CoverLayout>
  );
};

export default StandFormPage;
