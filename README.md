# Endloops

> **Financial Automation Built for Precision. The Software Prepares. You Decide.**

A modern, high-performance website for **Endloops** — financial automation software designed for auditors, accountants, and property finance teams. Originated from an established accounting and audit firm in Dubai, Endloops eliminates repetitive financial work while keeping final sign-off authority strictly in human hands.

---

## Project Note — Endloops Website

I designed and developed a responsive landing page for Endloops, a financial automation company serving accountants, auditors and finance professionals. My goal was to create a digital experience that communicates the company's offerings clearly while establishing a premium, modern and trustworthy brand presence.

My most important design decision was to balance visual creativity with the credibility expected from a financial technology company. I chose a minimal, typography-led design using Manrope, a light colour palette built around Endloops' green and teal branding, and subtle interactive animations. I also focused on clearly distinguishing Endloops' end-to-end solutions from its standalone tools. Particular attention was given to communicating the relationship between automated processing and human oversight, ensuring that professional judgement and final approval remain central to the experience.

With more time, I would improve the interactive product demonstrations, introduce more detailed individual product pages, and further refine the mobile experience and animation performance.

For development, I used React, Tailwind CSS and Framer Motion, along with selected React Bits components for navigation, animations and interactions. I used Figma for design exploration and ChatGPT and Claude as AI-assisted tools for brainstorming, visual direction, code assistance and refinement. All major design and implementation decisions were reviewed and customised throughout development.

**Time invested:** Approximately 13–15 hours.

---

## Brand & Philosophy

Endloops operates on a singular foundational principle:
**The software prepares the work, and the professional reviews and decides.**

- **No Black Boxes**: Every extracted figure links directly back to its source document.
- **Exception-Driven Review**: Matching items flow directly into working papers; variances are surfaced for professional discretion.
- **Zero Automated Sign-offs**: Legal and statutory responsibility remains with certified practitioners.

---

## Tech Stack & Architecture

- **Core Framework**: React 18 + TypeScript + Vite 5
- **Styling**: Tailwind CSS 3 + Custom CSS Variables & Typography Utilities
- **Typography**: Manrope (Weights: 400, 500, 600, 700) with strict fluid hierarchy
- **Motion & Interaction**:
  - **Framer Motion**: Page animations, modals, and scroll triggers
  - **React Bits Componentry**:
    - `PillNav`: Floating glass navigation bar with centered layout and uncontained brand logo
    - `SpecularButton`: WebGL-powered rim specular lighting and mouse tracking for primary CTAs
    - `BlurText`: Word-by-word blur-in display typography entrance
    - `SpotlightCard`: Mouse-reactive radial glow cards for capabilities and tools
    - `Stepper`: Interactive 4-stage process stepper
    - `AnimatedList`: Live pipeline activity and status transitions
    - `Aurora`: Restrained ambient background lighting for the final CTA
  - **Custom Parallax Engine**: GPU-accelerated cursor-responsive wave ribbons (`requestAnimationFrame`, lerp easing, touch-detection, prefers-reduced-motion)
- **Icons**: Lucide React

---

## Page Structure & Sections

1. **Header & Navigation**: Standalone Endloops logo on the left blending into the canvas and centered floating `PillNav` glass navigation bar.
2. **Hero Section (90–100vh)**: Editorial, typography-led composition with fluid display typography, dual CTAs, and cursor-responsive ethereal aqua ribbons drifting with natural inverse parallax.
3. **Value Proposition & Interactive Workbench**: `CurtainReveal` showcase of an automated invoice-matching workbench (#INV-2025-084 vs PO-2025-0419) highlighting 2 matched items and 1 flagged freight discrepancy.
4. **Core Capabilities**: Interactive tabbed workbench covering Document Reading, Comparison & Matching, Variance & Discrepancy Detection, Working Paper Drafting, and Batch Ingestion.
5. **End-to-End Solutions**: Comprehensive turnkey systems (Financial Audit, Escrow Audit, Budget Review, Interim Audit, Property Budget Preparation).
6. **Standalone Tools**: 6 focused utilities (PO Extraction, Vouching Automation, Expense Schedules, Financial Report Review, Tender Verification, Reconciliation).
7. **How It Works**: 4-step workflow architecture featuring an interactive number stepper and animated status transition feed.
8. **Human Review**: Two-pillar architecture contrasting *What Endloops Prepares* (extraction, reconciliation, flagging) with *What You Decide* (audit trail, discretion, sign-off authority).
9. **About Endloops**: Minimal centered narrative detailing the company's origin in Dubai and operational philosophy.
10. **Interactive Demo Request Modal**: Fully validated demo booking modal with accessible keyboard navigation and clean confirmation state.

---

## Color Palette

| Token | Hex | Usage |
| :--- | :--- | :--- |
| **Navy** | `#142B45` | Primary text, display headings, dark cards |
| **Emerald** | `#079B78` | Primary brand accent, button base, gradients |
| **Teal** | `#20B99A` | Secondary accent, links, hover states, badges |
| **Off-White** | `#F6FAF9` | Primary section background, canvas substrate |
| **White** | `#FFFFFF` | Card backgrounds, elevated surfaces |
| **Border** | `#E8EFED` | Structural grid lines and subtle dividers |

---

## Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd endloops

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```
Starts the local development server at `http://localhost:5173`.

### Production Build

```bash
npm run build
```
Compiles TypeScript and bundles production-ready static assets into `dist/`.

### Preview Production Build

```bash
npm run preview
```
Serves the compiled production build locally for verification.

---

## Directory Structure

```text
├── components/
│   ├── animations/          # Parallax and scroll reveal wrappers
│   ├── layout/              # Navbar and Footer
│   ├── sections/            # Hero, ValueProp, Capabilities, Solutions, Tools, etc.
│   └── ui/                  # Button, Modal, SectionHeading, Logo
├── public/
│   ├── images/              # Optimized product illustrations and hero background
│   └── favicon*.png         # Standalone infinite-loop favicons
├── src/
│   ├── components/
│   │   ├── animations/      # EtherealRibbonsBackground engine
│   │   └── reactbits/       # PillNav, SpecularButton, BlurText, SpotlightCard, etc.
│   ├── index.css            # Tailwind layers, Manrope scale, and utility classes
│   └── main.tsx             # React DOM root mounting
├── index.html               # Application entry point & metadata
├── tailwind.config.ts       # Tailwind CSS theme configuration
├── tsconfig.json            # TypeScript compiler configuration
└── vite.config.ts           # Vite bundler configuration
```
