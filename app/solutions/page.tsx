'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import DemoModal from '@/components/ui/Modal';
import CurtainReveal from '@/components/animations/CurtainReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function SolutionsPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeModalProduct, setActiveModalProduct] = useState('Financial Audit Automation');

  const openDemo = (product: string) => {
    setActiveModalProduct(product);
    setIsDemoModalOpen(true);
  };

  const solutions = [
    {
      id: 'financial-audit',
      title: 'Financial audit',
      category: 'Assurance & statutory reporting',
      desc: 'Complete software that runs statutory audits from trial balance ingestion through to automated voucher sampling, ledger reconciliation, and working-paper preparation.',
      features: [
        'Automated voucher sampling and substantiation against source documents',
        'Direct reconciliation of general ledger with bank and tax filings',
        'Auto-compilation of standardized audit working papers and lead sheets',
        'Exception dashboard flagging items requiring auditor review',
      ],
      target: 'Audit practices, certified auditors, and public accounting teams.',
      image: '/images/financial-audit.png',
    },
    {
      id: 'escrow-audit',
      title: 'Escrow audit',
      category: 'Real estate & trust compliance',
      desc: 'Software built to satisfy escrow audit requirements for real estate development funds and client trust accounts in Dubai and the GCC region.',
      features: [
        'Verification of project expense disbursements against approved budget lines',
        'Contractor payment certificate tracking and retention money calculations',
        'Evaluation against statutory escrow disbursement limits',
        'Preparation of structured audit inspection packages for submission',
      ],
      target: 'Auditors handling property developer escrow accounts and trust funds.',
      image: '/images/financial-workflow.png',
    },
    {
      id: 'budget-review',
      title: 'Budget review',
      category: 'FP&A & corporate governance',
      desc: 'Automates multi-department budget verification by comparing proposed operational budgets against historical expenditure trends and flagging unauthorized variances.',
      features: [
        'Departmental line-item variance and trend anomaly detection',
        'Multi-entity consolidation across subsidiaries',
        'Flagging of duplicate, misclassified, or unauthorized line items',
        'Executive variance presentation reports ready for review',
      ],
      target: 'Corporate finance teams, controllers, and FP&A leaders.',
      image: '/images/hero-visual.png',
    },
    {
      id: 'interim-audit',
      title: 'Interim audit',
      category: 'Mid-cycle review',
      desc: 'Streamlines mid-year testing cycles. Continuously samples transactions, tests internal controls, and prepares analytical review work papers ahead of annual reporting.',
      features: [
        'Continuous automated transaction sampling across financial quarters',
        'Analytical review procedures comparing revenue and expense trends',
        'Early identification of control breakdown or transaction discrepancies',
        'Direct rollover of verified schedules into final year-end audit files',
      ],
      target: 'Audit teams and corporate internal audit departments.',
      image: '/images/document-processing.png',
    },
    {
      id: 'property-budget-prep',
      title: 'Budget preparation for property management companies',
      category: 'Property finance',
      desc: 'Turnkey software for property management firms to calculate service charges, apportion utility and maintenance costs, and model reserve funds.',
      features: [
        'Unit-level service charge allocation based on square footage',
        'Vendor maintenance and utility cost roll-ups with historical indexing',
        'Reserve fund and capital replacement modeling',
        'Export of owner billing schedules and regulatory budget summaries',
      ],
      target: 'Property management companies and community asset managers.',
      image: '/images/financial-audit.png',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-offwhite">
      <Navbar onRequestDemo={() => openDemo('End-to-End Solutions')} />

      <main className="flex-1 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-brand-navymuted mb-6">
            <Link href="/" className="hover:text-brand-navy transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-navy font-medium">End-to-End Solutions</span>
          </div>

          {/* Heading */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-brand-navy leading-[1.12]">
              End-to-End Solutions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-brand-navymuted leading-relaxed">
              Complete software that runs an entire process or financial service from start to finish. The software prepares the work, and the professional reviews and decides.
            </p>
          </div>

          {/* Solutions Detailed List */}
          <div className="space-y-12">
            {solutions.map((sol, idx) => (
              <ScrollReveal key={sol.id} delay={0.08}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-6 space-y-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-brand-teal">
                        {sol.category}
                      </div>

                      <h2 className="text-2xl font-bold text-brand-navy">
                        {sol.title}
                      </h2>

                      <p className="text-sm text-brand-navymuted leading-relaxed">
                        {sol.desc}
                      </p>

                      <div className="space-y-1.5 pt-2">
                        {sol.features.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-brand-navy/90 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-brand-border flex items-center justify-between text-xs">
                        <span className="text-brand-navymuted">{sol.target}</span>
                        <Button
                          variant="teal"
                          size="sm"
                          onClick={() => openDemo(sol.title)}
                        >
                          Inquire
                        </Button>
                      </div>
                    </div>

                    <div className="lg:col-span-6">
                      <CurtainReveal initialScale={1.08} initialY={30}>
                        <div className="relative rounded-xl overflow-hidden bg-brand-offwhite border border-brand-border aspect-[16/10]">
                          <Image
                            src={sol.image}
                            alt={sol.title}
                            fill
                            priority={idx < 2}
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 500px"
                          />
                        </div>
                      </CurtainReveal>
                    </div>
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
