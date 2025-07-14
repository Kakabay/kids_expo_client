import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLang } from "@/services/zustand/zusLang";
import { TimeCard } from "./TimeCard";
import { ContactCard } from "./ContactCard";
import { contacts, times } from "@/constantas";

interface Props {
  className?: string;
}

export const HomeTime: FC<Props> = ({ className }) => {
  const lang = useLang((state) => state.activeLang.localization);

  return (
    <section className={cn("bg-surface-muted my-20 pt-10 pb-20", className)}>
      <div className="container">
        <h2 className="text-4xl font-bold mb-6">Время выставки</h2>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {times.map((item, i) => (
              <TimeCard {...item} key={i} className="w-full" />
            ))}
          </div>

          <div className="md:p-10 pt-16 flex flex-col md:flex-row items-center gap-6">
            {contacts.map((item, i) => (
              <ContactCard
                image={"/assets/icons/mail.svg"}
                {...item}
                key={i}
                className="w-full"
              />
            ))}
          </div>

          <Link to="/stend-form" className="md:w-fit w-full  mx-auto">
            <Button className="w-full">
              {lang === "ru" ? "Забронируйте стенд" : "Book a stand"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
