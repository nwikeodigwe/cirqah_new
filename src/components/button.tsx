import clsx from "clsx";
import React from "react";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button = React.memo(({ className, children, ...props }: Props) => {
  return (
    <button className={clsx(className)} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
