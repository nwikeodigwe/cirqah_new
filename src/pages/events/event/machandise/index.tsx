import Card from "./card";

const Machandise = () => {
  return (
    <section className="mt-10">
      <div className="container px-5">
        <h2 className="text-2xl font-medium text-white-green">
          Shop Event Merchandise
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Machandise;
