import { useEffect, useState } from "react";
import { Link } from "react-router";
import Projects from "./projects";
import { client } from "@/sanity";
import { motion } from "motion/react";
import { animate } from "@/transition";

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

  return (
    <motion.ul
      variants={animate}
      className="hidden md:flex items-cemter space-x-10 text-white-green font-medium"
    >
      {menu.map((lnk, i) => (
        <motion.li key={i} variants={animate}>
          {lnk.children ? (
            <Projects data={lnk} />
          ) : (
            <Link to={`${lnk.url}`}>{lnk.label}</Link>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Index;
