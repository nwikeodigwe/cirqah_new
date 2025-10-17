import { variant, animate } from "@/transition";
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
const Fan = ({ action, data }: Props) => {
  return (
    <motion.div
      variants={variant}
      initial="closed"
      animate="open"
      className="flex flex-col items-center py-10 md:py-20 px-5 md:px-10 space-y-2 shadow"
    >
      <motion.p variants={animate} className="text-green text-xs">
        {data?.subheading}
      </motion.p>
      <motion.h2 variants={animate} className="text-2xl font-medium">
        {data?.title}
      </motion.h2>
      <motion.p
        variants={animate}
        className="text-sm text-center text-chicago-700"
      >
        {data?.description}
      </motion.p>
      <motion.button
        variants={animate}
        onClick={action}
        className="px-10 py-2 bg-[linear-gradient(90deg,#072903_0%,#2FA220_100%)] inline-block mt-4 text-white-green"
      >
        {data?.button}
      </motion.button>
    </motion.div>
  );
};

export default Fan;
