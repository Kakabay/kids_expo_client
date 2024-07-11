import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Button } from "../../components/ui/Button";
import { Title } from "../../components/ui/Title";
import { useTranslate } from "../../utils/useTranslate";

const ParticipantsHotels = () => {
  return (
    <div>
      <BreadCrumbs
        second={useTranslate("Участникам", "Participants")}
        third={useTranslate(
          "Размещение в гостиницах",
          "Услуги для экспонентов"
        )}
      />
      <Title
        title={useTranslate("Размещение в гостиницах", "Инженерные услуги")}
        mb32
      />

      <div className=""></div>

      <div className="flex flex-col gap-8">
        <div className="h-[305px] relative w-full">
          <img src="" alt="" />

          <div className="flex items-center justify-center bg-purple text-white py-5 rounded-[0_0_5px_5px] font-medium">
            <div className="">Гостиница «Арчабиль» 5*</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantsHotels;
