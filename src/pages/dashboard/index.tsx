import Overview from "./overview";
import Featured from "./Featured";
// import Plan from "./plan";

const Index = () => {
  return (
    <div className="container py-5 overflow-y-scroll h-[90vh]">
      <h3 className="text-3xl mb-5">Dashboard</h3>
      {/* <Plan /> */}
      <Overview />
      <Featured/>
    </div>
  );
};

export default Index;
