import { FC } from "react";
import { ThemeCard } from "./ThemeCard";
import { themeData } from "@/constantas";
import { useTranslate } from "@/lib/utils";

export const HomeTheme: FC = () => {
  const title = useTranslate(
    "Тематические направления выставки",
    "Exhibition Thematic Areas"
  );

  return (
    <section className="container">
      <div className="cotnainer">
        <h2 className="h2 font-bold mb-10 text-center">{title}</h2>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
          {themeData.map((item, i) => (
            <ThemeCard
              image={`/assets/icons/kids-expo-tematika-icons${i + 1}.png`}
              key={i}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
