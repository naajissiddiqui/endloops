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
    <section className="py-16 md:py-20 bg-brand-navy text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        {/* H2 Heading: 42px desktop / 30px mobile, weight 600, line-height 1.15, letter-spacing -0.03em */}
        <h2 className="text-h2 text-white">
          Ready to eliminate repetitive financial work?
        </h2>

        {/* Large Body: 18px desktop / 16px mobile, weight 400, line-height 1.65 */}
        <p className="text-body-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
          The software prepares the work. You decide. Request a demonstration to see how Endloops streamlines your workflow.
        </p>

        <div className="pt-2 max-w-md mx-auto">
          {submitted ? (
            <div className="p-3.5 rounded-lg bg-white/10 border border-white/20 text-left text-body-sm text-slate-200">
              <span className="font-semibold text-brand-teal block mb-0.5">
                Demonstration Request Recorded
              </span>
              Inquiry recorded for <span className="text-white font-mono">{email}</span> in this preview build.
            </div>
          ) : (
            <form onSubmit={handleQuickSubmit} className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your corporate email"
                  className="flex-1 px-3.5 py-2.5 rounded-lg text-body bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-teal transition-colors"
                />
                <Button
                  type="submit"
                  variant="teal"
                  size="md"
                  className="w-full sm:w-auto whitespace-nowrap px-5 py-2.5"
                >
                  Request Demo
                </Button>
              </div>
              {error && <p className="text-label text-red-400 text-left">{error}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
