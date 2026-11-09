'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import DemoModal from '@/components/ui/Modal';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function ToolsPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeModalProduct, setActiveModalProduct] = useState('Purchase-Order Extraction');

  const openDemo = (product: string) => {
    setActiveModalProduct(product);
    setIsDemoModalOpen(true);
  };

  const standaloneTools = [
    {
      id: 'po-extraction',
      title: 'Purchase-order extraction',
      status: 'In active use',
      desc: 'Extracts line items, quantities, agreed unit rates, and vendor details from purchase orders. Formats data for direct cross-checking against invoices.',
      features: [
        'Line-item itemization and subtotal verification',
        'Direct link back to original purchase-order document',
      ],
      inputs: 'PDFs, scanned POs',
      output: 'Structured tabular data / ERP export',
    },
    {
      id: 'vouching-automation',
      title: 'Vouching automation',
      status: 'In active use',
      desc: 'Substantiates general ledger entries by matching and validating supporting third-party vouchers, invoices, and bank records automatically.',
      features: [
        'Multi-way cross-verification against GL transaction logs',
        'Generates fully referenced vouching schedules for review',
      ],
      inputs: 'GL batches & voucher folders',
      output: 'Vouched working schedule with exception notes',
    },
    {
      id: 'expense-working',
      title: 'Expense working automation',
      status: 'In active use',
      desc: 'Converts unstructured corporate expense receipts, hotel bills, and utility slips into categorized expense schedules with tax computations.',
      features: [
        'Expense classification by standard chart of accounts categories',
        'Prepares consolidated expense schedules for review',
      ],
      inputs: 'Card statements, receipts, and vouchers',
      output: 'Categorized tax expense schedule',
    },
    {
      id: 'financial-report-review',
      title: 'Financial report review',
      status: 'In development',
      desc: 'Automated review of draft financial statements. Validates notes against balance sheet lines and checks statement mathematical footings.',
      features: [
        'Mathematical footings and cross-statement consistency checks',
        'Note-to-statement reference and number matching',
      ],
      inputs: 'Draft annual reports and disclosure notes',
      output: 'Footing audit matrix & discrepancy report',
    },
    {
      id: 'tender-verification',
      title: 'Tender verification',
      status: 'In active use',
      desc: 'Parses competing supplier proposals and creates an objective comparative pricing matrix. Highlights outlying rates and unquoted items.',
      features: [
        'Side-by-side vendor quotation pricing comparison',
        'Outlier and abnormal price variance identification',
      ],
      inputs: 'Vendor tender quotes and RFP schedules',
      output: 'Comparative quote evaluation matrix',
    },
    {
      id: 'reconciliation',
      title: 'Reconciliation',
      status: 'In development',
      desc: 'Matching engine for comparing bank feeds, payment gateway settlements, intercompany accounts, and core accounting ledgers.',
      features: [
        'Rule-based matching across high-volume ledger transactions',
        'Produces clear bank and ledger reconciliation schedules',
      ],
      inputs: 'Bank feeds, payment merchant files, GL accounts',
      output: 'Reconciliation lead sheet with auto-matched entries',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-offwhite">
      <Navbar onRequestDemo={() => openDemo('Standalone Tools')} />

      <main className="flex-1 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-brand-navymuted mb-6">
            <Link href="/" className="hover:text-brand-navy transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-navy font-medium">Standalone Tools</span>
          </div>

          {/* Heading */}
          <div className="max-w-3xl mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-brand-navy leading-[1.12]">
              Standalone Financial Tools
            </h1>
            <p className="mt-3 text-base sm:text-lg text-brand-navymuted leading-relaxed">
              Focused tools designed to solve one specific need and operate independently.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standaloneTools.map((tool, idx) => (
              <ScrollReveal key={tool.id} delay={idx * 0.05}>
                <div className="h-full rounded-xl p-6 bg-white border border-brand-border flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-brand-navy">Tool 0{idx + 1}</span>
                      <span className="font-mono text-[11px] text-brand-navymuted">
                        {tool.status}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-brand-navy">
                      {tool.title}
                    </h2>

                    <p className="text-xs text-brand-navymuted leading-relaxed">
                      {tool.desc}
                    </p>

                    <div className="space-y-1 pt-1">
                      {tool.features.map((f, fIdx) => (
                        <div key={fIdx} className="text-xs text-brand-navy/90 leading-relaxed">
                          • {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-brand-border space-y-2 text-[11px] text-brand-navymuted">
                    <div>
                      <span className="font-medium text-brand-navy">Inputs: </span>
                      {tool.inputs}
                    </div>
                    <div>
                      <span className="font-medium text-brand-navy">Output: </span>
                      {tool.output}
                    </div>
                    <Button
                      variant="teal"
                      size="sm"
                      onClick={() => openDemo(tool.title)}
                      className="w-full text-xs mt-2"
                    >
                      Inquire About Tool
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        defaultProduct={activeModalProduct}
      />
    </div>
  );
}
