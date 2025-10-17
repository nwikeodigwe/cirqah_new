import { CiSearch } from "react-icons/ci";
import Input from "@/components/input";
import Notification from "./notification";
import Cart from "./cart";

const Index = () => {
  return (
    <div className="flex items-center justify-end col-span-13 container py-2 shadow-sm">
      <div className="flex items-center space-x-4">
        <Input
          icon={<CiSearch className="text-xl " />}
          className="rounded-md p-1 border-chicago-100 text-sm bg-chicago-100/20 placeholder:text-chicago-100"
          placeholder="Search for events"
        />
        <Cart />
        <Notification />
      </div>
    </div>
  );
};

export default Index;
