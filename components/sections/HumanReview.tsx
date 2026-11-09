'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const HumanReview: React.FC = () => {
  return (
    <section id="human-review" className="py-16 md:py-20 bg-brand-offwhite border-b border-brand-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Human Review"
            description="The software prepares the work. The professional reviews and decides."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-6">
          {/* Left Column: Direct explanation */}
          <div className="md:col-span-6 space-y-3.5 text-xs sm:text-sm text-brand-navymuted leading-relaxed">
            <h3 className="text-lg font-bold text-brand-navy">
              Why sign-off stays with people
            </h3>

            <p>
              Financial auditing and compliance carry legal responsibility. Endloops handles the repetitive data extraction, matching, and schedule drafting, while final verification and authorization strictly remain with qualified practitioners.
            </p>

            <div className="space-y-2.5 pt-1 text-xs">
              <div>
                <strong className="text-brand-navy block">Exception-focused review</strong>
                <span className="text-brand-navymuted">Matching items flow into draft schedules; variances are highlighted for review.</span>
              </div>

              <div>
                <strong className="text-brand-navy block">Direct document links</strong>
                <span className="text-brand-navymuted">Every figure in a draft connects directly to its source PDF.</span>
              </div>

              <div>
                <strong className="text-brand-navy block">Professional discretion</strong>
                <span className="text-brand-navymuted">The reviewer decides whether to accept, adjust, or query flagged items.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic review interface card - Clean, NO colored pills */}
          <div className="md:col-span-6 bg-white rounded-xl p-5 sm:p-6 border border-brand-border space-y-4 text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-brand-border">
              <span className="font-semibold text-brand-navy">Auditor Review</span>
              <span className="text-brand-navymuted font-mono text-[11px]">1 exception flagged</span>
            </div>

            <div className="space-y-2.5">
              <div className="text-brand-navymuted">
                Engagement: <strong className="text-brand-navy">Al Noor Holdings LLC · Payables</strong>
              </div>

              {/* Discrepancy item - Clean, neutral */}
              <div className="p-3 rounded-lg border border-brand-border bg-brand-offwhite/40 space-y-1.5">
                <div className="flex items-center justify-between font-semibold text-brand-navy">
                  <span>Invoice #INV-2025-084 Variance</span>
                  <span className="font-mono text-[11px]">+AED 250.00</span>
                </div>
                <p className="text-[11px] text-brand-navymuted leading-relaxed">
                  Freight billed at AED 750.00 exceeds the PO ceiling of AED 500.00. Requires reviewer confirmation.
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    type="button"
                    className="py-1 px-2.5 rounded bg-white text-brand-navy border border-brand-border font-medium text-[11px] hover:bg-brand-offwhite transition-colors"
                  >
                    View Original PDF
                  </button>
                  <button
                    type="button"
                    className="py-1 px-2.5 rounded bg-brand-navy text-white font-medium text-[11px] hover:bg-brand-navylight transition-colors"
                  >
                    Accept with Note
                  </button>
                </div>
              </div>

              <div className="space-y-1 pt-1 text-[11px] text-brand-navymuted">
                <div>• General ledger entries cross-checked against invoice subtotal</div>
                <div>• 5% VAT calculation mathematically verified</div>
                <div>• Draft lead schedule ready for auditor sign-off</div>
              </div>
            </div>

            <div className="pt-2 border-t border-brand-border flex items-center justify-between text-[11px] text-brand-navymuted">
              <span>Auditor in Charge</span>
              <span className="font-medium text-brand-navy">Final sign-off stays with you</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanReview;
