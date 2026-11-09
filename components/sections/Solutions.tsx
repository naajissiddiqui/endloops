'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import CurtainReveal from '@/components/animations/CurtainReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface SolutionsProps {
  onRequestDemo: (productName?: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onRequestDemo }) => {
  const [selectedSolution, setSelectedSolution] = useState(0);

  const solutions = [
    {
      id: 'financial-audit',
      title: 'Financial audit',
      category: 'Assurance & statutory reporting',
      description:
        'Complete software for running statutory financial audits. Automates trial balance ingestion, sample voucher verification, bank statement matching, and audit working-paper preparation.',
      features: [
        'Automated voucher sampling and verification against source documents',
        'Reconciliation of general ledger records with bank and tax filings',
        'Preparation of standard audit schedules and lead sheets',
        'Exception flagging for items requiring auditor review',
      ],
      forWho: 'Audit firms and certified accountants.',
    },
    {
      id: 'escrow-audit',
      title: 'Escrow audit',
      category: 'Real estate & trust accounts',
      description:
        'Software built to handle escrow account audits for property development funds and client trust accounts in Dubai and the wider GCC region.',
      features: [
        'Verification of project disbursements against approved budget lines',
        'Tracking of contractor payments, retentions, and developer claims',
        'Evaluation against statutory escrow disbursement limits',
        'Preparation of escrow audit review files for regulatory submission',
      ],
      forWho: 'Auditors handling property developer escrow accounts.',
    },
    {
      id: 'budget-review',
      title: 'Budget review',
      category: 'Financial planning & analysis',
      description:
        'Software that verifies corporate budgets against historical expenditure trends, flagging anomalies, discrepancies, and unauthorized variances across departments.',
      features: [
        'Departmental line-item comparison against historical actuals',
        'Multi-entity consolidation across subsidiaries',
        'Flagging of duplicate, misclassified, or outlying budget lines',
        'Preparation of structured variance reports for review',
      ],
      forWho: 'Finance teams, controllers, and FP&A departments.',
    },
    {
      id: 'interim-audit',
      title: 'Interim audit',
      category: 'Mid-cycle review',
      description:
        'Software for mid-year audit testing and analytical review procedures before year-end reporting cycles.',
      features: [
        'Automated interim transaction sampling across financial quarters',
        'Analytical review procedures comparing revenue and expense trends',
        'Early identification of discrepancies before final year-end closing',
        'Direct rollover of verified interim schedules into year-end files',
      ],
      forWho: 'Auditors and internal audit practices.',
    },
    {
      id: 'property-budget-prep',
      title: 'Budget preparation for property management companies',
      category: 'Property finance',
      description:
        'Specialized software for property management firms to calculate service charges, apportion utility and maintenance costs, and prepare reserve fund models.',
      features: [
        'Unit-level service charge allocation based on property areas',
        'Vendor maintenance and utility cost roll-ups',
        'Reserve fund and capital replacement schedule modeling',
        'Preparation of owner billing schedules and budget summaries',
      ],
      forWho: 'Property management companies and community finance managers.',
    },
  ];

  const current = solutions[selectedSolution];

  return (
    <section id="solutions" className="py-20 md:py-28 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="End-to-End Solutions"
            description="Complete software that runs an entire process or financial service from start to finish. The software prepares the work, and the professional reviews and decides."
          />
        </ScrollReveal>

        {/* Curtain-Style Image Reveal Visual */}
        <div className="mb-14 max-w-5xl mx-auto">
          <CurtainReveal initialScale={1.12} initialY={45}>
            <div className="relative rounded-2xl overflow-hidden bg-brand-offwhite border border-brand-border shadow-sm">
              <div className="px-5 py-3 bg-brand-offwhite border-b border-brand-border flex items-center justify-between text-xs">
                <span className="font-semibold text-brand-navy">
                  Financial Audit &amp; Review Workflow
                </span>
                <span className="text-brand-navymuted">Product Visual</span>
              </div>
              <div className="relative w-full aspect-[16/9] min-h-[280px] sm:min-h-[400px] lg:min-h-[500px]">
                <Image
                  src="/images/financial-audit.png"
                  alt="Endloops Financial Audit Workflow illustration"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1100px"
                />
              </div>
            </div>
          </CurtainReveal>
        </div>

        {/* Clean Two-Column Solutions Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Solution Selector List */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-navymuted px-1 mb-2">
              Solutions in this category:
            </div>
            {solutions.map((item, index) => {
              const isActive = selectedSolution === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedSolution(index)}
                  className={`w-full text-left p-3.5 rounded-xl transition-all border flex items-center justify-between text-sm ${
                    isActive
                      ? 'bg-brand-navy text-white border-brand-navy'
                      : 'bg-brand-offwhite text-brand-navy border-brand-border hover:bg-white'
                  }`}
                >
                  <span className="font-semibold">{item.title}</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-brand-teal translate-x-0.5' : 'text-brand-navymuted/60'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Solution Details View */}
          <div className="lg:col-span-7 bg-brand-offwhite rounded-2xl p-6 sm:p-8 border border-brand-border space-y-5">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-teal mb-1">
                {current.category}
              </div>
              <h3 className="text-2xl font-bold text-brand-navy">
                {current.title}
              </h3>
            </div>

            <p className="text-sm text-brand-navymuted leading-relaxed">
              {current.description}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-navy">
                What the solution handles:
              </div>
              {current.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2 text-xs text-brand-navy/90 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs text-brand-navymuted">
                <span className="font-semibold text-brand-navy">Target users: </span>
                {current.forWho}
              </div>
              <Button
                variant="teal"
                size="sm"
                onClick={() => onRequestDemo(current.title)}
                className="whitespace-nowrap"
              >
                Inquire About {current.title}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
