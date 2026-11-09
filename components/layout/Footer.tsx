import React from 'react';
import { MapPin } from 'lucide-react';
import Logo from '@/components/ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 border-t border-brand-navy/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white inline-block px-3 py-1.5 rounded-lg">
              <Logo height={30} width={115} />
            </div>
            <p className="text-body-sm text-slate-300 max-w-sm leading-relaxed">
              Automation software for financial professionals. The software prepares the work, and the professional reviews and decides.
            </p>
            <div className="pt-2 flex flex-col space-y-1.5 text-label text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="text-slate-400">
                Originated from Alkazim accounting and audit firm
              </div>
            </div>
          </div>

          {/* End-to-End Solutions */}
          <div>
            <h4 className="text-label font-semibold text-brand-teal mb-3.5">
              End-to-End Solutions
            </h4>
            <ul className="space-y-2 text-body-sm text-slate-300">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Financial audit
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Escrow audit
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Budget review
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Interim audit
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Property budget preparation
                </a>
              </li>
            </ul>
          </div>

          {/* Standalone Tools */}
          <div>
            <h4 className="text-label font-semibold text-brand-teal mb-3.5">
              Standalone Tools
            </h4>
            <ul className="space-y-2 text-body-sm text-slate-300">
              <li>
                <a href="#tools" className="hover:text-white transition-colors">
                  Purchase-order extraction
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-white transition-colors">
                  Vouching automation
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-white transition-colors">
                  Expense working automation
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-white transition-colors">
                  Financial report review
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-white transition-colors">
                  Tender verification
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-white transition-colors">
                  Reconciliation
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Core Approach */}
          <div>
            <h4 className="text-label font-semibold text-brand-teal mb-3.5">
              Our Approach
            </h4>
            <div className="space-y-3 text-body-sm text-slate-300 leading-relaxed">
              <p>
                <strong className="text-white font-semibold block mb-0.5">Software prepares. People decide.</strong>
                We take care of the repetitive tasks, and the final sign-off always stays with people.
              </p>
              <div className="pt-2 text-label text-slate-400">
                Built for accountants, auditors, finance teams, and property management companies in the GCC region and beyond.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-label text-slate-400">
          <p>
            © {new Date().getFullYear()} Endloops. Originated from Alkazim. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-slate-400">
            <span>Dubai, UAE</span>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
