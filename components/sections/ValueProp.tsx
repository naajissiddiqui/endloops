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
            <div className="h-full rounded-xl p-6 sm:p-7 bg-brand-offwhite border border-brand-border space-y-3.5">
              <div className="text-label font-medium text-brand-green">
                Automated Processing
              </div>
              <h3 className="text-h3 text-brand-navy">
                What the software handles
              </h3>

              <div className="space-y-3 pt-1">
                <div>
                  <span className="text-body font-semibold text-brand-navy block">Document extraction</span>
                  <p className="text-body-sm text-brand-navymuted mt-0.5">Pulls line items, dates, and amounts from invoices and statements.</p>
                </div>

                <div>
                  <span className="text-body font-semibold text-brand-navy block">Automated matching</span>
                  <p className="text-body-sm text-brand-navymuted mt-0.5">Cross-checks documents against general ledgers and purchase orders.</p>
                </div>

                <div>
                  <span className="text-body font-semibold text-brand-navy block">Discrepancy detection</span>
                  <p className="text-body-sm text-brand-navymuted mt-0.5">Flags duplicate billings, arithmetic errors, and budget breaches.</p>
                </div>

                <div>
                  <span className="text-body font-semibold text-brand-navy block">Working-paper drafts</span>
                  <p className="text-body-sm text-brand-navymuted mt-0.5">Compiles structured lead schedules ready for review.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Human Oversight */}
          <ScrollReveal direction="right" delay={0.12}>
            <div className="h-full rounded-xl p-6 sm:p-7 bg-brand-navy text-white space-y-3.5">
              <div className="text-label font-medium text-brand-teal">
                Human Oversight
              </div>
              <h3 className="text-h3 text-white">
                What stays with you
              </h3>

              <div className="space-y-3 pt-1">
                <div>
                  <span className="text-body font-semibold text-white block">Professional review</span>
                  <p className="text-body-sm text-slate-300 mt-0.5">Review prepared drafts with direct links to source PDFs.</p>
                </div>

                <div>
                  <span className="text-body font-semibold text-white block">Exception resolution</span>
                  <p className="text-body-sm text-slate-300 mt-0.5">Evaluate flagged variances and decide on adjustments.</p>
                </div>

                <div>
                  <span className="text-body font-semibold text-white block">Standards verification</span>
                  <p className="text-body-sm text-slate-300 mt-0.5">Confirm entries against statutory accounting principles.</p>
                </div>

                <div>
                  <span className="text-body font-semibold text-white block">Final approval</span>
                  <p className="text-body-sm text-slate-300 mt-0.5">Sign-off authority remains strictly with qualified people.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Minimal 3-point strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10 pt-6 border-t border-brand-border text-body-sm text-brand-navymuted">
          <div>
            <strong className="text-brand-navy font-semibold block mb-0.5">Audit-Tested</strong>
            Built from real-world accounting and audit workflows.
          </div>
          <div>
            <strong className="text-brand-navy font-semibold block mb-0.5">Full Traceability</strong>
            Every extracted figure links directly to its source document.
          </div>
          <div>
            <strong className="text-brand-navy font-semibold block mb-0.5">Batch Processing</strong>
            Handles hundreds of files without manual review fatigue.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
