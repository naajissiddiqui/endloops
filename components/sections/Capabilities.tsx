'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  GitCompare, 
  ShieldAlert, 
  FileSpreadsheet, 
  Layers
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const Capabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      id: 'read',
      icon: <FileText className="w-4 h-4" />,
      title: 'Read Documents',
      summary: 'Extract figures and details from invoices, purchase orders, contracts, and statements.',
      details: [
        'Extracts header information including vendor names, invoice numbers, dates, and tax IDs.',
        'Captures line-item descriptions, quantities, unit prices, and applicable tax calculations.',
        'Parses multi-page commercial contracts, payment schedules, and bank statements.',
        'Handles both scanned documents and digitally generated PDF formats.',
      ],
      preview: {
        title: 'Document Extraction',
        sampleRef: 'Invoice #INV-2025-084 · Al Noor Office Supplies',
        fields: [
          { label: 'Vendor', value: 'Al Noor Office Supplies LLC' },
          { label: 'Invoice No', value: 'INV-2025-084' },
          { label: 'Invoice Date', value: '12 Mar 2025' },
          { label: 'Subtotal', value: 'AED 14,750.00' },
          { label: 'VAT (5%)', value: 'AED 737.50' },
          { label: 'Total Amount', value: 'AED 15,487.50' },
        ],
        note: 'Illustrative extraction view',
      },
    },
    {
      id: 'match',
      icon: <GitCompare className="w-4 h-4" />,
      title: 'Compare & Match',
      summary: 'Check documents against ledgers, or compare quotes and proposals against each other.',
      details: [
        'Cross-checks supplier invoices against approved purchase orders line by line.',
        'Reconciles transaction batches against general ledger and bank statement records.',
        'Compares multiple supplier tender quotes to identify pricing differences.',
        'Highlights discrepancies in quantities, unit rates, and totals immediately.',
      ],
      preview: {
        title: '3-Way Matching',
        sampleRef: 'Comparison: PO-2025-0419 vs INV-2025-084',
        fields: [
          { label: 'Item 1: Storage Binders', value: 'Matched (40 units @ AED 110.00)' },
          { label: 'Item 2: Laser Toner', value: 'Matched (8 units @ AED 1,200.00)' },
          { label: 'Item 3: Freight Charge', value: 'Discrepancy (PO AED 500 / Inv AED 750)' },
          { label: 'Ledger Alignment', value: 'Ready for reviewer confirmation' },
        ],
        note: 'Illustrative matching view',
      },
    },
    {
      id: 'rules',
      icon: <ShieldAlert className="w-4 h-4" />,
      title: 'Check Against Rules',
      summary: 'Flag missing items, mismatched totals, duplicates, and anything outside agreed limits.',
      details: [
        'Identifies duplicate invoice submissions across different periods or vendors.',
        'Flags transactions missing required supporting documents or approvals.',
        'Checks line items against agreed expenditure ceilings and authorization limits.',
        'Validates standard tax computations before working papers are prepared.',
      ],
      preview: {
        title: 'Rule Evaluation',
        sampleRef: 'Batch Check: Commercial Payables Review',
        fields: [
          { label: 'Duplicate Check', value: 'No duplicates identified' },
          { label: 'Mandatory Fields', value: 'All required voucher fields present' },
          { label: 'Ceiling Limits', value: '1 variance flagged for review' },
          { label: 'Tax Calculation', value: '5% VAT calculation verified' },
        ],
        note: 'Illustrative rule check view',
      },
    },
    {
      id: 'drafts',
      icon: <FileSpreadsheet className="w-4 h-4" />,
      title: 'Prepare Drafts',
      summary: 'Produce schedules, working papers, and reports ready for review.',
      details: [
        'Compiles structured lead schedules and transaction audit sheets automatically.',
        'Pre-populates trial balance roll-forwards and analytical comparison tables.',
        'Maintains clear references linking each schedule figure back to its source file.',
        'Prepares standardized review packs ready for accountant or auditor sign-off.',
      ],
      preview: {
        title: 'Draft Working Paper',
        sampleRef: 'Working Paper: Accounts Payable Lead Schedule',
        fields: [
          { label: 'Schedule Reference', value: 'WP-AP-2025-Q1' },
          { label: 'Prepared By', value: 'Endloops Automated Preparation' },
          { label: 'Review Status', value: 'Awaiting professional review' },
          { label: 'Referenced Documents', value: 'Source invoices and POs attached' },
        ],
        note: 'Illustrative draft view',
      },
    },
    {
      id: 'bulk',
      icon: <Layers className="w-4 h-4" />,
      title: 'Handle Bulk Work',
      summary: 'Process batches of hundreds of documents at once without queue bottlenecks.',
      details: [
        'Accepts high-volume uploads of mixed financial documents simultaneously.',
        'Extracts, matches, and checks documents continuously in batch mode.',
        'Isolates exceptions into a focused review queue while verified items proceed.',
        'Reduces hours of manual voucher entry into an orderly review process.',
      ],
      preview: {
        title: 'Batch Document Processing',
        sampleRef: 'Batch Processing Queue (Illustrative Demo Data)',
        fields: [
          { label: 'Documents in Batch', value: '120 documents' },
          { label: 'Direct Matches', value: '114 verified' },
          { label: 'Flagged for Review', value: '6 items isolated' },
          { label: 'Output Package', value: 'Consolidated review draft prepared' },
        ],
        note: 'Illustrative sample data for demonstration',
      },
    },
  ];

  const current = capabilities[activeTab];

  return (
    <section id="capabilities" className="py-20 md:py-28 bg-brand-offwhite border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Built for the complexity of financial work"
            description="Endloops focuses on five core capabilities that automate the repetitive tasks of financial document review while keeping every step clear and verifiable."
          />
        </ScrollReveal>

        {/* Clean, unpill-shaped tab selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {capabilities.map((cap, idx) => (
            <button
              key={cap.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === idx
                  ? 'bg-brand-navy text-white'
                  : 'bg-white text-brand-navy/70 border border-brand-border hover:text-brand-navy hover:bg-brand-offwhite'
              }`}
            >
              <span className={activeTab === idx ? 'text-brand-teal' : 'text-brand-green'}>
                {cap.icon}
              </span>
              <span>{cap.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white rounded-2xl p-6 sm:p-10 border border-brand-border"
        >
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              {current.title}
            </h3>

            <p className="text-base text-brand-navymuted leading-relaxed">
              {current.summary}
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-navy">
                Key capabilities:
              </div>
              {current.details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2.5 text-sm text-brand-navy/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 shrink-0" />
                  <span className="leading-relaxed">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Preview Card */}
          <div className="lg:col-span-6 bg-brand-offwhite p-5 sm:p-6 rounded-xl border border-brand-border space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-brand-border">
              <div className="font-semibold text-sm text-brand-navy">
                {current.preview.title}
              </div>
              <span className="text-[11px] text-brand-navymuted font-mono">
                {current.preview.note}
              </span>
            </div>

            <div className="text-xs text-brand-navymuted">
              Reference: <span className="font-medium text-brand-navy">{current.preview.sampleRef}</span>
            </div>

            <div className="bg-white rounded-lg border border-brand-border divide-y divide-brand-border text-xs">
              {current.preview.fields.map((field, fIdx) => (
                <div key={fIdx} className="px-3.5 py-2.5 flex items-center justify-between">
                  <span className="text-brand-navymuted font-medium">{field.label}</span>
                  <span className="text-brand-navy font-semibold text-right">{field.value}</span>
                </div>
              ))}
            </div>

            <div className="text-[11px] text-brand-navymuted pt-1">
              Data shown is illustrative. Final figures are reviewed and confirmed by the practitioner.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;
