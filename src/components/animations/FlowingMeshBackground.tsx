'use client';

import React, { useEffect, useRef } from 'react';

interface FlowingMeshBackgroundProps {
  className?: string;
  speed?: number;
  dprCap?: number;
}

export const FlowingMeshBackground: React.FC<FlowingMeshBackgroundProps> = ({
  className = '',
  speed = 0.5,
  dprCap = 2,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let time = 0;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const effectiveSpeed = prefersReducedMotion ? 0.05 : speed;

    // Data structures for particles and waves
    interface FloatingParticle {
      x: number;
      y: number;
      baseY: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
      color: string;
      phase: number;
    }

    let floatingParticles: FloatingParticle[] = [];

    const initParticles = (w: number, h: number) => {
      const isMobile = w < 768;
      const count = isMobile ? 45 : 110;
      floatingParticles = [];

      const colors = [
        'rgba(7, 155, 120, ',   // Brand green
        'rgba(32, 185, 154, ',  // Brand teal
        'rgba(54, 121, 206, ',  // Brand blue
        'rgba(128, 103, 217, ', // Brand purple (very subtle)
      ];

      for (let i = 0; i < count; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const colorBase = colors[Math.floor(Math.random() * colors.length)];
        floatingParticles.push({
          x,
          y,
          baseY: y,
          size: Math.random() * 1.6 + 0.6,
          speedX: (Math.random() - 0.5) * 0.25,
          speedY: -Math.random() * 0.35 - 0.1,
          alpha: Math.random() * 0.45 + 0.15,
          color: colorBase,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect() || {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, dprCap);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initParticles(width, height);
    };

    resize();
    window.addEventListener('resize', resize);

    // Multi-octave wave function
    const wave = (x: number, z: number, t: number): number => {
      const f1 = 0.0016;
      const f2 = 0.0032;
      const f3 = 0.0008;

      const w1 = Math.sin(x * f1 + t * 0.65 + z * 0.18) * Math.cos(z * 0.08 + t * 0.4);
      const w2 = Math.sin(x * f2 - t * 0.5 + z * 0.12) * Math.sin(z * 0.14 - t * 0.3);
      const w3 = Math.cos(x * f3 + t * 0.35 + z * 0.22) * 1.2;

      return (w1 * 0.55 + w2 * 0.3 + w3 * 0.15);
    };

    let lastTimestamp = performance.now();

    const render = (timestamp: number) => {
      const dt = Math.min((timestamp - lastTimestamp) / 1000, 0.1);
      lastTimestamp = timestamp;
      time += dt * effectiveSpeed;

      ctx.clearRect(0, 0, width, height);

      const isMobile = width < 768;

      // 1. Soft ambient glow clouds (Underlay)
      // Green blob - lower left
      const g1 = ctx.createRadialGradient(
        width * 0.15 + Math.sin(time * 0.4) * 40,
        height * 0.75 + Math.cos(time * 0.5) * 30,
        10,
        width * 0.2,
        height * 0.75,
        width * 0.45
      );
      g1.addColorStop(0, 'rgba(7, 155, 120, 0.18)');
      g1.addColorStop(0.6, 'rgba(32, 185, 154, 0.08)');
      g1.addColorStop(1, 'rgba(246, 250, 249, 0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      // Teal blob - lower right
      const g2 = ctx.createRadialGradient(
        width * 0.82 + Math.cos(time * 0.35) * 50,
        height * 0.68 + Math.sin(time * 0.45) * 35,
        10,
        width * 0.8,
        height * 0.68,
        width * 0.42
      );
      g2.addColorStop(0, 'rgba(32, 185, 154, 0.16)');
      g2.addColorStop(0.5, 'rgba(54, 121, 206, 0.07)');
      g2.addColorStop(1, 'rgba(246, 250, 249, 0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      // Subtle cyan/blue highlight - top right flank
      const g3 = ctx.createRadialGradient(
        width * 0.88 + Math.sin(time * 0.3) * 30,
        height * 0.22 + Math.cos(time * 0.25) * 25,
        10,
        width * 0.88,
        height * 0.22,
        width * 0.35
      );
      g3.addColorStop(0, 'rgba(54, 121, 206, 0.10)');
      g3.addColorStop(0.7, 'rgba(128, 103, 217, 0.03)');
      g3.addColorStop(1, 'rgba(246, 250, 249, 0)');
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, width, height);

      // 2. Flowing Topographic Mesh Waves & Stippled Contours
      const ribbonCount = isMobile ? 22 : 36;
      const stepX = isMobile ? 18 : 12;
      const totalStepsX = Math.ceil(width / stepX) + 1;

      // Center clearing parameters (ensures headline sits in pristine negative space)
      const centerX = width * 0.5;
      const clearRadiusX = width * 0.36;

      ctx.save();

      for (let r = 0; r < ribbonCount; r++) {
        // Depth factor z (0 near foreground/bottom, 1 far horizon)
        const z = r / ribbonCount;
        const horizonY = height * 0.48 + z * (height * 0.50);
        const waveAmp = (18 + z * 52);

        // Alpha progression: higher opacity in foreground, subtle mist in distance
        const baseAlpha = 0.08 + Math.pow(z, 1.4) * 0.45;

        // Color modulation based on depth and lateral position
        let strokeColor: string;
        let dotColor: string;
        if (z < 0.3) {
          // Deep valleys: teal to soft blue
          strokeColor = `rgba(32, 185, 154, ${baseAlpha * 0.75})`;
          dotColor = `rgba(54, 121, 206, ${baseAlpha * 0.9})`;
        } else if (z < 0.7) {
          // Mid slopes: primary emerald green
          strokeColor = `rgba(7, 155, 120, ${baseAlpha * 0.85})`;
          dotColor = `rgba(7, 155, 120, ${baseAlpha * 0.95})`;
        } else {
          // Foreground ridges: crisp teal & emerald highlights
          strokeColor = `rgba(32, 185, 154, ${baseAlpha * 0.9})`;
          dotColor = `rgba(7, 155, 120, ${baseAlpha * 1.1})`;
        }

        ctx.beginPath();
        let first = true;

        for (let i = 0; i <= totalStepsX; i++) {
          const x = i * stepX;
          
          // Calculate distance from center to suppress wave height in the text clearing
          const distFromCenter = Math.abs(x - centerX);
          const centerClearFactor = Math.min(1, Math.pow(distFromCenter / clearRadiusX, 2));
          // Center waves dip downward to open up space
          const centerDip = (1 - Math.min(1, distFromCenter / (clearRadiusX * 1.1))) * (35 * (1 - z));

          const rawElevation = wave(x, r, time);
          const y = horizonY + (rawElevation * waveAmp * (0.35 + centerClearFactor * 0.65)) + centerDip;

          if (first) {
            ctx.moveTo(x, y);
            first = false;
          } else {
            ctx.lineTo(x, y);
          }

          // Draw stippled particle dot along the contour (signature Circular reference texture)
          // Don't draw on every point to create organic pointillist density
          const shouldDrawDot = (i + r * 3) % (isMobile ? 3 : 2) === 0;
          if (shouldDrawDot) {
            // Flank density: higher on edges, sparse in center
            const flankBoost = 0.2 + centerClearFactor * 0.8;
            const dotAlpha = (baseAlpha * flankBoost * (0.6 + Math.sin(i * 0.5 + time * 1.5 + r) * 0.4));
            
            if (dotAlpha > 0.04) {
              const dotRadius = (0.7 + z * 0.8 + (Math.sin(i * 1.2 + r) > 0.5 ? 0.4 : 0));
              ctx.save();
              ctx.fillStyle = dotColor;
              ctx.globalAlpha = Math.min(1, dotAlpha * 1.2);
              ctx.beginPath();
              // Subtle jitter for organic sand/mesh stippling
              const jitterX = Math.sin(i * 3.7 + r) * 0.8;
              const jitterY = Math.cos(i * 2.3 + r) * 0.8;
              ctx.arc(x + jitterX, y + jitterY, dotRadius, 0, Math.PI * 2);
              ctx.fill();
              ctx.restore();
            }
          }
        }

        // Draw delicate line connecting contour
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 0.75 + z * 0.45;
        ctx.stroke();
      }

      ctx.restore();

      // 3. Floating atmospheric data particles
      ctx.save();
      for (let p of floatingParticles) {
        p.y += p.speedY * (1 + Math.sin(time + p.phase) * 0.2);
        p.x += p.speedX + Math.sin(time * 0.6 + p.phase) * 0.2;

        // Wrap around seamlessly
        if (p.y < 0) p.y = height + 10;
        if (p.x < 0) p.x = width + 10;
        if (p.x > width) p.x = -10;

        // Distance from center clearing
        const distFromCenter = Math.abs(p.x - centerX);
        const centerAlpha = Math.min(1, Math.pow(distFromCenter / (clearRadiusX * 0.8), 1.5));

        const pulse = 0.75 + Math.sin(time * 2 + p.phase) * 0.25;
        const currentAlpha = p.alpha * pulse * (0.25 + centerAlpha * 0.75);

        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 4. Center Luminous Vignette (Soft clearing behind main headline)
      const centerGrad = ctx.createRadialGradient(
        centerX,
        height * 0.45,
        10,
        centerX,
        height * 0.45,
        width * 0.48
      );
      centerGrad.addColorStop(0, 'rgba(255, 255, 255, 0.75)');
      centerGrad.addColorStop(0.45, 'rgba(255, 255, 255, 0.45)');
      centerGrad.addColorStop(0.85, 'rgba(246, 250, 249, 0.10)');
      centerGrad.addColorStop(1, 'rgba(246, 250, 249, 0)');
      ctx.fillStyle = centerGrad;
      ctx.fillRect(0, 0, width, height);

      // 5. Seamless bottom fade into the next section (#F6FAF9)
      const bottomGrad = ctx.createLinearGradient(0, height * 0.75, 0, height);
      bottomGrad.addColorStop(0, 'rgba(246, 250, 249, 0)');
      bottomGrad.addColorStop(0.65, 'rgba(246, 250, 249, 0.65)');
      bottomGrad.addColorStop(1, '#F6FAF9');
      ctx.fillStyle = bottomGrad;
      ctx.fillRect(0, height * 0.75, width, height * 0.25);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [speed, dprCap]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        aria-hidden="true"
      />
    </div>
  );
};

export default FlowingMeshBackground;

