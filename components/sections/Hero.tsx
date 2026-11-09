'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import HeroProductVisual from './HeroProductVisual';

interface HeroProps {
  onRequestDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestDemo }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-brand-offwhite border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Subtle origin note - no pill styling */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold tracking-wider uppercase text-brand-teal"
          >
            Built for Finance Professionals · Born from Alkazim, Dubai
          </motion.p>

          {/* Main Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-navy leading-[1.08]"
          >
            Financial Automation Built for Precision.{' '}
            <span className="text-brand-green">The Software Prepares. You Decide.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-base sm:text-lg text-brand-navymuted max-w-2xl mx-auto leading-relaxed"
          >
            Endloops automates repetitive financial document processing, voucher matching, and working-paper preparation. We take care of the repetitive tasks, and the final sign-off always stays with people.
          </motion.p>

          {/* Dual Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
          >
            <Button
              variant="teal"
              size="lg"
              onClick={onRequestDemo}
              className="w-full sm:w-auto text-sm font-semibold px-6 py-3"
            >
              Request a Demo
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="#solutions"
              className="w-full sm:w-auto text-sm font-semibold px-6 py-3"
            >
              Explore Solutions &amp; Tools
            </Button>
          </motion.div>

          {/* Clean Trust Statements - Exact 3 items requested */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-brand-navy/70"
          >
            <span>Document extraction and review</span>
            <span className="text-brand-border hidden sm:inline">•</span>
            <span>Automated matching and validation</span>
            <span className="text-brand-border hidden sm:inline">•</span>
            <span>Human-controlled final approval</span>
          </motion.div>
        </div>

        {/* Rebuilt Realistic Product Visual */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 max-w-5xl mx-auto"
        >
          <HeroProductVisual />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
