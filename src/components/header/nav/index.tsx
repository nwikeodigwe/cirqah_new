import { Link } from "react-router";
import Projects from "./projects";
import { useEffect, useState } from "react";
import { client } from "@/sanity";

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
    <ul className="hidden md:flex items-cemter space-x-10 text-white-green font-medium">
      {menu.map((lnk, i) => (
        <li key={i}>
          {lnk.children ? (
            <Projects data={lnk} />
          ) : (
            <Link to={`${lnk.url}`}>{lnk.label}</Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Index;
