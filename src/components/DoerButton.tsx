import * as React from "react";
import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const doerButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 h-10 rounded-full font-medium text-sm transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        primary: "btn-gradient shadow-glow",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
        outline:
          "border border-border text-foreground hover:border-primary hover:text-primary",
        ghost: "text-foreground hover:bg-muted",
      },
      size: {
        default: "px-6",
        lg: "h-12 px-8 text-base",
        sm: "h-9 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface DoerButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof doerButtonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

export const DoerButton = React.forwardRef<HTMLButtonElement, DoerButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(doerButtonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>A carregar...</span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  },
);
DoerButton.displayName = "DoerButton";

export { doerButtonVariants };
