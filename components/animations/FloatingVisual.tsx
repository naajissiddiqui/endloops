'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface FloatingVisualProps {
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
}

export const FloatingVisual: React.FC<FloatingVisualProps> = ({
  children,
  className = '',
  amplitude = 8,
  duration = 6,
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FloatingVisual;

