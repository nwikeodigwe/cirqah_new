import type { RootState } from "@/store";
import Profile from "./profile";
import { useSelector } from "react-redux";

const Index = () => {
  const user = useSelector((state: RootState) => state.user);
  const date = new Date(user.created_at || "");
  const created_at = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container py-5 overflow-y-scroll overflow-x-hidden h-[90vh]">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl mb-5">Account Information</h3>
        <p className="text-xs text-chicago-400">
          Cirqah account since {created_at}
        </p>
      </div>
      <hr className="text-chicago-200 mt-3" />
      <Profile />
    </div>
  );
};

export default Index;
