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
      desc: 'Ingest invoices, purchase orders, contracts, and statements.',
    },
    {
      num: '02',
      title: 'Automated processing',
      desc: 'Extract line items, match against ledgers, and check rules.',
    },
    {
      num: '03',
      title: 'Draft working papers',
      desc: 'Generate lead schedules and analytical variance tables.',
    },
    {
      num: '04',
      title: 'Human sign-off',
      desc: 'The professional reviews exceptions and approves the file.',
    },
  ];

  return (
    <section id="workflow" className="py-16 md:py-24 bg-white border-b border-brand-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="How It Works"
            description="From raw documents to finalized working papers in four clear steps."
          />
        </ScrollReveal>

        {/* Curtain-Style Image Reveal Visual */}
        <div className="mb-10">
          <CurtainReveal initialScale={1.08} initialY={35}>
            <div className="relative rounded-xl overflow-hidden bg-brand-offwhite border border-brand-border shadow-xs">
              <div className="px-4 py-2 bg-brand-offwhite border-b border-brand-border flex items-center justify-between text-xs text-brand-navymuted">
                <span className="font-semibold text-brand-navy">Workflow Overview</span>
                <span>Process Architecture</span>
              </div>
              <div className="relative w-full aspect-[16/9] min-h-[220px] sm:min-h-[320px] lg:min-h-[420px]">
                <Image
                  src="/images/workflow-illustration.png"
                  alt="Endloops Workflow Architecture"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1000px"
                />
              </div>
            </div>
          </CurtainReveal>
        </div>

        {/* 4 Steps - Clean scannable layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {steps.map((st, idx) => (
            <ScrollReveal key={st.num} delay={idx * 0.05}>
              <div className="space-y-1.5 text-left">
                <div className="text-xs font-mono font-bold text-brand-teal">
                  Step {st.num}
                </div>
                <h3 className="text-base font-bold text-brand-navy">
                  {st.title}
                </h3>
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
