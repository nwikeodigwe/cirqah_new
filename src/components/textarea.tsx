import clsx from "clsx";
import { CircleAlert } from "lucide-react";
import { type TextareaHTMLAttributes } from "react";

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  className?: string;
}

const Textarea = ({ error, className, ...props }: Props) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-2 border",
        className,
        error && "border-red-400"
      )}
    >
      <textarea
        {...props}
        className="border-none outline-none h-full text-sm"
      ></textarea>
      {error && (
        <>
          <div className="absolute right-0 top-0">
            <CircleAlert className="text-red-400" />
          </div>
          <p className="text-red-400 text-sm">{error}</p>
        </>
      )}
    </div>
  );
};

export default Textarea;
