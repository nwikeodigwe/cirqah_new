import { useFormContext } from "react-hook-form";
import type { Schema } from "../schema";
import clsx from "clsx";

const Save = () => {
  const {
    formState: { isSubmitting, isValid, isDirty },
  } = useFormContext<Schema>();

  const disabled = isSubmitting || !isValid || !isDirty;

  return (
    <div className="mt-10">
      <button
        disabled={disabled}
        className={clsx(
          "relative py-3 px-10 text-white enabled:bg-chicago-900 rounded-md shadow-md enabled:hover:scale-105 transition-all duration-150 disabled:bg-chicago-600 disabled:text-chicago-200 disabled:shadow-none disabled:cursor-not-allowed enabled:active:scale-95"
        )}
      >
        {isSubmitting ? "Saving..." : "Save"}
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
