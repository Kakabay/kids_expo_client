import { CoverLayout } from "@/components/layout/CoverLayout";
import { useScrollTop } from "@/lib/utils";

const partnerPackages = [
  "Генеральный партнер выставки",
  "Партнер Ленты Ведущих Посетителей",
  "Партнер деловой программы",
  "Партнер вечернего приема",
  "Партнер пакетов посетителей",
  "Партнер каталога выставки",
  "Партнер VIP делегации",
  "Партнер выставки",
];

export default function PartnerOpportunities() {
  useScrollTop();

  return (
    <div>
      <CoverLayout title="Партнерские возможности">
        <div className="mx-auto max-w-[900px] text-on_surface">
          <h2 className="mb-3 text-2xl font-medium">Партнерские возможности</h2>

          <div className="mb-4 rounded-sm bg-surface_container px-4 py-3 text-sm leading-relaxed text-on_surface_v">
            Предлагаем Вам воспользоваться комплексными возможностями —
            партнерскими пакетами, разработанными под различные маркетинговые
            задачи компании-участника, которые позволят максимально использовать
            коммерческий потенциал выставки для усиления бренда Вашей компании и
            бесспорно повысят эффективность продвижения Вашей компании.
          </div>

          <p className="mb-4 text-sm leading-relaxed text-on_surface_v">
            Партнерство выставки — это всегда больше, чем просто участие. Это
            прекрасная возможность выгодно подать Вашу продукцию широкой публике
            в соответствии с Вашими основными целями и задачами. В каждом
            партнерском пакете предоставлены уникальные позиции, специально
            сформированные таким образом, что Вы наиболее точно и эффективно
            передаете обращение к целевой аудитории.
          </p>

          <h3 className="mb-2 text-sm font-medium">
            Партнерство выставки Kids Expo позволит:
          </h3>
          <ul className="mb-4 list-disc pl-5 text-sm leading-relaxed text-on_surface_v">
            <li>Укрепить позиции Вашей компании на рынке.</li>
            <li>Обеспечить существенное преимущество в конкурентной среде.</li>
            <li>Закрепить имидж успешного бренда Вашей компании.</li>
            <li>
              Сделать Вашу торговую марку узнаваемой для широкого круга
              участников и посетителей выставки.
            </li>
            <li>Выделить Вашу компанию среди других участников.</li>
          </ul>

          <div className="mb-6 rounded-sm border border-outline px-4 py-3 text-center text-[10px] uppercase text-on_surface_v">
            Вы хотите, чтобы в профессиональной среде именно Вашу компанию
            считали ключевым игроком на рынке? Тогда заявите о себе громче всех!
          </div>

          <h3 className="mb-2 text-sm font-medium">
            Варианты партнерских пакетов:
          </h3>
          <ul className="mb-4 border-t border-outline_v">
            {partnerPackages.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 border-b border-outline_v py-2 text-sm text-on_surface_v"
              >
                <span className="text-xs text-primary">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-[10px] leading-relaxed text-on_surface_v">
            Данные опции являются базовыми, но мы всегда готовы обсудить вопрос
            о специальных проектах в рамках партнерства выставки, которые будут
            соответствовать Вашему бюджету, потребностям и целям.
          </p>
          <p className="text-[10px] leading-relaxed text-on_surface_v">
            По вопросам цен и дополнительных опций партнерских пакетов выставки
            KIFT, пожалуйста, обращайтесь к{" "}
            <span className="text-primary underline">ОРГАНИЗАТОРАМ</span>
          </p>
        </div>
      </CoverLayout>
    </div>
  );
}
