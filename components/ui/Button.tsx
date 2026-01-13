
import * as React from "react";
import clsx from "clsx";

export type ButtonVariant = "primary" | "outline";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", type = "button", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-full px-5 py-0 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants: Record<ButtonVariant, string> = {
      primary:
        "h-12 w-full bg-foreground text-background hover:opacity-95 md:w-[158px]",
      outline:
        "h-12 w-full border border-solid border-black/[.08] hover:bg-black/[.04] md:w-[158px]",
    };

    return (
      <button
        ref={ref}
        type={type}
        className={clsx(base, variants[variant], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
