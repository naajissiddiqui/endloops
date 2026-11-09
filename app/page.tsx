'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ValueProp from '@/components/sections/ValueProp';
import Capabilities from '@/components/sections/Capabilities';
import Solutions from '@/components/sections/Solutions';
import Tools from '@/components/sections/Tools';
import Workflow from '@/components/sections/Workflow';
import HumanReview from '@/components/sections/HumanReview';
import About from '@/components/sections/About';
import FinalCTA from '@/components/sections/FinalCTA';
import DemoModal from '@/components/ui/Modal';

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedProductForDemo, setSelectedProductForDemo] = useState(
    'Financial Audit Automation'
  );

  const handleOpenDemoModal = (productName?: string) => {
    if (productName) {
      setSelectedProductForDemo(productName);
    }
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-offwhite">
      {/* 1. Navigation */}
      <Navbar onRequestDemo={() => handleOpenDemoModal()} />

      <main className="flex-1">
        {/* 2. Hero with Rebuilt Realistic Dashboard Visual */}
        <Hero onRequestDemo={() => handleOpenDemoModal()} />

        {/* 3. Value Proposition / The Endloops Principle */}
        <ValueProp />

        {/* 4. Core Capabilities */}
        <Capabilities />

        {/* 5. End-to-End Solutions */}
        <Solutions onRequestDemo={handleOpenDemoModal} />

        {/* 6. Standalone Tools */}
        <Tools onRequestDemo={handleOpenDemoModal} />

        {/* 7. How the Technology Works */}
        <Workflow />

        {/* 8. Human Review and Final Approval */}
        <HumanReview />

        {/* 9. About Endloops (Origins & Alkazim) */}
        <About onRequestDemo={() => handleOpenDemoModal()} />

        {/* 10. Final Call to Action */}
        <FinalCTA onRequestDemo={handleOpenDemoModal} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Demonstration / Inquiry Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
        defaultProduct={selectedProductForDemo}
      />
    </div>
  );
}
