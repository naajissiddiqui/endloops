# Endloops — Design System & Engineering Specification
> Financial Automation for Financial Professionals
> Originated from Alkazim, Dubai. Built with editorial clarity, purposeful motion, and human-in-the-loop oversight.

---

## 1. Executive Summary & Business Understanding

### 1.1 Company Origins & Heritage
Endloops emerged from the technology department of **Alkazim**, an established accounting and audit firm based in Dubai, United Arab Emirates. Over years of handling financial audits, escrow accounts, and property management accounting, the department built software to automate repetitive tasks. That technology department is now **Endloops**, a company dedicated to building automation for Financial Professionals.

### 1.2 Target Audience
- **Accountants & Corporate Finance Teams**: Financial controllers and accountants handling high-volume invoice processing, purchase-order matching, expense schedules, and ledger reconciliations.
- **Auditors & Audit Practices**: Certified audit practitioners performing statutory audits, interim testing, and escrow audits requiring clear documentation trails and working-paper preparation.
- **Property Management Companies**: Property finance controllers and community management firms preparing multi-unit service-charge budgets, maintenance cost schedules, and reserve fund allocations.

### 1.3 Core Product Philosophy: Human in the Loop
> *"The software prepares the work, and the professional reviews and decides. We take care of the repetitive tasks, and the final sign-off always stays with people."*

Endloops is designed to eliminate the mechanical drudgery of document review—extracting figures, cross-matching invoices with purchase orders, and flagging discrepancies—while keeping final review and approval strictly with qualified practitioners.

### 1.4 Product Categories
1. **End-to-End Solutions**: Complete software that runs an entire process or financial service from start to finish:
   - *Financial audit*: Automated voucher sampling, ledger reconciliation, and working-paper compilation.
   - *Escrow audit*: Compliance verification for real estate development funds and client trust accounts.
   - *Budget review*: Multi-department budget verification against historical expenditure trends.
   - *Interim audit*: Mid-year transaction testing and analytical review procedures.
   - *Budget preparation for property management companies*: Service-charge modeling, utility apportionments, and reserve fund schedules.

2. **Standalone Tools**: Focused tools that solve one specific need and can be used independently or integrated into existing accounting stacks:
   - *Purchase-order extraction*: Line-item extraction from POs mapped to supplier records.
   - *Vouching automation*: Automated verification of ledger transactions against source documentation.
   - *Expense working automation*: Categorization of expense vouchers with tax computations.
   - *Financial report review*: Mathematical proofing, note-to-statement consistency, and disclosure checks (in development).
   - *Tender verification*: Line-by-line comparative quote matrix for procurement evaluation.
   - *Reconciliation*: Matching engine for bank feeds, payment gateways, and ledger accounts (in development).

### 1.5 Technology Capabilities
- **Read documents**: Extract figures and details from invoices, purchase orders, contracts, and statements.
- **Compare and match**: Check documents against ledgers, or compare quotes against each other.
- **Check against rules**: Flag missing items, mismatched totals, duplicates, and anything outside agreed limits.
- **Prepare drafts**: Produce schedules, working papers, and reports ready for review.
- **Handle bulk work**: Process batches of hundreds of documents at once.

---

## 2. Brand Identity & Minimalist Visual Direction

### 2.1 Aesthetic Principles: Editorial SaaS Precision
- **Restraint & Whitespace**: Generous breathing room between sections (80px–112px). Let typography and layout structure the hierarchy rather than relying on endless card containers or pill chips.
- **Authentic Product Visuals**: Clean, realistic UI components built directly in React and CSS—showing actual invoices, extracted line items, purchase-order comparisons, and highlighted variances.
- **Typography-Driven Layouts**: Clean headings with natural letterforms and balanced leading. No decorative pill badges above headings.
- **No Gimmicks**: No artificial glowing orbs, exaggerated 3D ribbons, or simulated screenshots with illegible text.

### 2.2 Color System

| Color | Hex | Semantic Role |
|---|---|---|
| **White** | `#FFFFFF` | Primary card surfaces, elevated containers, input backgrounds |
| **Off-white** | `#F6FAF9` | Page background, alternating neutral canvas bands |
| **Green** | `#079B78` | Primary brand anchor, affirmative status indicators, accents |
| **Teal** | `#20B99A` | Secondary brand anchor, primary action button fill, hover states |
| **Navy** | `#142B45` | Primary typography, dark structural cards, high-contrast headings |
| **Blue** | `#3679CE` | Supporting accent for technical metadata and secondary references |
| **Purple** | `#8067D9` | Supporting accent for in-development tool indicators |
| **Mint** | `#E5F6F0` | Subtle background tint for success states and active elements |
| **Lavender** | `#F0EEFF` | Subtle background tint for secondary tags |
| **Border** | `#E8EFED` | Structural hairline dividers and card outlines |

### 2.3 Typography System: Manrope
Endloops enforces a rigorous, consistent typography system using **Manrope** across the entire website. Weights 400, 500, 600, and 700 are used exclusively where specified.

