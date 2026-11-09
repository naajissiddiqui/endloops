'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface AboutProps {
  onRequestDemo?: () => void;
}

export const About: React.FC<AboutProps> = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-white border-b border-brand-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="About Endloops"
            description="Financial automation rooted in practical accounting and audit workflows."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto space-y-4 text-center mt-4">
            <p className="text-body text-brand-navymuted leading-relaxed">
              Endloops originated from the technology team of an established accounting and audit firm in Dubai. We build focused software that eliminates repetitive financial work for auditors, finance teams, and property management companies.
            </p>

            <p className="text-body text-brand-navymuted leading-relaxed">
              Our philosophy is simple: <strong className="text-brand-navy font-semibold">the software prepares the work, and the professional reviews and decides.</strong> The software automates extraction and reconciliation; final sign-off always stays with people.
            </p>

            <div className="pt-2 text-label text-brand-navymuted font-medium">
              Dubai, United Arab Emirates
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
