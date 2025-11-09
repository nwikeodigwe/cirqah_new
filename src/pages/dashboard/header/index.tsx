import Cart from "./cart";
import { Link } from "react-router";
import Input from "@/components/input";
import { IoMdAdd } from "react-icons/io";
import Notification from "./notification";
import { CiSearch } from "react-icons/ci";

const Index = () => {
  return (
    <div className="flex items-center justify-end col-span-13 container py-2 shadow-sm">
      <div className="flex items-center space-x-4">
        <Input
          icon={<CiSearch className="text-xl " />}
          className="p-1 border-chicago-100 text-sm bg-chicago-900/20 placeholder:text-chicago-100"
          placeholder="Search for events"
        />
        <Link to="/events/create" className="text-xl rounded-md bg-chicago-900 text-white p-2 shadow-md hover:scale-105 outline-none"><IoMdAdd /></Link>
        <Cart />
        <Notification />
      </div>
    </div>
  );
};

export default Index;
