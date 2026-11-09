'use client';

import React from 'react';
import { FileText } from 'lucide-react';

export const HeroProductVisual: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-xl border border-brand-border shadow-xs overflow-hidden text-left font-sans">
      {/* Top Application Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 sm:px-5 py-2.5 border-b border-brand-border bg-brand-offwhite/40 text-xs text-brand-navymuted gap-2">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-brand-navy">Product Preview</span>
          <span className="text-brand-border">/</span>
          <span>Document Extraction &amp; Matching</span>
        </div>
        <div>
          <span className="text-xs font-medium text-brand-navymuted">Review Pending</span>
        </div>
      </div>

      {/* Main Two-Column Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-brand-border">
        {/* Left Column: Invoice Preview */}
        <div className="lg:col-span-6 p-4 sm:p-5 bg-brand-offwhite/20 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <div className="font-semibold text-brand-navy flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-brand-teal" />
              <span>Invoice #INV-2025-084</span>
            </div>
            <span className="text-brand-navymuted">12 Mar 2025</span>
          </div>

          <div className="bg-white p-3 rounded-lg border border-brand-border text-xs space-y-0.5">
            <div className="font-medium text-brand-navy">Al Noor Office Supplies LLC</div>
            <div className="text-[11px] text-brand-navymuted font-mono">TRN: 100-2938-4720-0003</div>
          </div>

          {/* Line Items */}
          <div className="bg-white rounded-lg border border-brand-border overflow-hidden text-xs">
            <div className="px-3 py-1.5 bg-brand-offwhite/50 border-b border-brand-border text-[11px] font-medium text-brand-navymuted grid grid-cols-12 gap-2">
              <span className="col-span-6">Item</span>
              <span className="col-span-2 text-center">Qty</span>
              <span className="col-span-4 text-right">AED</span>
            </div>
            <div className="divide-y divide-brand-border/60">
              <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center">
                <span className="col-span-6 text-brand-navy truncate">Storage Binders</span>
                <span className="col-span-2 text-center text-brand-navymuted">40</span>
                <span className="col-span-4 text-right font-mono text-brand-navy">4,400.00</span>
              </div>
              <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center">
                <span className="col-span-6 text-brand-navy truncate">Laser Toner</span>
                <span className="col-span-2 text-center text-brand-navymuted">8</span>
                <span className="col-span-4 text-right font-mono text-brand-navy">9,600.00</span>
              </div>
              <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center">
                <span className="col-span-6 text-brand-navy truncate">Freight &amp; Handling</span>
                <span className="col-span-2 text-center text-brand-navymuted">1</span>
                <span className="col-span-4 text-right font-mono font-medium text-brand-navy">750.00</span>
              </div>
            </div>
          </div>

          <div className="p-2.5 bg-white rounded-lg border border-brand-border flex items-center justify-between text-xs">
            <span className="text-brand-navymuted">Total including 5% VAT:</span>
            <span className="font-bold text-brand-navy font-mono">AED 15,487.50</span>
          </div>
        </div>

        {/* Right Column: PO Comparison */}
        <div className="lg:col-span-6 p-4 sm:p-5 bg-white space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-brand-navy">Matched with PO-2025-0419</span>
              <span className="text-brand-navymuted">2 matched · 1 variance</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg border border-brand-border flex items-center justify-between">
                <div>
                  <div className="font-medium text-brand-navy">Storage Binders</div>
                  <div className="text-[11px] text-brand-navymuted">PO: 40 × AED 110.00</div>
                </div>
                <span className="font-mono text-[11px] text-brand-navymuted">Matched</span>
              </div>

              <div className="p-2.5 rounded-lg border border-brand-border flex items-center justify-between">
                <div>
                  <div className="font-medium text-brand-navy">Laser Toner</div>
                  <div className="text-[11px] text-brand-navymuted">PO: 8 × AED 1,200.00</div>
                </div>
                <span className="font-mono text-[11px] text-brand-navymuted">Matched</span>
              </div>

              {/* Highlighted Discrepancy - Clean, NO yellow/green pills */}
              <div className="p-2.5 rounded-lg border border-brand-border bg-brand-offwhite/50 space-y-1">
                <div className="flex items-center justify-between font-medium text-brand-navy">
                  <span>Freight &amp; Handling</span>
                  <span className="font-mono text-[11px] font-semibold text-brand-navy">+AED 250.00 variance</span>
                </div>
                <p className="text-[11px] text-brand-navymuted">
                  PO limit AED 500.00 · Billed AED 750.00. Flagged for review.
                </p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 border-t border-brand-border flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <button
              type="button"
              className="py-1.5 px-3 text-xs font-medium rounded-lg bg-brand-navy text-white hover:bg-brand-navylight transition-colors text-center"
            >
              Review Discrepancy
            </button>
            <button
              type="button"
              className="py-1.5 px-3 text-xs font-medium rounded-lg border border-brand-border text-brand-navy hover:bg-brand-offwhite transition-colors text-center"
            >
              Accept with Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProductVisual;
