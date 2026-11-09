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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-6">
          {/* Main Story Column */}
          <div className="md:col-span-7 space-y-3.5">
            <p className="text-body text-brand-navymuted leading-relaxed">
              Endloops originated from the technology team of an established accounting and audit firm in Dubai. We build focused software that eliminates repetitive financial work for auditors, finance teams, and property management companies.
            </p>

            <p className="text-body text-brand-navymuted leading-relaxed">
              Our philosophy is simple: <strong className="text-brand-navy font-semibold">the software prepares the work, and the professional reviews and decides.</strong> The software automates extraction and reconciliation; final sign-off always stays with people.
            </p>

            <div className="pt-2 text-label text-brand-navy font-medium">
              Dubai, United Arab Emirates
            </div>
          </div>

          {/* Right Column: H4 card heading */}
          <div className="md:col-span-5 bg-brand-navy text-white rounded-xl p-5 sm:p-6 space-y-3">
            <h4 className="text-h4 text-white">
              Our Focus
            </h4>
            <p className="text-body-sm text-slate-300 leading-relaxed">
              Delivering dependable, audit-tested automation for accounting, audit, and property finance teams across the GCC and beyond.
            </p>
            <div className="pt-3 border-t border-white/10 text-label text-brand-teal font-mono">
              Practical Fintech · Dubai
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
