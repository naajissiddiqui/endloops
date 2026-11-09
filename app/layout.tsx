import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Endloops — Financial Automation for Financial Professionals',
  description:
    'Endloops automates financial workflows, document extraction, vouching, and working-paper preparation while keeping final sign-off with people.',
  keywords: [
    'Endloops',
    'financial automation',
    'audit software',
    'escrow audit Dubai',
    'vouching automation',
    'purchase order extraction',
    'accounting automation GCC',
    'working paper preparation',
  ],
  authors: [{ name: 'Endloops Technologies' }],
  icons: {
    icon: '/images/endloops-logo.png',
    apple: '/images/endloops-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-brand-offwhite text-brand-navy min-h-screen selection:bg-brand-teal selection:text-white">
        {children}
      </body>
    </html>
  );
}
