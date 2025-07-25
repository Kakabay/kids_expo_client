import { cn, useTranslate } from "@/lib/utils";
import { FC } from "react";
import { TimeCard } from "./TimeCard";
import { ContactCard } from "./ContactCard";
import { contacts, times } from "@/constantas";
import { Mail, MapPin, PhoneIcon } from "lucide-react";

interface Props {
  className?: string;
}

export const HomeTime: FC<Props> = ({ className }) => {
  const title = useTranslate("Время выставки", "Exhibition time");

  const images = [
    <Mail size={32} color="#4a2b68" />,
    <MapPin size={32} color="#4a2b68" />,
    <PhoneIcon size={32} color="#4a2b68" />,
  ];

  return (
    <section className={cn("bg-surface-muted my-20 pt-10 pb-20", className)}>
      <div className="container">
        <h2 className="h2 font-bold mb-6">{title}</h2>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {times.map((item, i) => (
              <TimeCard {...item} key={i} className="w-full" />
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
