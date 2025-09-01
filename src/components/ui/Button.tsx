import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-luxury-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-gradient-gold text-luxury-black hover:shadow-gold hover:scale-105 focus:ring-luxury-gold",
        secondary: "border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black focus:ring-luxury-gold",
        ghost: "text-luxury-cream hover:text-luxury-gold hover:bg-luxury-gold/10 focus:ring-luxury-gold",
        outline: "border border-luxury-cream/30 text-luxury-cream hover:bg-luxury-cream hover:text-luxury-black focus:ring-luxury-cream",
        destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
        luxury: "bg-luxury-charcoal text-luxury-gold border border-luxury-gold/30 hover:bg-luxury-gold hover:text-luxury-black hover:border-luxury-gold focus:ring-luxury-gold"
      },
      size: {
        sm: "h-10 px-4 py-2 text-sm",
        default: "h-12 px-8 py-4 text-base",
        lg: "h-14 px-12 py-6 text-lg",
        xl: "h-16 px-16 py-8 text-xl",
        icon: "h-10 w-10"
      },
      fullWidth: {
        true: "w-full",
        false: ""
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, loading = false, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    const isDisabled = disabled || loading;

    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {leftIcon && !loading && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && !loading && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };