import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { v4 } from "uuid";
import { useParticipantsForm } from "../../services/zustand/zusForm";
import { useState } from "react";
import { responseMethod } from "../../pages/participants/ParticipantsApply";

interface IProps {
  responseMethod: {
    title: string;
    id: string;
  };
}

const DropDown = () => {
  const [active, setActive] = useState(false);

  const activeMethod = useParticipantsForm((state) => state.activeMethod.title);
  const setActiveMethod = useParticipantsForm((state) => state.setActiveMethod);

  return (
    <div className="flex flex-col">
      <div
        onClick={() => {
          setActive(!active);
        }}
        className="h-[43px] flex cursor-pointer items-center justify-between bid-drop py-[15px]"
      >
        <div className="form-input w-full flex items-center justify-between">
          <div className="">{activeMethod}</div>
        </div>
      </div>
      <div className="relative">
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="bg-white rounded-sm flex flex-col absolute w-full shadow-lg"
            >
              {responseMethod.map((item) => (
                <div
                  key={v4()}
                  onClick={() => {
                    setActiveMethod(item);
                    setActive(false);
                  }}
                  className={clsx(
                    "cursor-pointer py-[15px] px-[12px] text-[14px] font-regular leading-[125%] transition-all",
                    {
                      "hover:bg-purple rounded-sm hover:text-white":
                        item.title === item.title,
                    }
                  )}
                >
                  {item.title}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DropDown;
