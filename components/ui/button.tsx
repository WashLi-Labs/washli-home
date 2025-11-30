import * as React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", children, asChild = false, ...props }, ref) => {
    const classes = [
      "inline-flex items-center justify-center",
      "rounded-md",
      "text-sm font-medium",
      "transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none",
      "bg-primary text-primary-foreground",
      "hover:bg-primary/90",
      "h-10 px-4 py-2",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    if (asChild) {
      return <span className={classes}>{children}</span>;
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
