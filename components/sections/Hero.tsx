'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import HeroProductVisual from './HeroProductVisual';
import BlurText from '@/src/components/reactbits/BlurText';
import AnimatedContent from '@/src/components/reactbits/AnimatedContent';
import SpecularButton from '@/src/components/reactbits/SpecularButton';

interface HeroProps {
  onRequestDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestDemo }) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-brand-offwhite border-b border-brand-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          {/* Main Display Headline with BlurText Animation: 64px desktop / 40px mobile, weight 600, line-height 1.08, letter-spacing -0.04em */}
          <div className="space-y-1">
            <BlurText
              text="Financial Automation Built for Precision."
              delay={30}
              animateBy="words"
              direction="top"
              as="h1"
              className="text-display font-semibold text-brand-navy tracking-tight justify-center text-center"
            />
            <BlurText
              text="The Software Prepares. You Decide."
              delay={45}
              animateBy="words"
              direction="top"
              as="div"
              color="#079B78"
              className="text-display font-semibold text-brand-green tracking-tight justify-center text-center"
            />
          </div>

          {/* Large Body: 18px desktop / 16px mobile, weight 400, line-height 1.65 */}
          <p className="text-body-lg text-brand-navymuted max-w-xl mx-auto mt-4 leading-relaxed">
            Automate document extraction, voucher matching, and working-paper preparation. The software does the repetitive work; final sign-off always stays with you.
          </p>

          {/* Dual Action CTAs: Button 15px, weight 500 */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <SpecularButton
              size="md"
              radius={18}
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
              className="w-full sm:w-auto text-btn font-medium px-6 py-3"
            >
              Request a Demo
            </SpecularButton>
            <Button
              variant="secondary"
              size="md"
              href="#solutions"
              className="w-full sm:w-auto"
            >
              Explore Solutions &amp; Tools
            </Button>
          </div>

          {/* Labels & metadata: 12px desktop / 11px mobile, weight 500, line-height 1.4 */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-label text-brand-navymuted">
            <span>Document extraction and review</span>
            <span className="text-brand-border">•</span>
            <span>Automated matching and validation</span>
            <span className="text-brand-border">•</span>
            <span>Human-controlled final approval</span>
          </div>
        </div>

        {/* Rebuilt Realistic Product Visual with AnimatedContent */}
        <AnimatedContent
          distance={36}
          direction="vertical"
          duration={0.8}
          ease="power3.out"
          trigger="mount"
          className="mt-10 sm:mt-14 max-w-4xl mx-auto"
        >
          <HeroProductVisual />
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Hero;
