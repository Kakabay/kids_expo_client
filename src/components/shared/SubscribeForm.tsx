import { FC, useState } from "react";
import { z } from "zod";
import { cn, useTranslate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface Props {
  className?: string;
  modal?: boolean;
}

const schema = z.object({
  email: z.string().email(),
});

export type SubscribeType = z.infer<typeof schema>;

export const SubscribeForm: FC<Props> = ({ modal = false }) => {
  const [success, setSuccess] = useState(false);

  const form = useForm<SubscribeType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit() {
    try {
      form.reset();
      setSuccess(true);
    } catch (error) {
      console.error("POST subscribe", error);
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn(
        "py-8",
        modal ? "max-w-[392px] mx-auto" : "bg-surface-secondary"
      )}
    >
      <div
        className={cn(
          "flex gap-8 container justify-between",
          modal ? "flex-col w-full" : "lg:flex-row flex-col lg:items-center"
        )}
      >
        <h2 className="text-xl font-bold">
          {useTranslate("Подпишитесь на новости:", "Subscribe to the news:")}
        </h2>

        <div className="relative">
          <input
            // {...form.register("email")}
            placeholder="Email"
            className={cn(
              "rounded-md h-14 border border-border px-4 focus:outline-border-focused transition-all",
              {
                "w-full": modal,
                "xl:w-[392px] lg:w-[320px] w-full": !modal,
              }
            )}
          />
          <span className="text-error absolute text-red-600 -bottom-6 text-sm left-0">
            {/* {form.formState.errors?.email?.message} */}
          </span>
        </div>

        <Button
          // loading={form.formState.isSubmitting}
          disabled={success}
          className={cn({
            "xl:w-[288px] lg:w-[220px] w-full": !modal,
            "w-full": modal,
          })}
        >
          {success
            ? useTranslate("Отправлено", "Submitted")
            : useTranslate("Подписаться", "Subscribe")}
        </Button>
      </div>
    </form>
  );
};
