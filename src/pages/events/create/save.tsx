import { useFormContext } from "react-hook-form";
import Fieldset from "@/components/fieldset";
import type { Schema } from "./schema";

interface SaveProps {
  isSubmitting?: boolean;
}

const Save = ({ isSubmitting = false }: SaveProps) => {
  const {
    formState: { isDirty },
  } = useFormContext<Schema>();

  return (
    <Fieldset.Root className=" w-full mt-5">
      <Fieldset.Button
        type="submit"
        disabled={isSubmitting || !isDirty}
        className="flex items-center justify-center w-full py-3 bg-green text-white-green disabled:bg-green/50 shadow-sm"
      >
        {isSubmitting ? "Saving..." : "Save and continue"}
      </Fieldset.Button>
    </Fieldset.Root>
  );
};

export default Save;
