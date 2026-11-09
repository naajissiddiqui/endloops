'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface CurtainRevealProps {
  children: React.ReactNode;
  className?: string;
  initialScale?: number;
  initialY?: number;
}

export const CurtainReveal: React.FC<CurtainRevealProps> = ({
  children,
  className = '',
  initialScale = 1.08,
  initialY = 40,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll offset: tracks entry from bottom of viewport into natural reading position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start 65%'],
  });

  // Scale: transitions smoothly from initialScale (1.08) down to 1.0 natural size
  const scale = useTransform(scrollYProgress, [0, 1], [initialScale, 1]);

  // Y Translation: begins translated down, rises into view
  const y = useTransform(scrollYProgress, [0, 1], [initialY, 0]);

  // Opacity: ramps smoothly from 0.85 to 1
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.85, 1]);

  // Curtain-style reveal mask: smoothly unmasks from 15% to 0%
  const clipProgress = useTransform(scrollYProgress, [0, 0.95], [15, 0]);
  const clipPath = useTransform(
    clipProgress,
    (val) => `inset(${val}% 0% 0% 0% round 16px)`
  );

  if (shouldReduceMotion) {
    return <div className={`relative ${className}`}>{children}</div>;
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      <motion.div
        style={{
          scale,
          y,
          opacity,
          clipPath,
        }}
        className="w-full h-full will-change-transform transform-gpu origin-center"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default CurtainReveal;
