import React, { useState, useEffect } from 'react';
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
import SolutionsPage from './pages/SolutionsPage';
import ToolsPage from './pages/ToolsPage';
import AboutPage from './pages/AboutPage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedProductForDemo, setSelectedProductForDemo] = useState(
    'Financial Audit Automation'
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenDemoModal = React.useCallback((productName?: string) => {
    if (productName && typeof productName === 'string') {
      setSelectedProductForDemo(productName);
    }
    setIsDemoModalOpen(true);
  }, []);

  const handleCloseDemoModal = React.useCallback(() => {
    setIsDemoModalOpen(false);
  }, []);

  if (currentPath === '/solutions') {
    return <SolutionsPage />;
  }

  if (currentPath === '/tools') {
    return <ToolsPage />;
  }

  if (currentPath === '/about') {
    return <AboutPage />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-brand-offwhite">
      {/* 1. Navigation */}
      <Navbar onRequestDemo={handleOpenDemoModal} />

      <main className="flex-1">
        {/* 2. Hero with Rebuilt Realistic Dashboard Visual */}
        <Hero onRequestDemo={handleOpenDemoModal} />

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

        {/* 9. About Endloops */}
        <About onRequestDemo={handleOpenDemoModal} />

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
};

export default App;
