import { CiMenuBurger } from "react-icons/ci";
import { useState, useEffect } from "react";
import Content from "../footer/content";
import { IoCloseSharp } from "react-icons/io5";
import clsx from "clsx";
import { motion } from "motion/react";
import { animate, variant } from "@/transition";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const { isAuthenticated } = useAuth() as AuthContextType;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <motion.div
      variants={variant}
      initial="closed"
      animate="open"
      className="md:hidden"
    >
      <motion.button
        variants={animate}
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-2xl text-white-green"
      >
        <CiMenuBurger />
      </motion.button>
      <motion.div
        variants={animate}
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(
          "absolute overlay top-0 left-0 right-0 w-screen z-20 bg-black/20 backdrop-blur-sm",
          !isOpen && "hidden"
        )}
      >
        <motion.div
          variants={animate}
          onClick={(e) => e.stopPropagation()}
          className="relative w-3/5 bg-green text-white-green h-screen"
        >
          <motion.button
            variants={animate}
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-2xl absolute top-2 right-3"
          >
            <IoCloseSharp />
          </motion.button>
          <Content onClick={() => setIsOpen(false)} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Menu;
