import clsx from "clsx";
import type SelectProps from "./select";
import {
  type SelectHTMLAttributes,
  type OptionHTMLAttributes,
  type ReactNode,
} from "react";
import { CiCircleAlert } from "react-icons/ci";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  icon?: ReactNode;
  //   children: ReactNode;
}

export interface SelectOptionProps
  extends OptionHTMLAttributes<HTMLOptionElement> {
  children: ReactNode;
}

const SelectRoot = ({
  className,
  children,
  error,
  icon,
  ...props
}: SelectProps) => {
  return (
    <div>
      <div
        className={clsx(className, "relative flex items-center gap-2 border", {
          "border-red-400": error,
        })}
      >
        {icon}
        <select className="w-full" {...props}>
          {children}
        </select>
        {error && (
          <CiCircleAlert className=" absolute right-4 top-1/3 text-2xl text-red-400" />
        )}
      </div>
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
};

const SelectOption = ({ className, children, ...props }: SelectOptionProps) => {
  return (
    <option className={className} {...props}>
      {children}
    </option>
  );
};

const SelectField = {
  Root: SelectRoot,
  Option: SelectOption,
};
export type { SelectProps };
export default SelectField;
