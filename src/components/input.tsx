import clsx from "clsx";
import { CircleAlert } from "lucide-react";
import { type InputHTMLAttributes, type ReactNode, type Ref } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: ReactNode;
  ref?: Ref<HTMLInputElement>;
}

const Input = ({ className, icon, error, ref, ...props }: Props) => {
  return (
    <div>
      <div
        className={clsx(className, "relative flex items-center gap-2 border", {
          "border-red-400": error,
        })}
      >
        {icon}
        <input
          ref={ref}
          className="border-none outline-none focus:outline-none"
          {...props}
        />
        {error && (
          <CircleAlert className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-red-400" />
        )}
      </div>
    </div>
  );
};

Input.displayName = "Input";
export default Input;
