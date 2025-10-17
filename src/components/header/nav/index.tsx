import { useEffect, useState } from "react";
import { Link } from "react-router";
import Projects from "./projects";
import { client } from "@/sanity";
import { motion } from "motion/react";

export type Links = {
  url: string;
  label: string;
  children?: Links[];
};

const Index = () => {
  const [menu, setMenu] = useState<Links[]>([]);

  useEffect(() => {
    async function getMenu() {
      const { items } = await client.fetch(`*[_type == "nav"][0]{items[0]}`);
      setMenu(items.links);
    }

    getMenu();
  }, []);

  // console.log(menu?.[0].children?.[0].url);
  return (
    <motion.ul
      className="hidden md:flex items-cemter space-x-10 text-white-green font-medium"
      key="auth-button"
      initial={{ x: 50, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{ y: 50, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 10,
        duration: 3,
      }}
    >
      {menu.map((lnk, i) => (
        <li key={i}>
          {lnk.children ? (
            <Projects data={lnk} />
          ) : (
            <Link to={`${lnk.url}`}>{lnk.label}</Link>
          )}
        </li>
      ))}
    </motion.ul>
  );
};

export default Index;
