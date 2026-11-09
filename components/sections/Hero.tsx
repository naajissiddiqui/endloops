'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import HeroProductVisual from './HeroProductVisual';

interface HeroProps {
  onRequestDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestDemo }) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-brand-offwhite border-b border-brand-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          {/* Main Display Headline: 64px desktop / 40px mobile, weight 600, line-height 1.08, letter-spacing -0.04em */}
          <h1 className="text-display text-brand-navy">
            Financial Automation Built for Precision.{' '}
            <span className="text-brand-green">The Software Prepares. You Decide.</span>
          </h1>

          {/* Large Body: 18px desktop / 16px mobile, weight 400, line-height 1.65 */}
          <p className="text-body-lg text-brand-navymuted max-w-xl mx-auto mt-4">
            Automate document extraction, voucher matching, and working-paper preparation. The software does the repetitive work; final sign-off always stays with you.
          </p>

          {/* Dual Action CTAs: Button 15px, weight 500 */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <Button
              variant="teal"
              size="md"
              onClick={onRequestDemo}
              className="w-full sm:w-auto"
            >
              Request a Demo
            </Button>
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

        {/* Rebuilt Realistic Product Visual */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto">
          <HeroProductVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;
