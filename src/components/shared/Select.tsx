// import clsx from "clsx";
// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";

// interface IProps {
//   question: string;
//   answer: string;
// }

// export const Select = ({ question, answer }: IProps) => {
//   const [openTitles, setOpenTitles] = useState<string[]>([]);

//   const onTitle = (name: string) => {
//     if (openTitles.includes(name)) {
//       setOpenTitles(openTitles.filter((item) => item !== name));
//     } else {
//       setOpenTitles((prev) => [...prev, name]);
//     }
//   };

//   return (
//     <div className="w-full">
//       <motion.div
//         onClick={() => onTitle(question)}
//         className={clsx(
//           "w-full flex items-center justify-between border-t-[1px] border-y-black2 cursor-pointer",
//           {
//             "border-b-[1px]": openTitles.includes(question),
//           }
//         )}
//       >
//         <h2 className="sm:text-[21px] text-[16px] sm:leading-[100%] leading-[120%] sm:font-semibold font-[400] py-4 sm:py-5">
//           {question}
//         </h2>
//         <img
//           src={"/assets/icons/faq/select-arrow.svg"}
//           alt="arrow"
//           className={clsx("rotate-[180deg] transition-all gap-4", {
//             "rotate-[360deg]": openTitles.includes(question || ""),
//           })}
//         />
//       </motion.div>
//       <div className="flex flex-col w-full max-w-[1000px]">
//         <AnimatePresence>
//           {openTitles.includes(question || "") && (
//             <motion.div
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: 1,
//               }}
//               exit={{
//                 opacity: 0,
//               }}
//               className="select-inner py-10"
//               dangerouslySetInnerHTML={{
//                 __html: content,
//               }}
//             />
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface IProps {
  header: string;
  faq_items: {
    question: string;
    answer: string;
  }[];
}

export const Select = ({ ...props }: IProps) => {
  const { faq_items, header } = props;

  const [openTitles, setOpenTitles] = useState<string[]>([]);

  const onTitle = (name: string) => {
    if (openTitles.includes(name)) {
      setOpenTitles(openTitles.filter((item) => item !== name));
    } else {
      setOpenTitles((prev) => [...prev, name]);
    }
  };

  return (
    <motion.div className="w-full">
      <motion.div
        onClick={() => onTitle(header)}
        className={clsx(
          "w-full flex items-center justify-between border-t transition-all border-t-black/20 cursor-pointer",
          {
            "border-b border-b-black/20": openTitles.includes(header || ""),
          }
        )}
      >
        <h2 className="sm:text-[21px] transition-all text-[16px] sm:leading-[100%] leading-[120%] sm:font-semibold font-[400] py-4 sm:py-5">
          {header}
        </h2>
        <img
          src={"/assets/icons/faq/select-arrow.svg"}
          width={30}
          height={30}
          alt="arrow"
          className={clsx("rotate-[180deg] transition-all gap-4", {
            "rotate-[360deg]": openTitles.includes(header || ""),
          })}
        />
      </motion.div>

      <motion.div
        initial={{
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          opacity: 0,
        }}
        animate={
          openTitles.includes(header || "")
            ? {
                height: "fit-content",
                paddingTop: 32,
                paddingBottom: 32,
                opacity: 1,
              }
            : {}
        }
        transition={{ duration: 0.3 }}
        className={clsx("flex flex-col overflow-hidden")}
      >
        {faq_items?.map((item, i) => (
          <motion.div key={i} className="flex flex-col w-full max-w-[1000px]">
            <motion.h4 className="leading-[140%] font-semibold">
              {item.question}
            </motion.h4>
            <motion.p
              className={clsx("text-gray4 leading-[140%]", {
                "mb-6": faq_items.length !== i + 1,
              })}
            >
              {item.answer}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
