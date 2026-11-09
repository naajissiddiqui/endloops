'use client';

import React from 'react';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import CurtainReveal from '@/components/animations/CurtainReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface ToolsProps {
  onRequestDemo?: (productName?: string) => void;
}

export const Tools: React.FC<ToolsProps> = ({ onRequestDemo }) => {
  const tools = [
    {
      id: 'po-extraction',
      title: 'Purchase-order extraction',
      status: 'In use',
      description: 'Extracts line items, rates, and vendor details from purchase orders.',
      inputs: 'PDFs, scanned POs',
    },
    {
      id: 'vouching-automation',
      title: 'Vouching automation',
      status: 'In use',
      description: 'Cross-verifies general ledger entries against supporting invoices and payments.',
      inputs: 'GL batches & vouchers',
    },
    {
      id: 'expense-working',
      title: 'Expense working automation',
      status: 'In use',
      description: 'Categorizes receipts and bills into classified expense schedules with VAT.',
      inputs: 'Receipts & card statements',
    },
    {
      id: 'financial-report-review',
      title: 'Financial report review',
      status: 'In development',
      description: 'Reviews draft statements for note consistency and mathematical footings.',
      inputs: 'Draft statements & notes',
    },
    {
      id: 'tender-verification',
      title: 'Tender verification',
      status: 'In use',
      description: 'Produces comparative quote matrices across multiple competing bids.',
      inputs: 'Vendor tender quotes',
    },
    {
      id: 'reconciliation',
      title: 'Reconciliation',
      status: 'In development',
      description: 'Matches bank feeds and payment settlements against accounting ledgers.',
      inputs: 'Bank feeds & ledgers',
    },
  ];

  return (
    <section id="tools" className="py-16 md:py-20 bg-brand-offwhite border-b border-brand-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Standalone Tools"
            description="Focused tools that solve one specific need and operate independently."
          />
        </ScrollReveal>

        {/* Curtain-Style Image Reveal Visual */}
        <div className="mb-10">
          <CurtainReveal initialScale={1.08} initialY={35}>
            <div className="relative rounded-xl overflow-hidden bg-white border border-brand-border shadow-xs">
              <div className="px-4 py-2 bg-brand-offwhite border-b border-brand-border flex items-center justify-between text-label text-brand-navymuted">
                <span className="font-semibold text-brand-navy">Document Processing Pipeline</span>
                <span>Product Visual</span>
              </div>
              <div className="relative w-full aspect-[16/9] min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]">
                <Image
                  src="/images/document-processing.png"
                  alt="Invoice Processing Pipeline"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1000px"
                />
              </div>
            </div>
          </CurtainReveal>
        </div>

        {/* Clean Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool, idx) => (
            <ScrollReveal key={tool.id} delay={idx * 0.04}>
              <div
                onClick={() => onRequestDemo && onRequestDemo(tool.title)}
                className="h-full rounded-lg p-5 bg-white border border-brand-border flex flex-col justify-between space-y-3 cursor-pointer hover:border-brand-teal/50 transition-colors"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-label text-brand-navymuted">
                    <span>Tool 0{idx + 1}</span>
                    <span className="font-mono">{tool.status}</span>
                  </div>

                  {/* Card heading: H4 21px desktop / 19px mobile, weight 600, line-height 1.3 */}
                  <h4 className="text-h4 text-brand-navy">
                    {tool.title}
                  </h4>

                  <p className="text-body-sm text-brand-navymuted leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-brand-border text-label text-brand-navymuted flex items-center justify-between">
                  <span>Input: {tool.inputs}</span>
                  <span className="text-brand-green font-medium text-btn">Inquire &rarr;</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
