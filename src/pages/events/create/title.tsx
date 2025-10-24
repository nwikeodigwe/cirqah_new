import Fieldset from "@/components/fieldset";
import { useFormContext } from "react-hook-form";
import type { Schema } from "./schema";

const Title = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();

  return (
    <div className="flex flex-col gap-4 text-chicago-100">
      <h3 className="text-3xl mt-10">Event Overview</h3>
      <Fieldset.Root required>
        <Fieldset.Label htmlFor="title" className="md:text-base text-2xl">
          Title
        </Fieldset.Label>
        <Fieldset.Description className="text-xs text-shark-500 ">
          Be clear and descriptive with a title that tells people what your
          event is about.
        </Fieldset.Description>
        <Fieldset.Input
          type="text"
          id="title"
          placeholder="Enter event title"
          className="border border-shark-200 shadow-sm p-3 mt-2"
          {...register("title")}
        />

        <Fieldset.Error className="text-red-500 text-sm">
          {errors.title?.message}
        </Fieldset.Error>
      </Fieldset.Root>
      <Fieldset.Root required>
        <Fieldset.Label htmlFor="summary" className="md:text-base text-2xl">
          Summary
        </Fieldset.Label>
        <Fieldset.Description className="text-xs text-shark-500">
          Grab people's attention with a short description about your event.
          Attendees will see this at the top of your event page. (140 characters
          max)
        </Fieldset.Description>
        <Fieldset.Textarea
          id="summary"
          placeholder="Enter event summary"
          className="border border-shark-200 p-3 shadow-sm h-[150px] mt-2"
          {...register("summary")}
        />
        <Fieldset.Error className="text-red-500 text-sm">
          {errors.summary?.message}
        </Fieldset.Error>
      </Fieldset.Root>
    </div>
  );
};

export default Title;
