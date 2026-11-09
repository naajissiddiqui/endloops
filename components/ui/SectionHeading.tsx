import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  eyebrow?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
  align = 'center',
  className,
  eyebrow,
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'max-w-3xl mb-10 md:mb-14',
        isCenter ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'text-xs font-semibold uppercase tracking-wider text-brand-teal mb-3',
            isCenter ? 'text-center' : 'text-left'
          )}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-brand-navymuted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
