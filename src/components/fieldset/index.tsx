import Select, { type SelectOptionProps, type SelectProps } from "../select";
import React, { createContext, useContext } from "react";
import Input, { type Props as InputProps } from "../input";
import Textarea, { type Props as TextareaProps } from "../textarea";
import Button, { type Props as ButtonProps } from "../button";
import clsx from "clsx";

interface FieldsetProps {
  className?: string;
  children?: React.ReactNode;
  required?: boolean;
}

interface FieldsetContextType {
  required?: boolean;
}

const context = createContext<FieldsetContextType>({ required: false });

const FieldsetRoot = ({ className, children, required }: FieldsetProps) => {
  return (
    <context.Provider value={{ required }}>
      <fieldset
        className={clsx("relative group flex flex-col w-full", className)}
      >
        {children}
      </fieldset>
    </context.Provider>
  );
};

const FieldsetLabel = ({
  children,
  htmlFor,
  className,
}: {
  children: React.ReactNode;
  htmlFor: string;
  className?: string;
}) => {
  const { required } = useContext(context);

  return (
    <label htmlFor={htmlFor} className={clsx(className)}>
      {children} {required && <span className="text-red-500">*</span>}
    </label>
  );
};

const FieldsetDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <p className={clsx(className)}>{children}</p>;

const FieldsetInput = ({ className, ...props }: InputProps) => (
  <Input className={className} {...props} />
);

const FieldsetSelect = ({ className, children, ...props }: SelectProps) => (
  <div>
    <Select.Root className={clsx(className)} {...props}>
      {children}
    </Select.Root>
  </div>
);

const FieldsetSelectOption = ({
  className,
  children,
  ...props
}: SelectOptionProps) => (
  <div>
    <Select.Option className={clsx(className)} {...props}>
      {children}
    </Select.Option>
  </div>
);

const FieldsetTextarea = ({ className, ...props }: TextareaProps) => (
  <Textarea className={clsx(className)} {...props} />
);

const FieldsetError = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <div
    role="alert"
    className={clsx("text-red-500 text-xs -translate-y-2", className, {
      hidden: !children,
    })}
  >
    {children}
  </div>
);

const FieldsetRadio = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={clsx(className)}>{children}</div>;

const FieldsetButton = ({ children, className, ...props }: ButtonProps) => {
  return (
    <Button className={className} {...props}>
      {children}
    </Button>
  );
};

// Recompose the Fieldset object
const Fieldset = {
  Root: FieldsetRoot,
  Label: FieldsetLabel,
  Description: FieldsetDescription,
  Radio: FieldsetRadio,
  Input: FieldsetInput,
  Select: FieldsetSelect,
  selectOption: FieldsetSelectOption,
  Textarea: FieldsetTextarea,
  Button: FieldsetButton,
  Error: FieldsetError,
} as const;

export default Fieldset;
