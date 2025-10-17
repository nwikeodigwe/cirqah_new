import { animate, variant } from "@/transition";
import { motion } from "motion/react";

interface Props {
  action: () => void;
  data?: {
    subheading?: string;
    title?: string;
    description?: string;
    button?: string;
  };
}

const Creator = ({ action, data }: Props) => {
  return (
    <motion.div
      variants={variant}
      initial="closed"
      animate="open"
      className="flex flex-col items-center space-y-2 bg-chicago-800 text-white-green py-10 md:py-20 px-5 md:px-10 shadow"
    >
      <motion.p variants={animate} className="text-green text-sm text-center">
        {data?.subheading}
      </motion.p>
      <motion.h2
        variants={animate}
        className="text-2xl font-medium text-center"
      >
        {data?.title}
      </motion.h2>
      <motion.p
        variants={animate}
        className="text-sm text-center text-chicago-100"
      >
        {data?.description}
      </motion.p>
      <motion.button
        variants={animate}
        onClick={action}
        className="bg-[linear-gradient(90deg,#072903_0%,#2FA220_100%)] inline-block px-10 py-2 mt-4"
      >
        {data?.button}
      </motion.button>
    </motion.div>
  );
};

export default Creator;
