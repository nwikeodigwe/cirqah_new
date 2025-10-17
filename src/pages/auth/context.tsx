import { createContext, type Dispatch, type SetStateAction } from "react";

type Onboarding = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const context = createContext<Onboarding | null>(null);
export default context;
