'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const ValueProp: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="The software prepares the work. The professional decides."
            description="Much of a finance professional's day goes into tasks that software can handle. This work is repetitive, time-consuming, and takes attention away from judgement and from clients. Endloops takes care of the repetitive work, while the final sign-off always stays with people."
          />
        </ScrollReveal>

        {/* The Two-Column System */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mt-12">
          {/* Card 1: Automated Processing */}
          <ScrollReveal direction="left" delay={0.08}>
            <div className="h-full rounded-2xl p-7 sm:p-9 bg-brand-offwhite border border-brand-border flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-green mb-2">
                  Automated Processing
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-3">
                  What the software handles
                </h3>
                <p className="text-sm text-brand-navymuted leading-relaxed mb-6">
                  Endloops eliminates the mechanical burden of document review by reading, comparing, and organizing financial data into draft schedules.
                </p>

                <div className="space-y-4 text-sm text-brand-navy">
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-0.5">Document extraction</h4>
                    <p className="text-xs text-brand-navymuted leading-relaxed">
                      Extracts figures, line items, dates, and vendor details from invoices, purchase orders, contracts, and statements.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-brand-navy mb-0.5">Invoice and purchase-order matching</h4>
                    <p className="text-xs text-brand-navymuted leading-relaxed">
                      Checks documents against ledgers and cross-matches supplier invoices against approved purchase orders line by line.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-brand-navy mb-0.5">Duplicate and discrepancy detection</h4>
                    <p className="text-xs text-brand-navymuted leading-relaxed">
                      Flags missing documentation, arithmetic discrepancies, duplicate billings, and items exceeding agreed limits.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-brand-navy mb-0.5">Working-paper preparation</h4>
                    <p className="text-xs text-brand-navymuted leading-relaxed">
                      Produces organized lead schedules, sampling worksheets, and draft reports ready for professional inspection.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-brand-border text-xs text-brand-navymuted">
                Automated preparation · Zero unverified autonomous changes
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Human Oversight */}
          <ScrollReveal direction="right" delay={0.16}>
            <div className="h-full rounded-2xl p-7 sm:p-9 bg-brand-navy text-white flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-teal mb-2">
                  Human Oversight
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  What stays with the professional
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Accountants and auditors rely on trust and professional judgement. Endloops leaves every critical evaluation and authorization in human hands.
                </p>

                <div className="space-y-4 text-sm text-slate-200">
                  <div>
                    <h4 className="font-semibold text-white mb-0.5">Professional review</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Qualified accountants and auditors examine prepared working papers, with clear links back to the original documents.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-0.5">Exception resolution</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      When discrepancies or price variances arise, the professional evaluates the context and determines the proper treatment.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-0.5">Verification</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      All calculations, tax treatments, and accounting entries are verified against appropriate statutory and professional standards.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-0.5">Human-controlled final approval</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      The software never issues reports or files submissions autonomously. The final sign-off always stays with people.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 text-xs text-slate-400">
                Final approval remains strictly with qualified professionals
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Clean, unboxed 3-column principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 pt-12 border-t border-brand-border">
          <div>
            <h4 className="text-base font-bold text-brand-navy mb-1.5">Born inside Alkazim</h4>
            <p className="text-xs text-brand-navymuted leading-relaxed">
              Originated from the technology department of a Dubai accounting and audit firm, built to solve everyday financial workflow needs.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-brand-navy mb-1.5">Clear document traceability</h4>
            <p className="text-xs text-brand-navymuted leading-relaxed">
              Every extracted number and matched figure can be verified directly against the underlying source invoice or contract.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-brand-navy mb-1.5">Built for bulk document volume</h4>
            <p className="text-xs text-brand-navymuted leading-relaxed">
              Designed to process hundreds of invoices, purchase orders, and statements without human fatigue or transcription error.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
