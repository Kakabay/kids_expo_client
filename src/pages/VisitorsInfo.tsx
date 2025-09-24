import { CoverLayout } from "@/components/layout/CoverLayout";
import { cn } from "@/lib/utils";
import { Bus } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function VisitorsInfo() {
  const { t } = useTranslation("index");

  const { title, text, content } = t("visitorsInfo", {
    returnObjects: true,
  }) as {
    title: string;
    text: string;
    content: {
      title: string;
      text: string;
    }[];
  };

  const icons = ["time", "location"];

  return (
    <CoverLayout title={title}>
      <p className="md:text-[22px] text-[18px] leading-[130%] md:leading-[150%] font-light mb-12">
        {text}
      </p>

      <div className="flex flex-col justify-center items-center gap-8">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-8 lg:gap-[42px]">
          {content.map((item, i) => (
            <div
              key={i}
              className={cn(
                "px-4 py-6 bg-pureWhite w-full h-full flex flex-col items-center text-center rounded-sm",
                i === 2 && "md:col-span-2 mx-auto"
              )}
            >
              {i === 2 ? (
                <Bus color="#ED5417" size={40} />
              ) : (
                <img
                  src={`/assets/icons/visitors/${icons[i]}.svg`}
                  alt={item.title}
                  className="mb-4 mx-auto"
                />
              )}
              <h4 className="font-bold leading-[125%] mb-2">{item.title}</h4>
              <div
                dangerouslySetInnerHTML={{ __html: item.text }}
                className="leading-[150%]"
              />
            </div>
          ))}

          {/* <div className="px-4 py-6 bg-pureWhite text-center w-full h-full rounded-sm">
            <img
              src="/assets/icons/visitors/location.svg"
              alt=""
              className="mb-4 mx-auto"
            />
            <h4 className="font-bold leading-[125%] mb-2">{venue}</h4>
            <p className="leading-[150%]">{venueText}</p>
          </div>
        </div>

        <div className="px-4 py-6 bg-pureWhite text-center flex flex-col items-center w-1/2 h-full rounded-sm">
          <Bus color="#ED5417" size={40} />
          <h4 className="font-bold leading-[125%] mb-2">{buses}</h4>
          <p className="leading-[150%]">35, 54, 56, 57, 58, 103, 121.</p>
        </div> */}
        </div>
      </div>
    </CoverLayout>
  );
}
