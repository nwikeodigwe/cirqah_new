import type { Variants } from "framer-motion";

export const variant: Variants = {
  open: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const animate: Variants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  closed: { opacity: 0, x: 50 },
};
