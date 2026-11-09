'use client';

import React from 'react';
import PillNav, { type PillNavItem } from '@/src/components/reactbits/PillNav';

interface NavbarProps {
  onRequestDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = React.memo(({ onRequestDemo }) => {
  const navItems: PillNavItem[] = [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Tools', href: '#tools' },
    { label: 'How It Works', href: '#workflow' },
    { label: 'Human Oversight', href: '#human-review' },
    { label: 'About', href: '#about' }
  ];

  const handleItemClick = (
    item: PillNavItem,
    _index: number,
    event: React.MouseEvent<HTMLElement>
  ) => {
    if (!item.href) return;
    
    // If on a subpage and clicking an anchor link, navigate to home anchor
    if (window.location.pathname !== '/' && item.href.startsWith('#')) {
      event.preventDefault();
      window.location.href = '/' + item.href;
      return;
    }

    // Smooth scroll if anchor on current page
    if (item.href.startsWith('#')) {
      event.preventDefault();
      const target = document.querySelector(item.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 pointer-events-none px-4 sm:px-6 lg:px-8 overflow-x-clip">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="pointer-events-auto flex items-center flex-1 justify-start">
          <a
            href="/"
            className="inline-flex items-center select-none py-1 transition-opacity hover:opacity-85 focus:outline-none"
            aria-label="Endloops Home"
          >
            <img
              src="/images/endloops-logo.png"
              alt="Endloops"
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </a>
        </div>

        <div className="pointer-events-auto hidden md:flex items-center justify-center flex-none">
          <PillNav
            items={navItems}
            itemStyle="pill"
            hoverEffect="fill"
            indicator="dot"
            surface="glass"
            size="md"
            collapse="never"
            intro={true}
            theme="light"
            highlightColor="#079B78"
            highlightTextColor="#ffffff"
            textColor="#142B45"
            onItemClick={handleItemClick}
          />
        </div>

        <div className="pointer-events-auto flex items-center flex-1 justify-end">
          <div className="md:hidden">
            <PillNav
              items={navItems}
              itemStyle="pill"
              hoverEffect="fill"
              indicator="dot"
              surface="glass"
              size="md"
              collapse="always"
              intro={false}
              theme="light"
              highlightColor="#079B78"
              highlightTextColor="#ffffff"
              textColor="#142B45"
              onItemClick={handleItemClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
