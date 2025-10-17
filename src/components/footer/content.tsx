import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import Socials from "./socials";
import logo from "@/assets/logo.svg";
import { client } from "@/sanity";
import type { Nav } from "@/types/sanity.types";

interface Props {
  onClick?: () => void;
}
const Content = ({ onClick }: Props) => {
  const location = useLocation();
  const [home, setHome] = useState(false);
  const [content, setContent] = useState<Nav | undefined>();

  useEffect(() => {
    async function fetchContent() {
      const data = await client.fetch(`*[_type == "nav"][0]{button, items}`);
      setContent(data);
    }

    fetchContent();
  }, []);

  useEffect(() => {
    const isHome = location.pathname === "/";
    setHome(isHome);
  }, [location]);

  // const links = content?.items?.map((section, i) => (
  //   <ul
  //     key={i}
  //     className={clsx("space-y-5 font-semibold md:hidden", !home && "hidden")}
  //   >
  //     <li>{section.heading}</li>
  //     {section.link?.map((lnk, i) => (
  //       <link key={i}>
  //         <Link to={`/${lnk.url}`}>{lnk.label}</Link>
  //       </link>
  //     ))}
  //   </ul>
  // ));

  const links = content?.items?.map((item) => (
    <ul
      key={item._key}
      className={clsx("space-y-5", {
        "md:hidden font-semibold": !item.heading,
        hidden: item.heading,
      })}
    >
      <li className="font-semibold">{item.heading}</li>
      {item.links?.map((link) => (
        <li
          key={link._key}
          className={clsx({
            "text-chicago-300 hover:text-chicago-100": item.heading,
          })}
        >
          <Link onClick={onClick} to={`${link.url}`}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  ));

  return (
    <>
      <div
        className={clsx(
          "container px-10 md:py-16 py-5 space-y-10 h-full flex flex-col md:h-auto z-10",
          !home && "pt-20"
        )}
      >
        <div className="flex flex-col md:flex-row space-y-10 justify-between">
          <ul className="hidden md:flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="size-15" />
              <h2 className="text-2xl font-k2d uppercase">Cirqah</h2>
            </li>
            <li>
              <Socials className="flex items-center text-2xl gap-5 justify-center text-chicago-300" />
            </li>
            <li>
              <p className="text-sm text-center text-chicago-300">
                Follow our socials
              </p>
            </li>
          </ul>
          {links}
          {/* <Socials
            className={clsx("flex space-x-10 justify-center", home && "hidden")}
          /> */}
        </div>
      </div>
      <div className="container py-5 px-10 border-t border-chicago-700">
        <p className={clsx("text-sm text-chicago-600", !home && "text-center")}>
          © {new Date().getFullYear()} Cirqah. All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Content;
