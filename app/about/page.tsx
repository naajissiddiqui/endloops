'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import DemoModal from '@/components/ui/Modal';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function AboutPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-brand-offwhite">
      <Navbar onRequestDemo={() => setIsDemoModalOpen(true)} />

      <main className="flex-1 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-brand-navymuted mb-6">
            <Link href="/" className="hover:text-brand-navy transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-navy font-medium">About</span>
          </div>

          {/* Heading */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-brand-navy leading-[1.12]">
              About Endloops
            </h1>
            <p className="mt-4 text-base sm:text-lg text-brand-navymuted leading-relaxed">
              Originated from the technology department of an accounting and audit firm in Dubai, built for financial professionals across the GCC region and beyond.
            </p>
          </div>

          {/* Heritage & Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-brand-navymuted leading-relaxed">
              <h2 className="text-2xl font-bold text-brand-navy">
                Who we are
              </h2>
              <p>
                <strong className="text-brand-navy">Alkazim</strong> is an accounting and audit firm based in Dubai. Over the years, its technology department built software that automates financial work. That department is now <strong className="text-brand-navy">Endloops</strong>, a company that builds automation for Financial Professionals.
              </p>
              <p>
                Our users are accountants, auditors, finance teams, and property management companies. Their work is detailed and time-sensitive, and they rely on tools they can trust. For them, reliability and clarity matter as much as appearance.
              </p>

              <h3 className="text-xl font-bold text-brand-navy pt-2">
                The need we address
              </h3>
              <p>
                Much of a finance professional&apos;s day goes into tasks that software can handle. This work is repetitive and time-consuming, leaves room for error, and takes attention away from judgement and from clients.
              </p>
              <p>
                Our approach is simple: <strong className="text-brand-navy">the software prepares the work, and the professional reviews and decides.</strong> We take care of the repetitive tasks, and the final sign-off always stays with people.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-brand-navy">
                <MapPin className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-brand-navy text-white rounded-2xl p-6 sm:p-7 space-y-3">
                <h3 className="text-lg font-bold">Where we are heading</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Endloops is a young company with a clear ambition: to become the trusted automation partner for accounting, audit and property finance teams in the GCC region and beyond. We are growing our engineering, design and quality capabilities to get there.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-brand-border space-y-3">
                <h4 className="text-sm font-bold text-brand-navy">Our core principle</h4>
                <p className="text-xs text-brand-navymuted leading-relaxed">
                  The software takes care of data extraction, document matching, and draft preparation. The final review and sign-off authority strictly stays with qualified people.
                </p>
                <div className="pt-2">
                  <Button
                    variant="teal"
                    size="sm"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full text-xs"
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
