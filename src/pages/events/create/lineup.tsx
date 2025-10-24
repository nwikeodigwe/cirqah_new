import { useFormContext } from "react-hook-form";
import type { Schema } from "./schema";
import Fieldset from "@/components/fieldset";

const Index = () => {
  const { register } = useFormContext<Schema>();

  return (
    <div className="flex flex-col gap-5 mt-5 text-chicago-100">
      <h3 className="text-3xl">Line up</h3>
      <p className="text-sm text-shark-400">
        Highlight your lineup of special guests with a section on your event
        page. Change the title of this section to fit your event's theme and add
        info about each person. You can set someone as a keynote to highlight
        them even more.
      </p>
      <div className="flex flex-col gap-3">
        <Fieldset.Root className="flex flex-col gap-2">
          <Fieldset.Label
            htmlFor="lineup_title"
            className="md:text-base text-2xl"
          >
            Title
          </Fieldset.Label>
          <Fieldset.Input
            type="text"
            className="p-3 border border-shark-200 shadow-sm"
            placeholder="Enter title"
            {...register("lineup_title")}
          />
        </Fieldset.Root>
        <Fieldset.Root className="flex flex-col gap-2">
          <Fieldset.Label
            htmlFor="lineup_tagline"
            className="md:text-base text-2xl"
          >
            Add tagline
          </Fieldset.Label>
          <Fieldset.Input
            type="text"
            className="p-3 border border-shark-200 shadow-sm"
            placeholder="Enter tagline"
            {...register("lineup_tagline")}
          />
        </Fieldset.Root>
        <Fieldset.Root className="flex flex-col gap-2">
          <Fieldset.Label
            htmlFor="lineup_description"
            className="md: md:text-base text-2xl"
          >
            Description
          </Fieldset.Label>
          <Fieldset.Textarea
            className="p-3 border border-shark-200 shadow-sm h-[200px]"
            placeholder="Enter description"
            {...register("lineup_description")}
          />
        </Fieldset.Root>
      </div>
    </div>
  );
};

export default Index;
