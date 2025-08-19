import { cn } from "@/lib/utils";
import { FC } from "react";
import { TimeCard } from "./TimeCard";
import { ContactCard } from "./ContactCard";
import { Mail, MapPin, PhoneIcon } from "lucide-react";
import useGetEventDates from "@/hooks/participants/useGetEventDates";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
}

export const HomeTime: FC<Props> = ({ className }) => {
  const { t } = useTranslation("index");
  const titles = t("exhibitionStatus", { returnObjects: true }) as string[];
  const contacts = t("contacts", { returnObjects: true }) as {
    suptitle: string;
    title: string;
  }[];

  const { eventsDatesData } = useGetEventDates();

  const images = [
    <Mail size={32} color="#4a2b68" />,
    <MapPin size={32} color="#4a2b68" />,
    <PhoneIcon size={32} color="#4a2b68" />,
  ];

  const dates = [
    eventsDatesData?.installation_date,
    eventsDatesData?.work_date,
    eventsDatesData?.dismantling_date,
  ];

  return (
    <section className={cn("bg-surface-muted my-20 pt-10 pb-20", className)}>
      <div className="container">
        <h2 className="h2 font-bold mb-6">{t("exhibitionTime")}</h2>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {[...Array(3)].map((_, i) => (
              <TimeCard
                title={titles[i] || ""}
                key={i}
                className="w-full"
                date={dates[i] || ""}
              />
            ))}
          </div>

          <div className="md:p-10 pt-16 flex flex-col md:flex-row items-center gap-6">
            {contacts.map((item, i) => (
              <ContactCard
                image={images[i]}
                {...item}
                key={i}
                className="w-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
