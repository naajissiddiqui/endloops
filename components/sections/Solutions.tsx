'use client';

import React, { useState } from 'react';
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
      description: 'Automates trial balance roll-forwards, sample voucher matching, bank reconciliation, and working papers.',
      features: [
        'Automated voucher sampling and general ledger reconciliation',
        'Prepares standardized audit lead sheets with source PDF links',
      ],
      forWho: 'Audit firms and certified accountants',
    },
    {
      id: 'escrow-audit',
      title: 'Escrow audit',
      description: 'Handles escrow compliance audits for real estate development funds and client trust accounts.',
      features: [
        'Verifies project disbursements against approved developer budgets',
        'Tracks contractor retention accounts and prepares regulatory files',
      ],
      forWho: 'Auditors handling property escrow accounts',
    },
    {
      id: 'budget-review',
      title: 'Budget review',
      description: 'Verifies corporate operational budgets against historical spending trends, flagging departmental anomalies.',
      features: [
        'Line-item comparison against historical actuals across entities',
        'Variance reports highlighting outliers ready for review',
      ],
      forWho: 'Corporate finance teams and controllers',
    },
    {
      id: 'interim-audit',
      title: 'Interim audit',
      description: 'Mid-year audit testing and analytical review procedures before year-end reporting cycles.',
      features: [
        'Automated quarterly transaction sampling and variance analysis',
        'Directly rolls verified schedules into year-end audit files',
      ],
      forWho: 'Statutory auditors and assurance teams',
    },
    {
      id: 'property-budget-prep',
      title: 'Budget preparation for property companies',
      description: 'Calculates unit service charges, apportions maintenance costs, and models reserve fund schedules.',
      features: [
        'Service charge allocation by unit square footage and usage',
        'Automates maintenance roll-ups and owner billing schedules',
      ],
      forWho: 'Property management companies and asset managers',
    },
  ];

  const current = solutions[selectedSolution];

  return (
    <section id="solutions" className="py-16 md:py-20 bg-white border-b border-brand-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="End-to-End Solutions"
            description="Complete software that runs an entire financial workflow from start to finish."
          />
        </ScrollReveal>

        <div className="mb-10">
          <CurtainReveal initialScale={1.08} initialY={35}>
            <div className="relative rounded-xl overflow-hidden bg-brand-offwhite border border-brand-border shadow-xs">
              <div className="relative w-full aspect-[16/9] min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]">
                <img
                  src="/images/financial-audit.png"
                  alt="Endloops Financial Audit Workflow"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </CurtainReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-5 space-y-1.5">
            {solutions.map((item, index) => {
              const isActive = selectedSolution === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedSolution(index)}
                  className={`w-full text-left p-3 rounded-lg transition-colors border flex items-center justify-between text-btn ${
                    isActive
                      ? 'bg-brand-navy text-white border-brand-navy font-semibold'
                      : 'bg-brand-offwhite text-brand-navy border-brand-border hover:bg-white font-medium'
                  }`}
                >
                  <span className="truncate mr-2">{item.title}</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 shrink-0 ${
                      isActive ? 'text-brand-teal' : 'text-brand-navymuted/50'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="md:col-span-7 bg-brand-offwhite rounded-xl p-5 sm:p-6 border border-brand-border space-y-4">
            <h3 className="text-h3 text-brand-navy">
              {current.title}
            </h3>

            <p className="text-body text-brand-navymuted leading-relaxed">
              {current.description}
            </p>

            <ul className="space-y-1.5 text-body-sm text-brand-navy/90">
              {current.features.map((feature, fIdx) => (
                <li key={fIdx}>
                  • {feature}
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-label">
              <span className="text-brand-navymuted truncate">
                <strong className="text-brand-navy font-semibold">For:</strong> {current.forWho}
              </span>
              <Button
                variant="teal"
                size="sm"
                onClick={() => onRequestDemo(current.title)}
                className="whitespace-nowrap self-start sm:self-auto px-4 py-1.5"
              >
                Inquire
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
