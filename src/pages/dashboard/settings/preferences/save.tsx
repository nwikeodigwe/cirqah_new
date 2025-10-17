import { useFormContext } from "react-hook-form";
import type { Schema } from "./schema";
import clsx from "clsx";

const Save = () => {
  const {
    formState: { isSubmitting, isValid },
  } = useFormContext<Schema>();

  const disabled = isSubmitting || !isValid;
  return (
    <div className="mt-10">
      <button
        disabled={disabled}
        className="relative py-3 px-10 bg-chicago-900 enabled:text-white rounded-md shadow-md enabled:hover:scale-105 transition-all duration-150 text-sm disabled:bg-chicago-700 disabled:text-chicago-200 enabled:active:scale-95 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Saving preferences..." : "Save preferences"}
        <span
          className={clsx("-translate-y-2 translate-x-2", {
            "absolute top-1/2 right-1/2 w-5 h-5 border-4 border-chicago-100 border-t-transparent rounded-full animate-spin":
              isSubmitting,
          })}
        ></span>
      </button>
    </div>
  );
};

export default Save;
