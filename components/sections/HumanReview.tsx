'use client';

import React from 'react';
import { AlertTriangle, Check, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const HumanReview: React.FC = () => {
  return (
    <section id="human-review" className="py-20 md:py-28 bg-brand-offwhite border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Human review and final approval"
            description="Our approach is simple: the software prepares the work, and the professional reviews and decides. We take care of the repetitive tasks, and the final sign-off always stays with people."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto mt-12">
          {/* Left Column: Direct explanation of the review principle */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-brand-navy">
              Why the human sign-off stays with people
            </h3>

            <p className="text-sm text-brand-navymuted leading-relaxed">
              Financial work requires trust, statutory responsibility, and contextual judgement. Software can read documents, cross-check figures, and flag discrepancies rapidly—but it cannot replace the legal responsibility or professional discretion of a qualified accountant or auditor.
            </p>

            <div className="space-y-4 pt-2">
              <div>
                <h4 className="text-sm font-semibold text-brand-navy mb-1">
                  1. Exception-focused review
                </h4>
                <p className="text-xs text-brand-navymuted leading-relaxed">
                  Documents with exact matches flow directly into draft working schedules. Items with discrepancies, missing details, or price variances are highlighted separately for review.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-brand-navy mb-1">
                  2. Direct document verification
                </h4>
                <p className="text-xs text-brand-navymuted leading-relaxed">
                  Every figure in a prepared draft can be checked directly against the original invoice, purchase order, or bank statement.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-brand-navy mb-1">
                  3. Complete professional discretion
                </h4>
                <p className="text-xs text-brand-navymuted leading-relaxed">
                  The reviewer evaluates whether a flagged variance is acceptable, requests clarification, or adjusts the schedule before signing off.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic review interface card */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-7 border border-brand-border shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-brand-border">
              <span className="text-xs font-semibold text-brand-navy">
                Auditor Review Interface
              </span>
              <span className="text-xs text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200/80 font-medium">
                1 Exception Flagged
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="text-brand-navymuted">
                Audit Engagement: <strong className="text-brand-navy">Al Noor Holdings LLC · Payables Review</strong>
              </div>

              {/* Realistic Discrepancy Box */}
              <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/60 space-y-2">
                <div className="flex items-center justify-between font-semibold text-amber-900">
                  <span className="flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    Invoice #INV-2025-084 Variance
                  </span>
                  <span className="font-mono">+AED 250.00</span>
                </div>
                <p className="text-[11px] text-amber-800 leading-relaxed">
                  Freight billed at AED 750.00 exceeds the PO-2025-0419 ceiling of AED 500.00. Software flagged for reviewer decision.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    className="py-1 px-2.5 rounded bg-white text-brand-navy border border-amber-300 font-semibold text-[11px]"
                  >
                    View Original PDF
                  </button>
                  <button
                    type="button"
                    className="py-1 px-2.5 rounded bg-brand-navy text-white font-semibold text-[11px]"
                  >
                    Accept with Note
                  </button>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 text-[11px] text-brand-navymuted">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-brand-green" />
                  <span>General ledger records cross-checked against invoice subtotal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-brand-green" />
                  <span>5% VAT calculation verified mathematically</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-brand-green" />
                  <span>Draft lead schedule WP-AP-01 ready for final sign-off</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-brand-border flex items-center justify-between text-xs text-brand-navymuted">
              <span>Reviewer: Qualified Auditor in Charge</span>
              <span className="font-medium text-brand-navy">Final sign-off stays with people</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanReview;
