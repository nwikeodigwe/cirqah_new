import Overview from "./overview";
import List from "./list";

const Index = () => {
  return (
    <div className="container py-5 overflow-y-scroll h-[90vh]">
      <h3 className="text-3xl mb-5">Tickets</h3>
      <Overview />
      <List />
    </div>
  );
};

export default Index;
