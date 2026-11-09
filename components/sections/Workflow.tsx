'use client';

import React from 'react';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import CurtainReveal from '@/components/animations/CurtainReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const Workflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Upload documents',
      subtitle: 'Invoices, POs & contracts',
      desc: 'Financial documents are received in various formats—scanned invoices, digital PDFs, purchase orders, contracts, or bank statements.',
    },
    {
      num: '02',
      title: 'Automated processing',
      subtitle: 'Extract, match & check',
      desc: 'The software reads figures, matches invoices against purchase orders, evaluates calculations, and flags duplicates or discrepancies.',
    },
    {
      num: '03',
      title: 'Drafts & reports',
      subtitle: 'Schedules & working papers',
      desc: 'Structured lead schedules, analytical tables, and draft reports are prepared automatically, ready for professional examination.',
    },
    {
      num: '04',
      title: 'Human review & approval',
      subtitle: 'The professional decides',
      desc: 'The accountant or auditor reviews the prepared work, evaluates any flagged exceptions, and makes the final sign-off decision.',
    },
  ];

  return (
    <section id="workflow" className="py-20 md:py-28 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="How the technology works"
            description="Our process takes repetitive financial work from raw documents to organized, review-ready drafts—ensuring every step is verifiable and transparent."
          />
        </ScrollReveal>

        {/* Curtain-Style Image Reveal Visual */}
        <div className="mb-14 max-w-5xl mx-auto">
          <CurtainReveal initialScale={1.12} initialY={45}>
            <div className="relative rounded-2xl overflow-hidden bg-brand-offwhite border border-brand-border shadow-sm">
              <div className="px-5 py-3 bg-brand-offwhite border-b border-brand-border flex items-center justify-between text-xs">
                <span className="font-semibold text-brand-navy">
                  Endloops Financial Workflow Architecture
                </span>
                <span className="text-brand-navymuted">Workflow Overview</span>
              </div>
              <div className="relative w-full aspect-[16/9] min-h-[280px] sm:min-h-[400px] lg:min-h-[500px]">
                <Image
                  src="/images/workflow-illustration.png"
                  alt="Endloops Financial Workflow Architecture"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1100px"
                />
              </div>
            </div>
          </CurtainReveal>
        </div>

        {/* 4 Steps Narrative - Clean, open layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto divide-y md:divide-y-0 md:divide-x divide-brand-border">
          {steps.map((st, idx) => (
            <ScrollReveal key={st.num} delay={idx * 0.08}>
              <div className={`space-y-3 ${idx > 0 ? 'pt-6 md:pt-0 md:pl-6' : ''}`}>
                <div className="text-xs font-mono font-bold text-brand-teal">
                  Step {st.num}
                </div>

                <h3 className="text-lg font-bold text-brand-navy">
                  {st.title}
                </h3>

                <div className="text-xs font-semibold text-brand-navy/80">
                  {st.subtitle}
                </div>

                <p className="text-xs text-brand-navymuted leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
