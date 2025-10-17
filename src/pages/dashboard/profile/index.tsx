import { Link } from "react-router";
import Tickets from "./tickets";
import Saved from "./saved";
import Footer from "./footer";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import clsx from "clsx";
import Picture from "./picture";

const Profile = () => {
  const user = useSelector((state: RootState) => state.user);
  const firstname = user.firstname ?? "";
  const lastname = user.lastname ?? "";
  return (
    <div className="flex flex-col justify-between col-span-4 container h-[90vh] overflow-y-scroll border-l border-chicago-100 py-5">
      <div className="items-center gap-2">
        <Picture />
        <div className="flex flex-col items-center">
          <h3 className={clsx("font-medium")}>{firstname + " " + lastname}</h3>
          <p className="text-sm text-chicago-500">{user.email}</p>
          <Link
            to="/dashboard/settings"
            className="text-sm text-white bg-chicago-900 rounded-md px-5 py-2 shadow-md mt-2 hover:scale-105 trasition-all duration-150"
          >
            Edit Profile
          </Link>
        </div>
        <Tickets />
        <Saved />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
