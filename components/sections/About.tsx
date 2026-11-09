'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface AboutProps {
  onRequestDemo: () => void;
}

export const About: React.FC<AboutProps> = ({ onRequestDemo }) => {
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
          {/* Main Story Column - Short, crisp paragraphs */}
          <div className="md:col-span-7 space-y-3.5 text-xs sm:text-sm text-brand-navymuted leading-relaxed">
            <p>
              Endloops originated from the technology team of an established accounting and audit firm in Dubai. We build focused software that eliminates repetitive financial work for auditors, finance teams, and property management companies.
            </p>

            <p>
              Our philosophy is simple: <strong className="text-brand-navy">the software prepares the work, and the professional reviews and decides.</strong> The software automates extraction and reconciliation; final sign-off always stays with people.
            </p>

            <div className="pt-2 text-xs text-brand-navy font-medium">
              Dubai, United Arab Emirates
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-5 bg-brand-navy text-white rounded-xl p-5 sm:p-6 space-y-3 text-xs">
            <h3 className="text-sm font-bold text-white">Our Focus</h3>
            <p className="text-slate-300 leading-relaxed">
              Delivering dependable, audit-tested automation for accounting, audit, and property finance teams across the GCC and beyond.
            </p>
            <div className="pt-2">
              <Button
                variant="teal"
                size="sm"
                onClick={onRequestDemo}
                className="w-full text-xs py-2 font-medium"
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
