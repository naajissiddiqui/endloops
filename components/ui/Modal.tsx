'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Building, Mail, User } from 'lucide-react';
import Button from './Button';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  defaultProduct = 'Financial Audit Automation',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Audit Partner / Manager',
    product: defaultProduct,
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (defaultProduct) {
      setFormData((prev) => ({ ...prev, product: defaultProduct }));
    }
  }, [defaultProduct]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      role: 'Audit Partner / Manager',
      product: defaultProduct,
      notes: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-navy/45 backdrop-blur-sm will-change-[opacity]"
            aria-hidden="true"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-brand-border p-6 sm:p-8 z-10 my-8 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-brand-navymuted hover:text-brand-navy hover:bg-brand-offwhite transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="py-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-h3 text-brand-navy">Request Received</h3>
                  <p className="text-body-sm text-brand-navymuted mt-1.5 max-w-xs mx-auto">
                    Thank you{formData.name ? `, ${formData.name}` : ''}. We'll be in touch shortly.
                  </p>
                </div>

                <div className="pt-2">
                  <Button variant="primary" size="md" onClick={handleReset} className="w-full">
                    Done
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h3 id="modal-title" className="text-h3 text-brand-navy">
                    Request an Endloops Demo
                  </h3>
                  <p className="text-body-sm text-brand-navymuted mt-1">
                    See how Endloops prepares audit schedules and financial verifications for your team.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-label font-medium text-brand-navy mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-navymuted">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Al-Hashimi"
                        className={`w-full pl-9 pr-3.5 py-2 text-body rounded-lg border bg-brand-offwhite/50 text-brand-navy placeholder:text-brand-navymuted/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all ${
                          errors.name ? 'border-red-400 focus:ring-red-400' : 'border-brand-border'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-label text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-label font-medium text-brand-navy mb-1">
                        Work Email *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-navymuted">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@firm.ae"
                          className={`w-full pl-9 pr-3.5 py-2 text-body rounded-lg border bg-brand-offwhite/50 text-brand-navy placeholder:text-brand-navymuted/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all ${
                            errors.email ? 'border-red-400 focus:ring-red-400' : 'border-brand-border'
                          }`}
                        />
                      </div>
                      {errors.email && <p className="text-label text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-label font-medium text-brand-navy mb-1">
                        Company / Firm *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-navymuted">
                          <Building className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Al Mazrouei Audit"
                          className={`w-full pl-9 pr-3.5 py-2 text-body rounded-lg border bg-brand-offwhite/50 text-brand-navy placeholder:text-brand-navymuted/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all ${
                            errors.company ? 'border-red-400 focus:ring-red-400' : 'border-brand-border'
                          }`}
                        />
                      </div>
                      {errors.company && <p className="text-label text-red-500 mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-label font-medium text-brand-navy mb-1">
                        Your Role
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3 py-2 text-body rounded-lg border border-brand-border bg-brand-offwhite/50 text-brand-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal"
                      >
                        <option value="Audit Partner / Manager">Audit Partner / Manager</option>
                        <option value="Senior Auditor / Senior Accountant">Senior Auditor / Accountant</option>
                        <option value="Chief Financial Officer (CFO)">Chief Financial Officer (CFO)</option>
                        <option value="Finance Controller">Finance Controller</option>
                        <option value="Property Management Finance">Property Management Finance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-label font-medium text-brand-navy mb-1">
                        Primary Interest
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-3 py-2 text-body rounded-lg border border-brand-border bg-brand-offwhite/50 text-brand-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal"
                      >
                        <option value="Financial Audit Automation">End-to-End: Financial Audit</option>
                        <option value="Escrow Account Audit">End-to-End: Escrow Audit</option>
                        <option value="Budget Review & Property Mgmt">End-to-End: Property Budgets</option>
                        <option value="Vouching & PO Extraction">Standalone: Vouching &amp; Extraction</option>
                        <option value="Reconciliation & Reporting">Standalone: Reconciliations</option>
                        <option value="Entire Endloops Suite">Entire Platform Evaluation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-label font-medium text-brand-navy mb-1">
                      Notes or Specific Requirements (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us about your document volume or current workflow..."
                      className="w-full px-3 py-2 text-body rounded-lg border border-brand-border bg-brand-offwhite/50 text-brand-navy placeholder:text-brand-navymuted/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="teal"
                      size="md"
                      isLoading={isSubmitting}
                      className="w-full py-2.5"
                    >
                      Request Guided Demo
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;
