import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import DemoModal from '@/components/ui/Modal';
import CurtainReveal from '@/components/animations/CurtainReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const SolutionsPage: React.FC = () => {
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
        'Auto-compilation of standardized audit working papers and lead sheets',
      ],
      target: 'Audit practices and certified accountants',
      image: '/images/financial-audit.png',
    },
    {
      id: 'escrow-audit',
      title: 'Escrow audit',
      category: 'Real estate & trust compliance',
      desc: 'Software built to satisfy escrow audit requirements for real estate development funds and client trust accounts.',
      features: [
        'Verification of project disbursements against approved budget lines',
        'Tracks contractor payment certificates and retention calculations',
      ],
      target: 'Auditors handling property developer escrow accounts',
      image: '/images/workflow-illustration.png',
    },
    {
      id: 'budget-review',
      title: 'Budget review',
      category: 'FP&A & corporate governance',
      desc: 'Automates multi-department budget verification by comparing proposed operational budgets against historical expenditure trends.',
      features: [
        'Departmental line-item variance and trend anomaly detection',
        'Multi-entity consolidation across subsidiaries',
      ],
      target: 'Corporate finance teams and controllers',
      image: '/images/hero-visual.png',
    },
    {
      id: 'interim-audit',
      title: 'Interim audit',
      category: 'Mid-cycle review',
      desc: 'Streamlines mid-year testing cycles. Continuously samples transactions, tests internal controls, and prepares analytical review work papers.',
      features: [
        'Continuous automated transaction sampling across financial quarters',
        'Direct rollover of verified schedules into final year-end audit files',
      ],
      target: 'Audit teams and corporate internal audit departments',
      image: '/images/document-processing.png',
    },
    {
      id: 'property-budget-prep',
      title: 'Budget preparation for property management companies',
      category: 'Property finance',
      desc: 'Turnkey software for property management firms to calculate service charges, apportion utility and maintenance costs, and model reserve funds.',
      features: [
        'Unit-level service charge allocation based on square footage',
        'Automated vendor maintenance roll-ups and billing schedules',
      ],
      target: 'Property management companies and asset managers',
      image: '/images/financial-audit.png',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-offwhite">
      <Navbar onRequestDemo={() => openDemo('End-to-End Solutions')} />

      <main className="flex-1 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-label text-brand-navymuted mb-6">
            <a href="/" className="hover:text-brand-navy transition-colors">
              Home
            </a>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-navy font-semibold">End-to-End Solutions</span>
          </div>

          {/* Heading */}
          <div className="max-w-3xl mb-10">
            <h1 className="text-h1 text-brand-navy">
              End-to-End Solutions
            </h1>
            <p className="mt-3 md:mt-4 text-body-lg text-brand-navymuted leading-relaxed max-w-2xl">
              Complete software that runs an entire financial workflow from start to finish.
            </p>
          </div>

          {/* Solutions Detailed List */}
          <div className="space-y-8">
            {solutions.map((sol) => (
              <ScrollReveal key={sol.id} delay={0.06}>
                <div className="bg-white rounded-xl p-5 sm:p-7 border border-brand-border">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-6 space-y-3">
                      <div className="text-label font-medium text-brand-teal">
                        {sol.category}
                      </div>

                      <h2 className="text-h3 text-brand-navy">
                        {sol.title}
                      </h2>

                      <p className="text-body text-brand-navymuted leading-relaxed">
                        {sol.desc}
                      </p>

                      <div className="space-y-1 pt-1">
                        {sol.features.map((item, dIdx) => (
                          <div key={dIdx} className="text-body-sm text-brand-navy/90 leading-relaxed">
                            • {item}
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-brand-border flex items-center justify-between text-label">
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
                          <img
                            src={sol.image}
                            alt={sol.title}
                            className="w-full h-full object-cover"
                            loading="eager"
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
};

export default SolutionsPage;
