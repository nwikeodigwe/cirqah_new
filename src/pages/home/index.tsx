import { MdOutlinePlayCircle } from "react-icons/md";
import { motion } from "motion/react";
import Event from "./event";

const Index = () => {
  return (
    <motion.div className="min-h-screen bg-[url('./assets/home/image-mobile.png')] md:bg-[url('./assets/home/image-desktop.png')] lg:bg-[url('./assets/home/image-desktop.png')] bg-cover bg-center bg-fixed container relative flex flex-col justify-end items-end p-5 md:p-5">
      <motion.button
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 3,
        }}
        className="flex items-center justify-between gap-2 py-3 px-7 bg-white-green place-content-center top-1/2 right-1/2 absolute translate-x-1/2 -translate-1/2 shadow"
      >
        <MdOutlinePlayCircle className="text-2xl" />
        <span>Watch</span>
      </motion.button>
      <Event />
    </motion.div>
  );
};

export default Index;
