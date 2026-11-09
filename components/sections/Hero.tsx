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
          {/* Main Display Headline - Clean, permanent visibility */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy leading-[1.15]">
            Financial Automation Built for Precision.{' '}
            <span className="text-brand-green">The Software Prepares. You Decide.</span>
          </h1>

          {/* Ultra-concise subtext */}
          <p className="text-base sm:text-lg text-brand-navymuted max-w-xl mx-auto leading-relaxed">
            Automate document extraction, voucher matching, and working-paper preparation. The software does the repetitive work; final sign-off always stays with you.
          </p>

          {/* Dual Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <Button
              variant="teal"
              size="md"
              onClick={onRequestDemo}
              className="w-full sm:w-auto text-sm px-6 py-2.5 font-medium"
            >
              Request a Demo
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="#solutions"
              className="w-full sm:w-auto text-sm px-6 py-2.5 font-medium"
            >
              Explore Solutions &amp; Tools
            </Button>
          </div>

          {/* Clean minimal trust points */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-brand-navymuted">
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
