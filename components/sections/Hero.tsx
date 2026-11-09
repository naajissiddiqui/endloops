'use client';

import React from 'react';
import { motion } from 'framer-motion';
import BlurText from '@/src/components/reactbits/BlurText';
import SpecularButton from '@/src/components/reactbits/SpecularButton';
import EtherealRibbonsBackground from '@/src/components/animations/EtherealRibbonsBackground';

interface HeroProps {
  onRequestDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestDemo }) => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen w-full flex flex-col justify-center items-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-brand-offwhite">
      {/* 1. Immersive Ethereal Aqua Wave Ribbons Parallax Background */}
      <EtherealRibbonsBackground />

      {/* 2. Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Main Display Headline: Desktop 76–88px / Tablet 56–64px / Mobile 38–44px, tight leading, negative tracking */}
        <div className="space-y-1.5 sm:space-y-2 max-w-4xl mx-auto">
          <BlurText
            text="Financial Work,"
            delay={25}
            animateBy="words"
            direction="top"
            as="h1"
            className="text-hero-display text-brand-navy tracking-tighter justify-center text-center"
          />
          <BlurText
            text="Without the Busywork."
            delay={35}
            animateBy="words"
            direction="top"
            as="div"
            className="text-hero-display text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-brand-teal to-brand-green tracking-tighter justify-center text-center pb-1"
          />
        </div>

        {/* Supporting Paragraph: Max-width ~680px */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-body-lg text-brand-navymuted max-w-[680px] mx-auto mt-6 sm:mt-7 leading-relaxed font-normal"
        >
          Automate repetitive financial tasks, streamline document reviews and prepare working papers — while keeping every final decision in professional hands.
        </motion.p>

        {/* Dual Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 sm:pt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
        >
          {/* Primary SpecularButton */}
          <SpecularButton
            size="md"
            radius={22}
            tint="#079B78"
            tintOpacity={1}
            textColor="#ffffff"
            lineColor="#ffffff"
            baseColor="#079B78"
            intensity={1}
            idleIntensity={0.35}
            shineSize={10}
            shineFade={34}
            thickness={1.2}
            glow={1}
            followMouse={true}
            proximity={250}
            onClick={onRequestDemo}
            className="w-full sm:w-auto text-btn font-medium px-8 py-3.5 shadow-sm hover:shadow transition-shadow"
          >
            Request a Demo
          </SpecularButton>

          {/* Secondary Explore Button */}
          <a
            href="#solutions"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-full border border-brand-border bg-white/80 hover:bg-white text-btn font-medium text-brand-navy hover:text-brand-green shadow-xs hover:shadow-sm backdrop-blur-sm transition-all"
          >
            Explore Solutions
          </a>
        </motion.div>
      </div>

      {/* 3. Subtle bottom horizon gradient melting into next section */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-offwhite via-brand-offwhite/50 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
