import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Index = () => {
  return (
    <div className="container py-5 overflow-y-scroll h-[90vh]">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl mb-5">Linked Accounts</h3>
      </div>
      <hr className="text-chicago-200 mt-3" />
      <div className="space-y-1 mt-5">
        <h3 className="text-lg font-medium">Manage your social logins</h3>
        <div className="space-y-5 mt-5">
          <div className="flex items-center justify-between  border-chicago-200">
            <div className="flex items-center gap-5">
              <FaFacebook className="text-3xl text-blue-600" />
              <h3 className="">Facebook</h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm">Not connected</span>
              <span className="rounded h-2 w-5 bg-chicago-400"></span>
            </div>
          </div>
          <div className="flex items-center justify-between border-chicago-200">
            <div className="flex items-center gap-5">
              <FcGoogle className="text-3xl text-blue-600" />
              <h3 className="">Google</h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm">Not connected</span>
              <span className="rounded h-2 w-5 bg-chicago-400"></span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
