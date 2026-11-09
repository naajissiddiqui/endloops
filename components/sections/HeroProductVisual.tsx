'use client';

import React from 'react';
import { FileText, AlertTriangle, Check, ArrowRight } from 'lucide-react';

export const HeroProductVisual: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-2xl border border-brand-border shadow-sm overflow-hidden text-left font-sans">
      {/* Top Application Bar */}
      <div className="flex flex-wrap items-center justify-between px-5 py-3 border-b border-brand-border bg-brand-offwhite/60 gap-2">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold text-brand-navy">
            Product Preview
          </span>
          <span className="text-brand-border">|</span>
          <span className="text-xs text-brand-navymuted">
            Document Extraction &amp; Purchase-Order Comparison
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-800 bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Review Pending
          </span>
        </div>
      </div>

      {/* Main Two-Column Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-brand-border">
        {/* Left Column: Invoice Document Preview */}
        <div className="lg:col-span-6 p-5 sm:p-6 bg-brand-offwhite/30 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-brand-navymuted">
                Source Document Preview
              </div>
              <div className="text-base font-bold text-brand-navy mt-0.5 flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-teal" />
                <span>Invoice #INV-2025-084</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-brand-navymuted block">Invoice Date</span>
              <span className="text-xs font-semibold text-brand-navy">12 Mar 2025</span>
            </div>
          </div>

          {/* Extracted Vendor Card */}
          <div className="bg-white p-3.5 rounded-xl border border-brand-border space-y-1 text-xs">
            <div className="text-brand-navymuted text-[11px]">Extracted Vendor Information:</div>
            <div className="font-semibold text-brand-navy text-sm">Al Noor Office Supplies LLC</div>
            <div className="text-brand-navymuted font-mono text-[11px]">TRN: 100-2938-4720-0003 · Dubai, UAE</div>
          </div>

          {/* Line Items Table */}
          <div className="bg-white rounded-xl border border-brand-border overflow-hidden">
            <div className="px-3.5 py-2 bg-brand-offwhite/50 border-b border-brand-border text-[11px] font-semibold text-brand-navymuted grid grid-cols-12 gap-2">
              <span className="col-span-6">Description</span>
              <span className="col-span-2 text-center">Qty</span>
              <span className="col-span-4 text-right">Amount (AED)</span>
            </div>
            <div className="divide-y divide-brand-border/60 text-xs">
              <div className="px-3.5 py-2.5 grid grid-cols-12 gap-2 items-center">
                <span className="col-span-6 font-medium text-brand-navy truncate">Archival Storage Binders</span>
                <span className="col-span-2 text-center text-brand-navymuted">40</span>
                <span className="col-span-4 text-right font-mono text-brand-navy font-semibold">4,400.00</span>
              </div>
              <div className="px-3.5 py-2.5 grid grid-cols-12 gap-2 items-center">
                <span className="col-span-6 font-medium text-brand-navy truncate">High-Yield Laser Toner</span>
                <span className="col-span-2 text-center text-brand-navymuted">8</span>
                <span className="col-span-4 text-right font-mono text-brand-navy font-semibold">9,600.00</span>
              </div>
              <div className="px-3.5 py-2.5 grid grid-cols-12 gap-2 items-center bg-amber-50/40">
                <div className="col-span-6 font-medium text-brand-navy truncate flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <span>Freight &amp; Handling</span>
                </div>
                <span className="col-span-2 text-center text-brand-navymuted">1</span>
                <span className="col-span-4 text-right font-mono text-amber-800 font-semibold">750.00</span>
              </div>
            </div>
          </div>

          {/* Invoice Financial Summary */}
          <div className="p-3 bg-white rounded-xl border border-brand-border flex items-center justify-between text-xs">
            <div className="text-brand-navymuted">
              Subtotal: <span className="font-mono text-brand-navy">AED 14,750.00</span> · VAT (5%): <span className="font-mono text-brand-navy">AED 737.50</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-brand-navymuted block">Invoice Total</span>
              <span className="text-sm font-bold text-brand-navy font-mono">AED 15,487.50</span>
            </div>
          </div>
        </div>

        {/* Right Column: Purchase-Order Comparison & Discrepancy Highlight */}
        <div className="lg:col-span-6 p-5 sm:p-6 bg-white space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-brand-navymuted">
                  Automated Comparison
                </div>
                <div className="text-base font-bold text-brand-navy mt-0.5">
                  Matched Against PO-2025-0419
                </div>
              </div>
              <span className="text-xs text-brand-navymuted font-medium">
                2 Matched · 1 Discrepancy
              </span>
            </div>

            {/* Line-by-line comparison */}
            <div className="space-y-2">
              <div className="p-3 rounded-xl border border-brand-border bg-brand-offwhite/40 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-brand-navy">Archival Storage Binders</div>
                  <div className="text-[11px] text-brand-navymuted">PO: 40 × AED 110.00 | Inv: 40 × AED 110.00</div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                  <Check className="w-3 h-3 stroke-[3]" /> Matched
                </span>
              </div>

              <div className="p-3 rounded-xl border border-brand-border bg-brand-offwhite/40 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-brand-navy">High-Yield Laser Toner</div>
                  <div className="text-[11px] text-brand-navymuted">PO: 8 × AED 1,200.00 | Inv: 8 × AED 1,200.00</div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                  <Check className="w-3 h-3 stroke-[3]" /> Matched
                </span>
              </div>

              {/* Highlighted Discrepancy */}
              <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/70 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-amber-900 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Highlighted Discrepancy: Freight &amp; Handling</span>
                  </div>
                  <span className="font-mono font-bold text-amber-800 bg-white/80 px-2 py-0.5 rounded border border-amber-200">
                    +AED 250.00 Variance
                  </span>
                </div>
                <p className="text-[11px] text-amber-800 leading-relaxed">
                  Purchase order authorized up to AED 500.00 for delivery. Invoice billed AED 750.00. Automated processing flags variance for professional review.
                </p>
              </div>
            </div>
          </div>

          {/* Review-Pending Status & Controls */}
          <div className="pt-3 border-t border-brand-border space-y-3">
            <div className="flex items-center justify-between text-xs text-brand-navymuted">
              <span>Status: <strong className="text-brand-navy">Awaiting Reviewer Decision</strong></span>
              <span className="text-[11px]">Final sign-off remains with people</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex-1 py-2 px-3 text-xs font-semibold rounded-lg bg-brand-navy text-white hover:bg-brand-navylight transition-colors text-center"
              >
                Review Discrepancy
              </button>
              <button
                type="button"
                className="py-2 px-3 text-xs font-semibold rounded-lg border border-brand-border text-brand-navy hover:bg-brand-offwhite transition-colors"
              >
                Accept with Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProductVisual;
