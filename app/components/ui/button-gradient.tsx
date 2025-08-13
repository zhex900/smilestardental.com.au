import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "./background-gradient";
import { Button, buttonVariants } from "./button";

export interface ButtonGradientProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  gradientClassName?: string;
  containerClassName?: string;
  animate?: boolean;
}

const ButtonGradient = React.forwardRef<HTMLButtonElement, ButtonGradientProps>(
  (
    {
      className,
      variant = "ghost",
      size,
      asChild = false,
      gradientClassName,
      containerClassName,
      animate = true,
      ...props
    },
    ref
  ) => {
    const defaultClassName = "text-black hover:text-white rounded-xl";
    const defaultBoxClassName = "opacity-50 rounded-xl";
    return (
      <BackgroundGradient
        className={cn(defaultClassName, gradientClassName)}
        boxClassName={defaultBoxClassName}
        animate={animate}
      >
        <Button
          className={cn(defaultClassName, "rounded-xl", className)}
          variant={variant}
          size={size}
          asChild={asChild}
          ref={ref}
          {...props}
        />
      </BackgroundGradient>
    );
  }
);
ButtonGradient.displayName = "ButtonGradient";

export { ButtonGradient, buttonVariants };
