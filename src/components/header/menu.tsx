import { CiMenuBurger } from "react-icons/ci";
import { useState, useEffect } from "react";
import Content from "../footer/content";
import { IoCloseSharp } from "react-icons/io5";
import clsx from "clsx";

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
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-2xl text-white-green"
      >
        <CiMenuBurger />
      </button>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(
          "absolute overlay top-0 left-0 right-0 w-screen z-20 bg-black/20 backdrop-blur-sm",
          !isOpen && "hidden"
        )}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-3/5 bg-green text-white-green h-screen"
        >
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-2xl absolute top-2 right-3"
          >
            <IoCloseSharp />
          </button>
          <Content onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </div>
  );
};
export default Menu;
