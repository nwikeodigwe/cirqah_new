import { Calendar, Globe, MapPin } from "lucide-react";
import { RadioGroup } from "radix-ui";
import { useFormContext } from "react-hook-form";
import type { Schema } from "../../schema";

const Type: React.FC = () => {
  const { setValue, watch } = useFormContext<Schema>();
  const locationType = watch("location_type") || "in-person";

  return (
    <RadioGroup.Root
      className=" w-full bg-chicago-900/30 grid grid-cols-3"
      value={locationType}
      onValueChange={(value) =>
        setValue("location_type", value as Schema["location_type"])
      }
    >
      <RadioGroup.Item
        value="in-person"
        className="flex items-center justify-center gap-2 cursor-pointer h-15  data-[state=checked]:bg-chicago-500 data-[state=checked]:text-white px-2 "
      >
        <MapPin />
        Venue
      </RadioGroup.Item>
      <RadioGroup.Item
        value="online"
        className="flex items-center justify-center h-15 gap-2 cursor-pointer   px-2 data-[state=checked]:bg-chicago-500 data-[state=checked]:text-white"
      >
        <Globe />
        Online event
      </RadioGroup.Item>
      <RadioGroup.Item
        value="to-be-announced"
        className="flex items-center justify-center h-15 px-2 gap-2 cursor-pointer data-[state=checked]:bg-chicago-500 data-[state=checked]:text-white"
      >
        <Calendar />
        To be announced
      </RadioGroup.Item>
    </RadioGroup.Root>
  );
};

export default Type;
