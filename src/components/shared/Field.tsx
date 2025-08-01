import { FieldError } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { cn } from "@/lib/utils";
import { LegacyRef } from "react";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

type Props = {
  control: any;
  name: string;
  label?: string;
  placeholder?: string;
  error?: FieldError | undefined;
  area?: boolean;
  ref?: LegacyRef<HTMLInputElement>;
  type?: string;
  textArea?: boolean;
  className?: string;
  disabled?: boolean;
  textDark?: boolean;
  supporText?: string;
  onPrimary?: boolean;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Field = ({
  control,
  name,
  label,
  placeholder,
  error,
  type = "text",
  className,
  disabled,
  textArea = false,
  textDark,
  supporText,
  handleChange,

  onPrimary = false,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(className, "flex flex-col w-full relative")}>
          <FormLabel
            className={cn(
              "text-xl",
              onPrimary && "!text-on_primary",
              textDark ? "text-on_surface" : "text-on_surface_v"
            )}
          >
            {label}
          </FormLabel>

          <FormControl>
            <>
              {textArea ? (
                <Textarea
                  rows={3}
                  {...field}
                  placeholder={placeholder}
                  className={cn(error && " border-[#BA1A1A]")}
                />
              ) : type !== "file" ? (
                <Input
                  {...field}
                  type={type}
                  placeholder={placeholder}
                  disabled={disabled}
                  className={cn(
                    "transition-all",
                    error && "focus:border-primary border-[#BA1A1A]"
                  )}
                />
              ) : (
                <div className="relative w-full h-[180px]">
                  <Input
                    type="file"
                    placeholder={placeholder}
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      console.log("Выбранный файл:", file);
                      field.onChange(file);
                      if (handleChange) handleChange(e);
                    }}
                    disabled={disabled}
                    className="w-full border-2 rounded h-full  border-dashed outline-0 ring-0 border-surface-brand"
                  />
                  {field.value && (
                    <div className="text-sm mt-2 text-gray-500 absolute top-8">
                      Выбранный файл: {field.value.name}
                    </div>
                  )}
                </div>
              )}
            </>
          </FormControl>
          <FormMessage
            className={cn(
              "absolute -bottom-5 left-0 text-sm font-medium leading-[130%]",
              Boolean(error) && onPrimary
                ? "text-teritary_04"
                : "text-[#BA1A1A]"
            )}
          >
            {error ? error.message : supporText}
          </FormMessage>
        </FormItem>
      )}
    />
  );
};
