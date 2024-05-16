import { motion } from 'framer-motion';

export const BurgerMenu = () => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.3,
        ease: 'circOut',
      }}
      exit={{
        x: '100%',
      }}
      className=" bg-white3 overflow-auto fixed w-full z-[900] top-[97px] bottom-0 left-0 min-h-[100vh] h-full px-4 py-10 flex flex-col gap-10 overflow-y-auto">
      <div className="leading-[135%] text-[18px] flex flex-col gap-5"></div>
    </motion.div>
  );
};
