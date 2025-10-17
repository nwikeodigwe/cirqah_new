import { CiMenuKebab } from "react-icons/ci";
import { useEffect, useState } from "react";
import Content from "./content";
import clsx from "clsx";
import { useLocation } from "react-router";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [home, setHome] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isHome = location.pathname === "/";
    setHome(isHome);
  }, [location.pathname]);

  return (
    <footer
      className={clsx(
        "space-y-5",
        { "absolute bottom-0 right-0 left-0 mx-5 hidden md:block": home },
        { "static block": !home }
      )}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(
          "size-10 rounded-full flex items-center justify-center bg-white-green text-chicago-800",
          home && "flex",
          !home && "hidden"
        )}
      >
        <CiMenuKebab className="text-2xl" />
      </button>
      <div
        className={clsx(
          "bg-chicago-800 text-white",
          home && "block",
          !isOpen && home && "hidden"
        )}
      >
        <Content />
      </div>
    </footer>
  );
};

export default Index;
