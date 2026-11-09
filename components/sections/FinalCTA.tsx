'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';

interface FinalCTAProps {
  onRequestDemo: (productName?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRequestDemo }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please provide a valid work email address');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Ready to eliminate repetitive financial work?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Whether you need a complete software suite for statutory audit or a focused tool for purchase-order extraction, Endloops handles the repetitive work so your team can focus on review and decision-making.
          </p>

          <div className="pt-2 max-w-md mx-auto">
            {submitted ? (
              <div className="p-4 rounded-xl bg-white/10 border border-white/20 text-left text-xs text-slate-200">
                <span className="font-semibold text-brand-teal block mb-1">
                  Demonstration Request Recorded
                </span>
                Thank you for your interest. We have recorded your simulated inquiry for <span className="text-white font-mono">{email}</span> in this frontend demonstration.
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter your corporate email"
                    className="flex-1 px-4 py-2.5 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white/15 transition-colors"
                  />
                  <Button
                    type="submit"
                    variant="teal"
                    className="whitespace-nowrap px-5 py-2.5 text-sm font-medium"
                  >
                    Request Demo
                  </Button>
                </div>
                {error && <p className="text-xs text-red-400 text-left">{error}</p>}
              </form>
            )}
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <span>Accounting &amp; audit firms</span>
            <span>•</span>
            <span>Corporate finance teams</span>
            <span>•</span>
            <span>Property management companies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
