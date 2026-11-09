'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const ValueProp: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-brand-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="The software prepares. You decide."
            description="We automate repetitive document review and voucher matching. Final sign-off always stays with people."
          />
        </ScrollReveal>

        {/* The Two-Column System */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-4xl mx-auto mt-8">
          {/* Card 1: Automated Processing */}
          <ScrollReveal direction="left" delay={0.06}>
            <div className="h-full rounded-xl p-5 sm:p-6 bg-brand-offwhite border border-brand-border space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-green">
                Automated Processing
              </div>
              <h3 className="text-lg font-bold text-brand-navy">
                What the software handles
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-brand-navy/90">
                <div>
                  <span className="font-semibold text-brand-navy block">Document extraction</span>
                  <span className="text-brand-navymuted text-xs">Pulls line items, dates, and amounts from invoices and statements.</span>
                </div>

                <div>
                  <span className="font-semibold text-brand-navy block">Automated matching</span>
                  <span className="text-brand-navymuted text-xs">Cross-checks documents against general ledgers and purchase orders.</span>
                </div>

                <div>
                  <span className="font-semibold text-brand-navy block">Discrepancy detection</span>
                  <span className="text-brand-navymuted text-xs">Flags duplicate billings, arithmetic errors, and budget breaches.</span>
                </div>

                <div>
                  <span className="font-semibold text-brand-navy block">Working-paper drafts</span>
                  <span className="text-brand-navymuted text-xs">Compiles structured lead schedules ready for review.</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Human Oversight */}
          <ScrollReveal direction="right" delay={0.12}>
            <div className="h-full rounded-xl p-5 sm:p-6 bg-brand-navy text-white space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-teal">
                Human Oversight
              </div>
              <h3 className="text-lg font-bold text-white">
                What stays with you
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <div>
                  <span className="font-semibold text-white block">Professional review</span>
                  <span className="text-slate-400 text-xs">Review prepared drafts with direct links to source PDFs.</span>
                </div>

                <div>
                  <span className="font-semibold text-white block">Exception resolution</span>
                  <span className="text-slate-400 text-xs">Evaluate flagged variances and decide on adjustments.</span>
                </div>

                <div>
                  <span className="font-semibold text-white block">Standards verification</span>
                  <span className="text-slate-400 text-xs">Confirm entries against statutory accounting principles.</span>
                </div>

                <div>
                  <span className="font-semibold text-white block">Final approval</span>
                  <span className="text-slate-400 text-xs">Sign-off authority remains strictly with qualified people.</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Minimal 3-point strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10 pt-6 border-t border-brand-border text-xs text-brand-navymuted">
          <div>
            <strong className="text-brand-navy block mb-0.5">Audit-Tested</strong>
            Built from real-world accounting and audit workflows.
          </div>
          <div>
            <strong className="text-brand-navy block mb-0.5">Full Traceability</strong>
            Every extracted figure links directly to its source document.
          </div>
          <div>
            <strong className="text-brand-navy block mb-0.5">Batch Processing</strong>
            Handles hundreds of files without manual review fatigue.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