#### Desktop Scale (>= 768px):
- **Hero / Display**: 64px, weight 600, line-height 1.08, letter-spacing -0.04em (`text-display`)
- **H1**: 52px, weight 600, line-height 1.1, letter-spacing -0.035em (`text-h1`)
- **H2**: 42px, weight 600, line-height 1.15, letter-spacing -0.03em (`text-h2`)
- **H3**: 28px, weight 600, line-height 1.25, letter-spacing -0.02em (`text-h3`)
- **H4 / Card headings**: 21px, weight 600, line-height 1.3 (`text-h4`)
- **Large body**: 18px, weight 400, line-height 1.65 (`text-body-lg`)
- **Normal body**: 16px, weight 400, line-height 1.6 (`text-body-base`)
- **Small body**: 14px, weight 400, line-height 1.5 (`text-body-sm`)
- **Labels and metadata**: 12px, weight 500, line-height 1.4 (`text-label`)
- **Buttons**: 15px, weight 500 (`text-btn`)

#### Mobile Scale (<= 767px):
- **Hero**: 40px, weight 600, line-height 1.08, letter-spacing -0.04em
- **H1**: 36px, weight 600, line-height 1.1, letter-spacing -0.035em
- **H2**: 30px, weight 600, line-height 1.15, letter-spacing -0.03em
- **H3**: 24px, weight 600, line-height 1.25, letter-spacing -0.02em
- **H4**: 19px, weight 600, line-height 1.3
- **Large body**: 16px, weight 400, line-height 1.65
- **Normal body**: 15px, weight 400, line-height 1.6
- **Small text**: 13px, weight 400, line-height 1.5
- **Labels**: 11px, weight 500, line-height 1.4
- **Buttons**: 15px, weight 500

#### Fluid Typography Formula:
Responsive scaling is implemented using CSS `clamp()` functions with linear interpolation between mobile (390px) and desktop (1280px) breakpoints, ensuring harmonious typography on all intermediate screens. Negative letter spacing is maintained on large display headings, uppercase decorative treatments are avoided, and line lengths are strictly controlled (`max-w-xl` to `max-w-2xl`).

---

## 3. Hero Composition & Rebuilt Product Visual

### 3.1 Hero Composition
- **Headline**: *"Financial Automation Built for Precision. The Software Prepares. You Decide."*
- **Supporting Copy**: Concise explanation of automated document processing and human sign-off.
- **Dual CTAs**: "Request a Demo" (Primary Teal) + "Explore Solutions & Tools" (Secondary White/Border).
- **Core Principles**:
  - Document extraction and review
  - Automated matching and validation
  - Human-controlled final approval

### 3.2 Realistic Product Preview (`HeroProductVisual.tsx`)
A realistic application interface built using pure HTML, CSS, and React:
- **Left Column**: Tax Invoice preview (`#INV-2025-084`, Date: 12 Mar 2025, Al Noor Office Supplies LLC) with realistic line items (Storage Binders, Laser Toner, Freight), subtotal, VAT (5%), and total.
- **Right Column**: Purchase-order comparison against `PO-2025-0419` with matched line items, an explicitly highlighted freight discrepancy (`+AED 250.00 Variance`), and a `Review Pending` status requiring auditor confirmation.

---

## 4. Animation Architecture

### 4.1 Curtain-Style Scroll Reveal (`CurtainReveal.tsx`)
- **Initial State**: Sits translated down (`translateY(40px)`), scaled slightly up (`scale(1.08)`), with an active inset clipping mask (`inset(15% 0% 0% 0% round 16px)`).
- **Scroll Progression**: As the user scrolls into view, the clipping mask unfolds smoothly from 15% to 0%, scale contracts from 1.08 to 1.00, and vertical translation docks to 0px.
- **Applied To**: Major section visual showcases (`financial-audit.png`, `document-processing.png`, `workflow-illustration.png`).
- **Reduced Motion**: Gracefully disables movement and mask transforms when `prefers-reduced-motion` is detected.

---

## 5. Landing Page Structure (11 Cohesive Sections)

1. **Navigation**: Clean typography links, logo, and "Request a Demo" button.
2. **Hero**: Headline, supporting copy, dual CTAs, three trust items, and rebuilt realistic product visual.
3. **Value Proposition**: "The software prepares the work. The professional decides." (Automated processing vs Human oversight).
4. **Core Capabilities**: Five foundational tasks (Read Documents, Compare & Match, Check Against Rules, Prepare Drafts, Handle Bulk Work) with illustrative data preview.
5. **End-to-End Solutions**: Complete software suites (Financial audit, Escrow audit, Budget review, Interim audit, Property budget prep).
6. **Standalone Tools**: Focused modular tools (PO extraction, Vouching, Expense working, Financial report review, Tender verification, Reconciliation).
7. **How the Technology Works**: 4-stage pipeline (Upload → Process → Drafts → Review).
8. **Human Review & Final Approval**: Governance, exception resolution, and human sign-off authority.
9. **About Endloops**: Alkazim origins in Dubai, target audience, and GCC vision.
10. **Final CTA**: Minimal conversion block with validated demo request form.
11. **Footer**: Clean sitemap, Dubai location, Alkazim heritage, and legal notice.
