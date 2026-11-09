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
        'max-w-3xl mb-8 md:mb-12',
        isCenter ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'text-label font-medium text-brand-teal mb-2 md:mb-2.5',
            isCenter ? 'text-center' : 'text-left'
          )}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="text-h2 text-brand-navy">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-3 md:mt-4 text-body-lg text-brand-navymuted max-w-2xl',
            isCenter ? 'mx-auto' : ''
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
