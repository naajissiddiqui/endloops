'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import CurtainReveal from '@/components/animations/CurtainReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Stepper, { Step } from '@/src/components/reactbits/Stepper';
import AnimatedList, { type AnimatedListEntry } from '@/src/components/reactbits/AnimatedList';
import { UploadCloud, Cpu, FileSpreadsheet, ShieldCheck } from 'lucide-react';

export const Workflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Upload documents',
      desc: 'Ingest invoices, purchase orders, contracts, and statements.',
    },
    {
      num: '02',
      title: 'Automated processing',
      desc: 'Extract line items, match against ledgers, and check rules.',
    },
    {
      num: '03',
      title: 'Draft working papers',
      desc: 'Generate lead schedules and analytical variance tables.',
    },
    {
      num: '04',
      title: 'Human sign-off',
      desc: 'The professional reviews exceptions and approves the file.',
    },
  ];

  const pipelineTransitions: AnimatedListEntry[] = [
    {
      icon: <UploadCloud className="w-4 h-4 text-brand-teal" />,
      title: 'Document Ingestion: INV-2025-084',
      description: 'Extracted vendor, date, 12 line items, and VAT totals',
      meta: '0.4s'
    },
    {
      icon: <Cpu className="w-4 h-4 text-brand-teal" />,
      title: 'Automated Matching: PO-2025-0419',
      description: 'Line items cross-checked against GL vouchers & rules',
      meta: '0.8s'
    },
    {
      icon: <FileSpreadsheet className="w-4 h-4 text-brand-teal" />,
      title: 'Working Paper Drafted',
      description: 'Lead Schedule 7 analytical variance formatted for audit',
      meta: '1.2s'
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-brand-green" />,
      title: 'Human Review Pending',
      description: 'Awaiting practitioner sign-off and final approval',
      meta: 'Ready'
    }
  ];

  return (
    <section id="workflow" className="py-16 md:py-20 bg-white border-b border-brand-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="How It Works"
            description="From raw documents to finalized working papers in four clear steps."
          />
        </ScrollReveal>

        <div className="mb-10">
          <CurtainReveal initialScale={1.08} initialY={35}>
            <div className="relative rounded-xl overflow-hidden bg-brand-offwhite border border-brand-border shadow-xs">
              <div className="relative w-full aspect-[16/9] min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]">
                <img
                  src="/images/workflow-illustration.png"
                  alt="Endloops Workflow Architecture"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </CurtainReveal>
        </div>

        <div className="mb-12 max-w-3xl mx-auto">
          <Stepper
            theme="light"
            indicator="numbers"
            initialStep={1}
            width="100%"
            className="w-full shadow-xs border border-brand-border rounded-2xl bg-brand-offwhite p-4 sm:p-6"
          >
            <Step title="01 Upload">
              <div className="p-4 sm:p-5 bg-white rounded-xl border border-brand-border space-y-2 text-left">
                <div className="text-label font-mono font-semibold text-brand-teal">Step 01 • Upload Documents</div>
                <h4 className="text-h4 text-brand-navy">Batch Ingestion & Document Parsing</h4>
                <p className="text-body-sm text-brand-navymuted leading-relaxed">
                  Ingest invoices, purchase orders, vendor statements, and contract schedules. Structured data is captured automatically without rekeying.
                </p>
              </div>
            </Step>
            <Step title="02 Match">
              <div className="p-4 sm:p-5 bg-white rounded-xl border border-brand-border space-y-2 text-left">
                <div className="text-label font-mono font-semibold text-brand-teal">Step 02 • Automated Processing</div>
                <h4 className="text-h4 text-brand-navy">Rules Validation & 3-Way Matching</h4>
                <p className="text-body-sm text-brand-navymuted leading-relaxed">
                  The software cross-checks line items against purchase orders, flags variances, verifies math footings, and reconciles against ledgers.
                </p>
              </div>
            </Step>
            <Step title="03 Draft">
              <div className="p-4 sm:p-5 bg-white rounded-xl border border-brand-border space-y-2 text-left">
                <div className="text-label font-mono font-semibold text-brand-teal">Step 03 • Draft Working Papers</div>
                <h4 className="text-h4 text-brand-navy">Lead Schedules & Variance Tables</h4>
                <p className="text-body-sm text-brand-navymuted leading-relaxed">
                  Pre-populates audit working papers, analytical procedures, and expense classifications with links back to the original source documents.
                </p>
              </div>
            </Step>
            <Step title="04 Sign-off">
              <div className="p-4 sm:p-5 bg-white rounded-xl border border-brand-border space-y-2 text-left">
                <div className="text-label font-mono font-semibold text-brand-green">Step 04 • Human Sign-off</div>
                <h4 className="text-h4 text-brand-navy">Review & Professional Authorization</h4>
                <p className="text-body-sm text-brand-navymuted leading-relaxed">
                  The practitioner reviews flagged exceptions, inspects audit evidence, and provides final sign-off. The human remains in complete control.
                </p>
              </div>
            </Step>
          </Stepper>
        </div>

        <div className="mb-12 max-w-2xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-label font-mono text-brand-teal uppercase tracking-wider">Pipeline Activity</span>
            <h4 className="text-h4 text-brand-navy mt-1">Status Transitions</h4>
          </div>
          <AnimatedList
            theme="light"
            items={pipelineTransitions}
            width="100%"
            maxHeight={280}
            className="shadow-xs border border-brand-border rounded-xl bg-white"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-brand-border">
          {steps.map((st, idx) => (
            <ScrollReveal key={st.num} delay={idx * 0.05}>
              <div className="space-y-1.5 text-left">
                <div className="text-label font-mono font-semibold text-brand-teal">
                  Step {st.num}
                </div>
                <h4 className="text-h4 text-brand-navy">
                  {st.title}
                </h4>
                <p className="text-body-sm text-brand-navymuted leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
