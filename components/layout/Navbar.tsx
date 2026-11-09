'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';

interface NavbarProps {
  onRequestDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Tools', href: '#tools' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'How It Works', href: '#workflow' },
    { name: 'Human Review', href: '#human-review' },
    { name: 'About', href: '#about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm border-b border-brand-border py-4 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Logo height={32} width={124} />
            </div>

            {/* Desktop Navigation - Clean typography without pill containers */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-brand-navy/70 hover:text-brand-navy transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="teal"
                size="sm"
                onClick={onRequestDemo}
                className="text-sm px-4 py-2 font-medium"
              >
                Request a Demo
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
              <Button
                variant="teal"
                size="sm"
                onClick={onRequestDemo}
                className="text-xs px-3 py-1.5"
              >
                Demo
              </Button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-brand-navy hover:text-brand-green focus:outline-none focus:ring-2 focus:ring-brand-teal rounded-lg"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-brand-navy/30 backdrop-blur-xs"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl p-6 flex flex-col justify-between border-l border-brand-border">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-brand-border">
                <Logo height={28} width={110} />
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-brand-navymuted hover:text-brand-navy rounded-lg"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2.5 text-base font-medium text-brand-navy hover:text-brand-green rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-brand-border">
              <Button
                variant="teal"
                className="w-full py-2.5 text-sm"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onRequestDemo();
                }}
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
