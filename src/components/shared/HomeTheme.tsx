import { FC } from "react";
import { ThemeCard } from "./ThemeCard";
import { themeData } from "@/constantas";

export const HomeTheme: FC = () => {
  return (
    <section className="container">
      <div className="cotnainer">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Тематические направления выставки
        </h2>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
          {themeData[0].data.map((item, i) => (
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
