'use client';

import React, { useEffect, useRef } from 'react';

interface EtherealRibbonsBackgroundProps {
  imageSrc?: string;
  className?: string;
}

export const EtherealRibbonsBackground: React.FC<EtherealRibbonsBackgroundProps> = ({
  imageSrc = '/images/ethereal-aqua-wave-ribbons.png',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerBaseRef = useRef<HTMLDivElement>(null);
  const layerGlowRef = useRef<HTMLDivElement>(null);
  const layerLightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (prefersReducedMotion || !canHover) {
      return;
    }

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isTracking = true;

    const MAX_X = 12;
    const MAX_Y = 6;
    const EASING = 0.05;

    const onPointerMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;

      const clampedNx = Math.max(-1, Math.min(1, nx));
      const clampedNy = Math.max(-1, Math.min(1, ny));

      targetX = -clampedNx * MAX_X;
      targetY = -clampedNy * MAX_Y;
    };

    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const animate = () => {
      currentX += (targetX - currentX) * EASING;
      currentY += (targetY - currentY) * EASING;

      if (layerBaseRef.current) {
        layerBaseRef.current.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      }

      if (layerGlowRef.current) {
        const glowX = currentX * 1.35;
        const glowY = currentY * 1.35;
        layerGlowRef.current.style.transform = `translate3d(${glowX.toFixed(2)}px, ${glowY.toFixed(2)}px, 0)`;
      }

      if (layerLightRef.current) {
        const lightX = -currentX * 0.5;
        const lightY = -currentY * 0.5;
        layerLightRef.current.style.transform = `translate3d(${lightX.toFixed(2)}px, ${lightY.toFixed(2)}px, 0)`;
      }

      if (isTracking) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const heroElement = containerRef.current?.parentElement || window;
    heroElement.addEventListener('mousemove', onPointerMove as EventListener, { passive: true });
    heroElement.addEventListener('mouseleave', onPointerLeave as EventListener, { passive: true });

    rafId = requestAnimationFrame(animate);

    return () => {
      isTracking = false;
      cancelAnimationFrame(rafId);
      heroElement.removeEventListener('mousemove', onPointerMove as EventListener);
      heroElement.removeEventListener('mouseleave', onPointerLeave as EventListener);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <div
        ref={layerBaseRef}
        className="absolute -inset-[4%] w-[108%] h-[108%] will-change-transform"
      >
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover object-center pointer-events-none"
          draggable={false}
          loading="eager"
        />
      </div>

      <div
        ref={layerGlowRef}
        className="absolute -inset-[5%] w-[110%] h-[110%] will-change-transform opacity-25 mix-blend-soft-light filter blur-[10px]"
      >
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover object-center pointer-events-none"
          draggable={false}
        />
      </div>

      <div
        ref={layerLightRef}
        className="absolute inset-0 w-full h-full will-change-transform bg-[radial-gradient(ellipse_60%_50%_at_50%_48%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.3)_45%,transparent_75%)]"
      />

      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-brand-offwhite via-brand-offwhite/60 to-transparent" />
    </div>
  );
};

export default EtherealRibbonsBackground;

