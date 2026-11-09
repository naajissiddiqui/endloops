'use client';

import React from 'react';
import { MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface AboutProps {
  onRequestDemo: () => void;
}

export const About: React.FC<AboutProps> = ({ onRequestDemo }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="About Endloops"
            description="Born from an accounting and audit firm in Dubai, built for financial professionals across the GCC and beyond."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto mt-12">
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-brand-navymuted leading-relaxed">
            <h3 className="text-2xl font-bold text-brand-navy">
              Who we are
            </h3>

            <p>
              <strong className="text-brand-navy">Alkazim</strong> is an accounting and audit firm based in Dubai. Over the years, its technology department built software that automates financial work. That department is now <strong className="text-brand-navy">Endloops</strong>, a company that builds automation for Financial Professionals.
            </p>

            <p>
              Our users are accountants, auditors, finance teams, and property management companies. Their work is detailed and time-sensitive, and they rely on tools they can trust. For them, reliability and clarity matter as much as appearance.
            </p>

            <h4 className="text-lg font-bold text-brand-navy pt-2">
              The need we address
            </h4>

            <p>
              Much of a finance professional&apos;s day goes into tasks that software can handle. This work is repetitive and time-consuming, leaves room for error, and takes attention away from judgement and from clients.
            </p>

            <p>
              Our approach is simple: <strong className="text-brand-navy">the software prepares the work, and the professional reviews and decides.</strong> We take care of the repetitive tasks, and the final sign-off always stays with people.
            </p>

            <div className="pt-4 flex items-center gap-2 text-xs font-semibold text-brand-navy">
              <MapPin className="w-4 h-4 text-brand-teal shrink-0" />
              <span>Headquartered in Dubai, United Arab Emirates</span>
            </div>
          </div>

          {/* Right Column: Where we are heading & Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-navy text-white rounded-2xl p-6 sm:p-7 space-y-4">
              <h3 className="text-lg font-bold">
                Where we are heading
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Endloops is a young company with a clear ambition: to become the trusted automation partner for accounting, audit and property finance teams in the GCC region and beyond. We are growing our engineering, design and quality capabilities to get there.
              </p>
              <div className="pt-2 text-xs text-brand-teal font-medium">
                Alkazim Technology Department → Endloops
              </div>
            </div>

            <div className="bg-brand-offwhite rounded-2xl p-6 sm:p-7 border border-brand-border space-y-3">
              <h4 className="text-sm font-bold text-brand-navy">
                Connect with our team
              </h4>
              <p className="text-xs text-brand-navymuted leading-relaxed">
                Interested in learning more about how Endloops automates financial workflows for accounting and audit practices?
              </p>
              <Button
                variant="teal"
                size="sm"
                onClick={onRequestDemo}
                className="w-full text-xs py-2.5 mt-2"
              >
                Request a Demonstration
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
