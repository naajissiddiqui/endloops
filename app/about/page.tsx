'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import DemoModal from '@/components/ui/Modal';

export default function AboutPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-brand-offwhite">
      <Navbar onRequestDemo={() => setIsDemoModalOpen(true)} />

      <main className="flex-1 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-label text-brand-navymuted mb-6">
            <Link href="/" className="hover:text-brand-navy transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-navy font-semibold">About</span>
          </div>

          {/* Heading: H1 52px desktop / 36px mobile, weight 600, line-height 1.1, letter-spacing -0.035em */}
          <div className="max-w-3xl mb-10">
            <h1 className="text-h1 text-brand-navy">
              About Endloops
            </h1>
            <p className="mt-3 md:mt-4 text-body-lg text-brand-navymuted leading-relaxed max-w-2xl">
              Financial automation rooted in practical accounting and audit workflows.
            </p>
          </div>

          {/* Heritage & Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-h3 text-brand-navy">
                Who we are
              </h2>
              <p className="text-body text-brand-navymuted leading-relaxed">
                Endloops originated from the technology team of an established accounting and audit firm in Dubai. We build focused software that eliminates repetitive financial work for auditors, finance teams, and property management companies.
              </p>
              <p className="text-body text-brand-navymuted leading-relaxed">
                Our users handle detailed, time-sensitive financial operations where precision is critical. We build tools that are reliable, clear, and focused on practical utility.
              </p>

              <h2 className="text-h3 text-brand-navy pt-2">
                Our approach
              </h2>
              <p className="text-body text-brand-navymuted leading-relaxed">
                <strong className="text-brand-navy font-semibold">The software prepares the work, and the professional reviews and decides.</strong> Repetitive extraction, matching, and drafting are automated, while final sign-off always stays with people.
              </p>

              <div className="pt-2 flex items-center gap-2 text-label font-semibold text-brand-navy">
                <MapPin className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="bg-brand-navy text-white rounded-xl p-5 sm:p-6 space-y-2.5">
                <h4 className="text-h4 text-white">Our ambition</h4>
                <p className="text-body-sm text-slate-300 leading-relaxed">
                  To become the trusted automation partner for accounting, audit, and property finance teams across the GCC region and beyond.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 sm:p-6 border border-brand-border space-y-2.5">
                <h4 className="text-h4 text-brand-navy">Core principle</h4>
                <p className="text-body-sm text-brand-navymuted leading-relaxed">
                  The software takes care of data extraction, document matching, and draft preparation. Final approval strictly stays with qualified people.
                </p>
                <div className="pt-2">
                  <Button
                    variant="teal"
                    size="sm"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full"
                  >
                    Request a Demonstration
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        defaultProduct="Company & Platform Overview"
      />
    </div>
  );
}
