import { useFormContext } from "react-hook-form";
import type { Schema } from "../schema";
import Fieldset from "@/components/fieldset";
import clsx from "clsx";

const Time = () => {
  const { register, watch } = useFormContext<Schema>();
  const eventType = watch("event_type") || "single";

  return (
    <div
      className={clsx(
        "grid grid-cols-2 gap-4 mt-5",
        eventType !== "single" && "hidden"
      )}
    >
      <h3 className="text-xl col-span-2">Date and Time</h3>
      <Fieldset.Root className="flex flex-col gap-2">
        <Fieldset.Label htmlFor="date" className="md:text-base text-2xl">
          Date
        </Fieldset.Label>
        <Fieldset.Input
          {...register("date")}
          type="date"
          placeholder="Select date"
          className="p-3 shadow-sm border border-shark-200 text-shark-400"
        />
      </Fieldset.Root>
      <div></div>
      <Fieldset.Root className="flex flex-col gap-3">
        <Fieldset.Label htmlFor="start_time" className="md:text-base text-2xl">
          Start Time
        </Fieldset.Label>
        <Fieldset.Input
          {...register("start_time")}
          type="time"
          className="p-3 shadow-sm border border-shark-200 text-shark-400"
        />
      </Fieldset.Root>
      <Fieldset.Root className="flex flex-col gap-3">
        <Fieldset.Label htmlFor="end_time" className="md:text-base text-2xl">
          End Time
        </Fieldset.Label>
        <Fieldset.Input
          {...register("end_time")}
          type="time"
          className="p-3 shadow-sm border border-shark-200 text-shark-400"
        />
      </Fieldset.Root>
    </div>
  );
};

export default Time;
