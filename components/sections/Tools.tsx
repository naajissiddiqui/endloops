'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import CurtainReveal from '@/components/animations/CurtainReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface ToolsProps {
  onRequestDemo: (toolName?: string) => void;
}

export const Tools: React.FC<ToolsProps> = ({ onRequestDemo }) => {
  const tools = [
    {
      id: 'po-extraction',
      title: 'Purchase-order extraction',
      status: 'In active use',
      statusType: 'live',
      description:
        'Extracts line items, quantities, agreed unit rates, and vendor details from purchase orders. Formats data for direct cross-checking against supplier invoices.',
      inputs: 'PDFs, scanned purchase orders, image files',
      useCase: 'Procurement desks & accounts payable teams',
    },
    {
      id: 'vouching-automation',
      title: 'Vouching automation',
      status: 'In active use',
      statusType: 'live',
      description:
        'Automates the cross-substantiation of general ledger voucher entries against corresponding supplier invoices, receipt delivery notes, and bank payment debits.',
      inputs: 'General ledger transaction batches & voucher folders',
      useCase: 'Audit sampling & transaction vouching',
    },
    {
      id: 'expense-working',
      title: 'Expense working automation',
      status: 'In active use',
      statusType: 'live',
      description:
        'Converts stacks of commercial expense receipts, utility bills, and payment vouchers into classified expense breakdown schedules with tax computations.',
      inputs: 'Card statements, receipts, and expense invoices',
      useCase: 'Corporate tax schedules & monthly closes',
    },
    {
      id: 'financial-report-review',
      title: 'Financial report review',
      status: 'In development',
      statusType: 'dev',
      description:
        'Automated review of draft financial statements. Validates notes against balance sheet lines, checks mathematical footings, and highlights disclosure discrepancies.',
      inputs: 'Draft financial statements and disclosure notes',
      useCase: 'Quality review for audit managers and CFOs',
    },
    {
      id: 'tender-verification',
      title: 'Tender verification',
      status: 'In active use',
      statusType: 'live',
      description:
        'Parses multi-vendor procurement proposals and produces a comparative pricing matrix. Highlights outlying supplier prices, unquoted items, and specification deviations.',
      inputs: 'Competitive vendor quotations and tender documents',
      useCase: 'Procurement evaluation & tender committees',
    },
    {
      id: 'reconciliation',
      title: 'Reconciliation',
      status: 'In development',
      statusType: 'dev',
      description:
        'Matching engine for comparing bank feeds, payment gateway settlements, intercompany accounts, and core accounting ledgers.',
      inputs: 'Bank feeds, gateway settlements, and ledger accounts',
      useCase: 'Cash management & intercompany reconciliations',
    },
  ];

  return (
    <section id="tools" className="py-20 md:py-28 bg-brand-offwhite border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Standalone Tools"
            description="Focused tools that solve one specific need and can be used on their own. Some are already in active use, while others are in development as our product range continues to grow."
          />
        </ScrollReveal>

        {/* Curtain-Style Image Reveal Visual */}
        <div className="mb-14 max-w-5xl mx-auto">
          <CurtainReveal initialScale={1.12} initialY={45}>
            <div className="relative rounded-2xl overflow-hidden bg-white border border-brand-border shadow-sm">
              <div className="px-5 py-3 bg-brand-offwhite border-b border-brand-border flex items-center justify-between text-xs">
                <span className="font-semibold text-brand-navy">
                  Invoice Processing &amp; Verification Pipeline
                </span>
                <span className="text-brand-navymuted">Product Visual</span>
              </div>
              <div className="relative w-full aspect-[16/9] min-h-[280px] sm:min-h-[380px] lg:min-h-[480px]">
                <Image
                  src="/images/document-processing.png"
                  alt="Document Processing and Verification Pipeline"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1100px"
                />
              </div>
            </div>
          </CurtainReveal>
        </div>

        {/* Clean Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, idx) => (
            <ScrollReveal key={tool.id} delay={idx * 0.06}>
              <div className="h-full rounded-xl p-6 bg-white border border-brand-border flex flex-col justify-between hover:border-brand-teal/40 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-brand-navy">
                      Tool 0{idx + 1}
                    </span>
                    <span
                      className={`text-[11px] font-medium ${
                        tool.statusType === 'live'
                          ? 'text-brand-green'
                          : 'text-brand-purple'
                      }`}
                    >
                      {tool.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-brand-navy">
                    {tool.title}
                  </h3>

                  <p className="text-xs text-brand-navymuted leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-brand-border space-y-1.5 text-[11px] text-brand-navymuted">
                  <div>
                    <span className="font-medium text-brand-navy">Primary use: </span>
                    {tool.useCase}
                  </div>
                  <div>
                    <span className="font-medium text-brand-navy">Inputs: </span>
                    {tool.inputs}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Clean Explanatory Note on Product Categories */}
        <div className="mt-12 max-w-5xl mx-auto p-6 rounded-xl bg-white border border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-brand-navymuted max-w-2xl leading-relaxed">
            <strong className="text-brand-navy block mb-0.5 text-sm">Understanding our two product categories</strong>
            <span className="text-brand-navy font-semibold">End-to-End Solutions</span> run an entire statutory process from start to finish, while <span className="text-brand-navy font-semibold">Standalone Tools</span> are focused modules designed to solve a single bottleneck in your existing workflow.
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onRequestDemo('Product Advisory')}
            className="whitespace-nowrap text-xs"
          >
            Ask About Specific Tools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tools;
