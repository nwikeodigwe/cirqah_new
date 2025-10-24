import Radio from "./radio";
import Time from "./time";
import Location from "./location";

const Index = () => {
  return (
    <div className="flex flex-col gap-4 mt-10 text-chicago-100">
      <h3 className="text-3xl">Date and Location</h3>
      <Radio />
      <Time />
      <Location />
    </div>
  );
};

export default Index;
