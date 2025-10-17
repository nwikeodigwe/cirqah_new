import { Outlet } from "react-router";
import Sidebar from "./sidebar";
import Header from "./header";
import Profile from "./profile";

const Layout = () => {
  return (
    <div className="grid grid-cols-16 h-screen overflow-x-clip">
      <Sidebar />
      <div className="col-span-13">
        <Header />
        <div className="col-span-9 grid grid-cols-12">
          <div className="col-span-8">
            <Outlet />
          </div>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Layout;
