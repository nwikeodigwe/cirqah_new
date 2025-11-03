import Header from "./header";
import Mission from "./mission";
import Problem from "./problem";
import Vision from "./vision";
import Team from "./team";
import Footer from "./footer";
import Experience from "./experience";

const Index = () => {
  return (
    <div className="container bg-chicago-900 text-white-green py-16 space-y-24">
      <Header />
      <Mission />
      <Vision />
      <Experience />
      <Problem />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
