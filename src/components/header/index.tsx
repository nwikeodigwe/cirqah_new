import logo from "../../assets/logo.svg";
import { motion } from "motion/react";
import { Link } from "react-router";
import Menu from "./menu";
import Nav from "./nav";
import { animate, variant } from "@/transition";
import User from "./user";

const Index = () => {

  return (
    <motion.header
      variants={variant}
      initial="closed"
      animate="open"
      className="absolute top-0 left-0 right-0 container px-5 py-3 bg-chicago-950/20 z-50"
    >
      <motion.div
        variants={variant}
        initial="closed"
        animate="open"
        className="flex justify-between items-center"
      >
        <Menu />
        <motion.div variants={animate}>
          <Link to="/" className="flex gap-2 items-center">
            <img src={logo} className="size-10" />
            <span className="text-white text-2xl font-kd2 uppercase">
              Cirqah
            </span>
          </Link>
        </motion.div>
        <Nav />
        <motion.div variants={animate}>
          <User />
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Index;
