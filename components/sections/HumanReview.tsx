'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Cpu, UserCheck, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export const HumanReview: React.FC = () => {
  return (
    <section id="human-review" className="py-16 md:py-24 bg-brand-offwhite border-b border-brand-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Human Review"
            description="The software prepares the working papers. The professional reviews, verifies, and decides."
          />
        </ScrollReveal>

        {/* Simplified Two-Pillar Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mt-8 sm:mt-10">
          {/* Pillar 1: Automated Preparation */}
          <ScrollReveal direction="left" delay={0.05}>
            <div className="h-full rounded-2xl bg-white p-6 sm:p-8 border border-brand-border space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-h4 text-brand-navy font-semibold">What Endloops Prepares</h3>
                  <span className="text-label text-brand-navymuted">Automated background processing</span>
                </div>
              </div>

              <p className="text-body text-brand-navymuted leading-relaxed">
                Handles high-volume extraction and ledger cross-checks, freeing your team from manual data entry.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-green mt-1 flex-shrink-0" />
                  <div className="text-body-sm text-brand-navy">
                    <strong className="font-semibold block">Document Extraction:</strong>
                    <span className="text-brand-navymuted">Extracts dates, amounts, line items, and tax numbers.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-green mt-1 flex-shrink-0" />
                  <div className="text-body-sm text-brand-navy">
                    <strong className="font-semibold block">Automatic Reconciliation:</strong>
                    <span className="text-brand-navymuted">Matches vouchers against purchase orders and general ledger.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                  <div className="text-body-sm text-brand-navy">
                    <strong className="font-semibold block">Exception Flagging:</strong>
                    <span className="text-brand-navymuted">Surfaces variances directly to the reviewer instead of guessing.</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Pillar 2: Human Sign-Off */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="h-full rounded-2xl bg-brand-navy p-6 sm:p-8 text-white space-y-5 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-brand-teal flex items-center justify-center">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-h4 text-white font-semibold">What You Decide</h3>
                    <span className="text-label text-slate-300">Professional authority &amp; sign-off</span>
                  </div>
                </div>

                <p className="text-body text-slate-200 leading-relaxed">
                  Financial auditing and compliance carry legal responsibility. Verification and final authorization remain strictly in your hands.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-brand-teal mt-1 flex-shrink-0" />
                    <div className="text-body-sm text-white">
                      <strong className="font-semibold block text-white">Direct Audit Trail:</strong>
                      <span className="text-slate-300">Every extracted number links back to the original source PDF.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-brand-teal mt-1 flex-shrink-0" />
                    <div className="text-body-sm text-white">
                      <strong className="font-semibold block text-white">Reviewer Discretion:</strong>
                      <span className="text-slate-300">Accept, adjust, or query flagged items with documented notes.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-brand-teal mt-1 flex-shrink-0" />
                    <div className="text-body-sm text-white">
                      <strong className="font-semibold block text-white">Final Authorization:</strong>
                      <span className="text-slate-300">Only verified schedules are exported for audit and tax filings.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-label text-slate-300 flex items-center justify-between">
                <span>Auditor in Charge</span>
                <span className="font-medium text-brand-teal">Zero automated sign-offs</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HumanReview;
