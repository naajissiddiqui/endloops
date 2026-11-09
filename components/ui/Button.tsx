import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'teal';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      href,
      icon,
      iconPosition = 'right',
      isLoading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none';

    const variants = {
      primary:
        'bg-brand-navy text-white hover:bg-brand-navylight focus:ring-brand-navy shadow-soft-sm hover:shadow-soft-md',
      secondary:
        'bg-brand-offwhite text-brand-navy border border-brand-border hover:bg-brand-offwhitesubtle hover:border-brand-bordersubtle focus:ring-brand-teal shadow-soft-sm',
      outline:
        'bg-transparent text-brand-navy border border-brand-border hover:bg-white hover:border-brand-teal/50 focus:ring-brand-teal',
      ghost:
        'bg-transparent text-brand-navymuted hover:text-brand-navy hover:bg-brand-mint/40 focus:ring-brand-teal',
      teal:
        'bg-gradient-to-r from-brand-green to-brand-teal text-white hover:opacity-95 shadow-soft-sm hover:shadow-glow-teal focus:ring-brand-teal',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-2 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-6 py-3.5 gap-2.5',
    };

    const combinedClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    const innerContent = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
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
        {!isLoading && icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {!isLoading && icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={combinedClasses}>
          {innerContent}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClasses}
        {...props}
      >
        {innerContent}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;

