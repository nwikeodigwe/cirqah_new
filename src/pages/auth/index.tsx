import Onboarding from "./onboarding";
import Login from "./login";
import { useState } from "react";
import context from "./context";

const Index = () => {
  const [step, setStep] = useState(0);
  const content = step == 0 ? <Onboarding /> : <Login />;
  return (
    <context.Provider value={{ step, setStep }}>
      <section className="container py-16 px-5 md:px-20 space-y-10">
        {content}
      </section>
    </context.Provider>
  );
};

export default Index;
