import { useContext, useEffect, useState } from "react";
import context from "../context";
import Fan from "./fan";
import Creator from "./creator";
import { RadioGroup } from "radix-ui";
import { client } from "@/sanity";
import type { Onboard } from "@/types/sanity.types";

const Index = () => {
  const action = useContext(context);
  const [content, setContent] = useState<Onboard>();

  const { setStep } = action ?? {};

  const handleNextStep = () => {
    if (setStep) setStep(1);
  };

  useEffect(() => {
    async function getContent() {
      const data = await client.fetch(
        "*[_type == 'onboard'][0]{items, subheading, title}"
      );
      setContent(data);
    }

    getContent();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center space-y-3">
        <h2 className="text-center text-4xl font-medium leading-10">
          {content?.title}
        </h2>
        <p className="text-center text-sm text-chicago-700">
          {content?.subheading}
        </p>
      </div>
      <RadioGroup.Root
        defaultValue="default"
        aria-label="View density"
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <RadioGroup.Item
          value="fan"
          className="border-2 border-transparent data-[state=checked]:border-green"
        >
          <Fan action={handleNextStep} data={content?.items?.[0]} />
        </RadioGroup.Item>
        <RadioGroup.Item
          value="creator"
          className="border-2 border-transparent data-[state=checked]:border-green"
        >
          <Creator action={handleNextStep} data={content?.items?.[1]} />
        </RadioGroup.Item>
      </RadioGroup.Root>
      <div className="flex justify-between gap-5">
        <button
          onClick={handleNextStep}
          className="py-2 px-10 border border-green text-green"
        >
          Skip
        </button>
        <button
          onClick={handleNextStep}
          className="py-2 px-10 bg-green text-white"
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default Index;
