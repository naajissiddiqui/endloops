import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  height?: number;
  width?: number;
  asLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  height = 36,
  width = 124,
  asLink = true,
}) => {
  const content = (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* 
        The original Endloops logo extracted directly from the assignment brief.
        Preserving exact colors (green/teal loop mark, navy Endloops typography) without stretching or distortion.
      */}
      <Image
        src="/images/endloops-logo.png"
        alt="Endloops"
        width={width}
        height={height}
        className="h-auto w-auto max-h-[38px] object-contain"
        priority
      />
    </div>
  );

  if (asLink) {
    return (
      <Link href="/" className="inline-flex items-center transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
};

export default Logo;

