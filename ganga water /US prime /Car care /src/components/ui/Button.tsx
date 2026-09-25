import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-brand-green text-white hover:bg-brand-dark-green shadow-md hover:shadow-lg": variant === "primary",
            "bg-brand-deep-navy text-white hover:bg-brand-navy shadow-md hover:shadow-lg": variant === "secondary",
            "bg-white text-brand-deep-navy hover:bg-slate-50 shadow-md hover:shadow-lg": variant === "white",
            "border-2 border-brand-border bg-white hover:border-brand-green hover:text-brand-green text-brand-text": variant === "outline",
            "hover:bg-brand-light-green hover:text-brand-green text-brand-text-muted": variant === "ghost",
            "h-10 px-5 text-sm": size === "sm",
            "h-12 px-8 text-base": size === "md",
            "h-14 px-10 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
