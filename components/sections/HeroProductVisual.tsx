'use client';

import React from 'react';
import { FileCheck, AlertCircle, ArrowRight } from 'lucide-react';

export const HeroProductVisual: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl border border-brand-border shadow-sm overflow-hidden text-left font-sans">
      {/* Clean Header Bar */}
      <div className="px-5 sm:px-7 py-3.5 border-b border-brand-border bg-brand-offwhite/50 flex flex-wrap items-center justify-between gap-3 text-body-sm">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-brand-green" />
          <span className="font-semibold text-brand-navy">Automated Invoice Matching</span>
          <span className="text-brand-border">/</span>
          <span className="text-brand-navymuted">PO-2025-0419</span>
        </div>
        <div className="flex items-center gap-1.5 text-label font-medium text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>1 Variance for Review</span>
        </div>
      </div>

      {/* Main Content Area: Simplified and Airy */}
      <div className="p-5 sm:p-7 space-y-6">
        {/* Document Metadata Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-brand-border text-body-sm">
          <div>
            <div className="font-semibold text-brand-navy">Al Noor Office Supplies LLC</div>
            <div className="text-brand-navymuted text-label mt-0.5">Invoice #INV-2025-084 · 12 Mar 2025</div>
          </div>
          <div className="text-right">
            <div className="text-label text-brand-navymuted">Total Amount</div>
            <div className="font-semibold text-brand-navy font-mono text-body">AED 15,487.50</div>
          </div>
        </div>

        {/* Clean Line Items List */}
        <div className="space-y-3">
          {/* Item 1: Storage Binders (Matched) */}
          <div className="p-4 rounded-xl bg-brand-offwhite/40 border border-brand-border flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold text-brand-navy text-body-sm">Storage Binders (40 units)</div>
                <div className="text-label text-brand-navymuted mt-0.5">Matched with PO · AED 110.00 / unit</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono font-medium text-brand-navy text-body-sm">AED 4,400.00</div>
              <span className="text-label text-brand-green font-medium">Matched</span>
            </div>
          </div>

          {/* Item 2: Laser Toner (Matched) */}
          <div className="p-4 rounded-xl bg-brand-offwhite/40 border border-brand-border flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold text-brand-navy text-body-sm">Laser Toner (8 units)</div>
                <div className="text-label text-brand-navymuted mt-0.5">Matched with PO · AED 1,200.00 / unit</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono font-medium text-brand-navy text-body-sm">AED 9,600.00</div>
              <span className="text-label text-brand-green font-medium">Matched</span>
            </div>
          </div>

          {/* Item 3: Freight & Handling (Variance) */}
          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                <AlertCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold text-brand-navy text-body-sm flex items-center gap-2">
                  <span>Freight &amp; Handling</span>
                  <span className="text-label font-mono font-semibold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">
                    +AED 250.00 variance
                  </span>
                </div>
                <div className="text-label text-brand-navymuted mt-1">
                  Billed AED 750.00 · PO ceiling was AED 500.00. Flagged for human review.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:self-center self-end pt-2 sm:pt-0">
              <button
                type="button"
                className="px-3.5 py-1.5 rounded-lg bg-white border border-brand-border text-label font-medium text-brand-navy hover:bg-brand-offwhite transition-colors"
              >
                Accept with Note
              </button>
              <button
                type="button"
                className="px-3.5 py-1.5 rounded-lg bg-brand-navy text-white text-label font-medium hover:bg-brand-navylight transition-colors flex items-center gap-1.5"
              >
                <span>Review Discrepancy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProductVisual;
