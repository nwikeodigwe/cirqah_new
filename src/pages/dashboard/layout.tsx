import { Outlet } from "react-router";
import { useState } from "react";
import Profile from "./profile";
import Sidebar from "./sidebar";
import Header from "./header";
import clsx from "clsx";

const Layout = () => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(true);

  return (
    <div className="grid grid-cols-16 h-screen overflow-x-clip">
      <Sidebar />
      <div className="col-span-13">
        <Header />
        <div className="col-span-9 flex">
          <div className={clsx("transition-all duration-300 flex-1")}>
            <Outlet />
          </div>
          <Profile isOpen={isProfileOpen} handleClick={setIsProfileOpen} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
