import Overview from "./overview";
import Featured from "./Featured";
import Options from "./options";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
// import Categories from "./categories";
// import Plan from "./plan";

const Index = () => {
  const user = useSelector((state: RootState) => state.user);
  
  const date = new Date();
  const hour = date.getHours(); // returns the hour (0–23)

let greeting;

if (hour < 12) {
  greeting = "Good morning 🌅";
} else if (hour < 18) {
  greeting = "Good afternoon ☀️";
} else {
  greeting = "Good evening 🌙";
}

  const firstname = user.firstname ?? "";
  const lastname = user.lastname ?? "";
  return (
    <div className="container py-5 overflow-y-scroll h-[90vh]">
      <h3 className="text-xl mb-5">{greeting}, {firstname + " " + lastname}</h3>
      <Options />
      <Overview />
      <Featured/>
      {/* <Categories /> */}
    </div>
  );
};

export default Index;
