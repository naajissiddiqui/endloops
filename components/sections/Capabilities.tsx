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
import SpotlightCard from '@/src/components/reactbits/SpotlightCard';

export const Capabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      id: 'read',
      icon: <FileText className="w-4 h-4" />,
      title: 'Read Documents',
      summary: 'Extract figures, line items, and dates from invoices, POs, and statements.',
      details: [
        'Captures vendor details, invoice numbers, dates, tax IDs, and line items.',
        'Handles both scanned documents and digital PDF files accurately.',
      ],
      preview: {
        title: 'Document Extraction',
        ref: 'Invoice #INV-2025-084',
        fields: [
          { label: 'Vendor', value: 'Al Noor Office Supplies LLC' },
          { label: 'Invoice Date', value: '12 Mar 2025' },
          { label: 'Subtotal', value: 'AED 14,750.00' },
          { label: 'VAT (5%)', value: 'AED 737.50' },
          { label: 'Total', value: 'AED 15,487.50' },
        ],
      },
    },
    {
      id: 'match',
      icon: <GitCompare className="w-4 h-4" />,
      title: 'Compare & Match',
      summary: 'Cross-check documents against ledgers and compare quotes side by side.',
      details: [
        'Matches supplier invoices against purchase orders line by line.',
        'Reconciles transaction batches with general ledger records.',
      ],
      preview: {
        title: '3-Way Matching',
        ref: 'PO-2025-0419 vs INV-2025-084',
        fields: [
          { label: 'Storage Binders', value: 'Matched (40 @ AED 110.00)' },
          { label: 'Laser Toner', value: 'Matched (8 @ AED 1,200.00)' },
          { label: 'Freight', value: 'Variance (PO AED 500 / Inv AED 750)' },
          { label: 'Ledger Alignment', value: 'Ready for review' },
        ],
      },
    },
    {
      id: 'rules',
      icon: <ShieldAlert className="w-4 h-4" />,
      title: 'Check Against Rules',
      summary: 'Flag missing attachments, mismatched totals, duplicates, and breaches.',
      details: [
        'Identifies duplicate invoices across dates or vendors.',
        'Checks line items against agreed expenditure limits.',
      ],
      preview: {
        title: 'Rule Evaluation',
        ref: 'Commercial Payables Rules',
        fields: [
          { label: 'Duplicates', value: 'None identified' },
          { label: 'Mandatory Fields', value: 'All present' },
          { label: 'Limit Check', value: '1 variance flagged' },
          { label: 'VAT Check', value: '5% verified' },
        ],
      },
    },
    {
      id: 'drafts',
      icon: <FileSpreadsheet className="w-4 h-4" />,
      title: 'Prepare Drafts',
      summary: 'Produce lead schedules and working papers ready for human review.',
      details: [
        'Compiles structured lead schedules and transaction audit sheets.',
        'Maintains direct links from schedule numbers back to source PDFs.',
      ],
      preview: {
        title: 'Draft Working Paper',
        ref: 'Accounts Payable Lead Schedule',
        fields: [
          { label: 'Ref', value: 'WP-AP-2025-Q1' },
          { label: 'Status', value: 'Awaiting professional review' },
          { label: 'Source Documents', value: 'Invoices and POs linked' },
        ],
      },
    },
    {
      id: 'bulk',
      icon: <Layers className="w-4 h-4" />,
      title: 'Handle Bulk Work',
      summary: 'Process batches of hundreds of documents at once.',
      details: [
        'Batch ingestion of mixed financial files with automated sorting.',
        'Isolates exceptions into a focused queue for reviewer sign-off.',
      ],
      preview: {
        title: 'Batch Processing',
        ref: 'Batch Demonstration',
        fields: [
          { label: 'Batch Volume', value: '120 documents' },
          { label: 'Direct Matches', value: '114 verified' },
          { label: 'Flagged for Review', value: '6 items' },
        ],
      },
    },
  ];

  const current = capabilities[activeTab];

  return (
    <section id="capabilities" className="py-16 md:py-20 bg-brand-offwhite border-b border-brand-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Core Capabilities"
            description="Five foundational tasks of financial document review."
          />
        </ScrollReveal>

        {/* Tab buttons: Buttons 15px, weight 500 */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
          {capabilities.map((cap, idx) => (
            <button
              key={cap.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-btn font-medium rounded-lg transition-colors ${
                activeTab === idx
                  ? 'bg-brand-navy text-white'
                  : 'bg-white text-brand-navy/70 border border-brand-border hover:text-brand-navy'
              }`}
            >
              <span>{cap.title}</span>
            </button>
          ))}
        </div>

        {/* Content Box */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start bg-white rounded-xl p-5 sm:p-7 border border-brand-border"
        >
          {/* Left Details */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="text-h3 text-brand-navy">
              {current.title}
            </h3>

            <p className="text-body text-brand-navymuted leading-relaxed">
              {current.summary}
            </p>

            <ul className="space-y-1.5 pt-1 text-body-sm text-brand-navy/90">
              {current.details.map((detail, dIdx) => (
                <li key={dIdx} className="leading-relaxed">
                  • {detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Preview Card - SpotlightCard with clean minimal table */}
          <SpotlightCard
            theme="light"
            spotlightColor="rgba(32, 185, 154, 0.16)"
            intensity={0.2}
            spotlightSize={260}
            className="md:col-span-6 bg-brand-offwhite p-4 rounded-xl border border-brand-border space-y-2.5"
          >
            <div className="flex items-center justify-between pb-2 border-b border-brand-border">
              <span className="text-body-sm font-semibold text-brand-navy">{current.preview.title}</span>
            </div>

            <div className="bg-white rounded border border-brand-border divide-y divide-brand-border text-body-sm">
              {current.preview.fields.map((field, fIdx) => (
                <div key={fIdx} className="px-3 py-1.5 flex items-center justify-between">
                  <span className="text-brand-navymuted">{field.label}</span>
                  <span className="text-brand-navy font-semibold text-right">{field.value}</span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;
