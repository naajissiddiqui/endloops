import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'green' | 'teal' | 'navy' | 'blue' | 'purple' | 'neutral';
  size?: 'sm' | 'md';
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'teal',
  size = 'md',
  dot = false,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full select-none';

  const variants = {
    teal: 'bg-brand-mint text-brand-green border border-brand-teal/20',
    green: 'bg-brand-mint text-brand-green border border-brand-green/20',
    navy: 'bg-brand-navy/5 text-brand-navy border border-brand-navy/10',
    blue: 'bg-blue-50 text-brand-blue border border-brand-blue/20',
    purple: 'bg-brand-lavender text-brand-purple border border-brand-purple/20',
    neutral: 'bg-brand-offwhite text-brand-navymuted border border-brand-border',
  };

  const dotColors = {
    teal: 'bg-brand-teal',
    green: 'bg-brand-green',
    navy: 'bg-brand-navy',
    blue: 'bg-brand-blue',
    purple: 'bg-brand-purple',
    neutral: 'bg-brand-navymuted',
  };

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1.5',
    md: 'text-xs px-3.5 py-1 gap-2',
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {dot && (
        <span className={cn('h-1.5 w-1.5 rounded-full shrink-0', dotColors[variant])} />
      )}
      {children}
    </span>
  );
};

export default Badge;

