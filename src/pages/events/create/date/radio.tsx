import { RadioGroup } from "radix-ui";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import type { Schema } from "../schema";
import { SlCalender } from "react-icons/sl";

const options = [
  {
    label: "Single Event",
    value: "single",
    icon: <SlCalender className="w-7 h-7 text-shark-500" />,
    description: "For events that happen once",
  },
  {
    label: "Recurring Event",
    value: "recurring",
    icon: <SlCalender className="w-7 h-7 text-shark-500" />,
    description: "For events that happen multiple times",
  },
];

const Event = () => {
  const { setValue, watch, getValues } = useFormContext<Schema>();
  const eventType = watch("event_type") || "single";

  useEffect(() => {
    const existing = getValues("event_type");
    if (!existing) {
      setValue("event_type", "single", {
        shouldValidate: true,
        shouldDirty: false,
        shouldTouch: false,
      });
    }
  }, [getValues, setValue]);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="md:text-base text-2xl">Event Type</h3>
      <RadioGroup.Root
        className="flex items-cemter gap-4"
        value={eventType}
        onValueChange={(value) => setValue("event_type", value)}
        aria-label="Event type selection"
      >
        {options.map((option, i) => (
          <RadioGroup.Item
            key={i}
            className="p-3 hover:bg-shark-100/20 transition-colors w-full border border-shark-200 data-[state=checked]:border-2 data-[state=checked]:border-shark-900 data-[state=checked]:bg-shark-900 data-[state=checked]:text-white shadow-sm"
            value={option.value}
            id={`event-type-${i}`}
          >
            <div className="flex items-center gap-4">
              {option.icon}
              <label
                className="flex flex-col items-start"
                htmlFor={`event-type-${i}`}
              >
                <h3 className="md:text-base text-2xl">{option.label}</h3>
                <p className="text-sm text-shark-500">{option.description}</p>
              </label>
            </div>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  );
};

export default Event;
