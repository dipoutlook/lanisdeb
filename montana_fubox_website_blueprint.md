**Montana Fubox Group — Complete Website Development Blueprint**

---

# Task 1 — Business & Model Analysis

## Parent Company: Montana Fubox
- Multi-venture parent-owned group.
- Acts as credibility anchor.
- Sub-businesses drive conversions.

## Sub-Business Overview
- Writing / Content Services: trust-driven, portfolio-focused.
- Connectivity / Tech Services: urgency-driven, logistics-focused.
- Shared traits: single owner, service-based, clarity prioritized.

## Audience Segmentation
- Direct service seekers: land on sub-brand.
- Exploratory visitors: discover parent brand, then sub-brand.

## Shared vs Unique Needs
- Shared: trust signals, clear messaging, simple navigation, SEO-friendly.
- Unique: Writing = portfolio; Connectivity = coverage & speed.

---

# Task 2 — Architecture Decision

## Chosen Architecture
- Unified parent site with modular sub-brands.
- Example structure:
  - montanafubox.com/
    - /writing/
    - /connect/

## Justification
- Maintains trust under one domain.
- Allows independent sub-brand conversion.
- Scalable for future businesses.

## Structural Principles
1. Parent = gateway, not competitor.
2. Sub-brands behave like independent sites.
3. Navigation clarity mandatory.
4. Scalability for new ventures.

---

# Task 3 — Brand Architecture & Identity System

## Brand Model
- Masterbrand with endorsed sub-brands.
- Formula: Montana Fubox → powers → Specialized Businesses.

## Brand Hierarchy
- Level 1: Montana Fubox (credibility, discovery, expansion).
- Level 2: Sub-brands (Montana Writing Hub, Montana Connect, etc.)

## Naming & Presentation Rules
- Sub-brand pattern: Montana [Descriptor].
- Visual endorsement: "A Montana Fubox Company".
- Shared: typography, grid, tone.
- Unique: colors, icons, imagery, messaging.

## User Orientation
- Users always know sub-brand and parent brand.
- Clear headers, hero messaging, consistent but subtle parent references.

---

# Task 4 — Information Architecture & Navigation

## Core Principle
- Support direct entry and exploratory entry.

## Global Navigation
- Logo/Home (Montana Fubox)
- Businesses (list of sub-brands)
- About
- Contact

## Sub-Brand Navigation
- Sub-brand name dominant
- Accent color switches per sub-brand
- Conversion-focused local navigation optional

## Parent Brand Pages
- Explain group
- Introduce businesses
- Route users to sub-brands

## Sub-Brand Pages
- Focused conversion, independent logic
- No cross-selling confusion

## User Journeys
- Service Seeker, Explorer, Cross-Discovery

## Footer Architecture
- Parent overview, sub-businesses, contact, legal

## Scalability Rule
- Adding new business = add menu item + sub-brand module only

---

# Task 5 — Homepage Strategy & Messaging

## Purpose
- Communicate parent identity
- Route users to correct sub-brand
- Not a sales or service page

## Messaging Hierarchy
1. What is Montana Fubox?
2. Solutions offered (sub-businesses)
3. Which business fits?
4. Why trust?

## Content Strategy
- Above-the-fold clarity
- Sub-brand introduction blocks
- Credibility layer (ownership, professionalism)

## Conversion Philosophy
- Homepage = click-throughs to sub-brands only
- No direct conversions

## Voice & Tone
- Clear, professional, confident, neutral

## Visual & UX Logic
- Distinct sub-brand blocks
- Scannable and intentional

---

# Task 6 — Sub-Brand Experience Design & Conversion Flows

## Core Principle
- Sub-brands feel like independent businesses
- Parent brand supports trust only

## Universal Rules
1. Open with clarity
2. One dominant conversion path
3. Build trust before action
4. Minimize friction

## Sub-Brand A — Writing Services
- Authority and competence focus
- Conversion: inquiry / consultation
- Key UX: portfolio, process clarity

## Sub-Brand B — Connectivity Services
- Speed and reliability focus
- Conversion: contact / service request
- Key UX: immediate contact, coverage clarity

## Cross-Discovery Rules
- Other sub-brands visible via global navigation / footer only

## Parent Presence
- Subtle endorsement only
- Never compete with conversion

---

# Task 7 — Feature & Integration Mapping

## Feature Philosophy
- Must support conversion, reduce friction, increase trust, or improve operations
- No unnecessary features

## Parent Brand Features
- Business directory, global contact, about/credibility
- Exclude bookings, sales forms

## Sub-Brand Features
- Writing: service modules, inquiry forms, portfolio, process overview
- Connectivity: contact options, availability checker, process transparency
- Shared: CMS, analytics, SEO management, form handling, error monitoring

## Scalability Rule
- New sub-brand uses existing modules and systems

## Feature Governance
- New features require conversion justification and operational review

---

# Task 8 — Tech Stack Recommendation & Architecture

## Architectural Goals
- Support parent + modular sub-brands
- Scalable, SEO-friendly, performant, maintainable

## Frontend
- Next.js (App Router)
- Component-based, shared base components

## Backend & Data
- Headless CMS (Sanity / Contentful / Strapi)
- Forms via server-side handling, CRM integration

## Styling & Theming
- Global design tokens, sub-brand theme overrides

## Analytics & Monitoring
- GA4, conversion events per sub-brand, error tracking (Sentry)

## Performance & SEO
- SSR, metadata per sub-brand, structured data, lazy loading

## Hosting & Deployment
- Vercel recommended

## Security
- HTTPS, server-side validation, spam protection, env variable management

## Excluded
- No microservices, heavy backend frameworks, custom auth

---

# Task 9 — SEO, Performance & Accessibility Strategy

## SEO
- Single domain, sub-brand paths
- Keywords segmented per sub-brand
- On-page SEO rules: unique titles, metadata, H1 hierarchy, alt text
- Structured data: organization + service schema

## Performance
- Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1
- Techniques: SSR, image optimization, lazy loading, code splitting, CDN

## Accessibility (WCAG 2.1 AA)
- Semantic HTML, labels, keyboard nav, focus states, color contrast, screen-reader friendly

## Measurement & Enforcement
- Lighthouse, Google Search Console, monthly performance review, quarterly accessibility audit

---

# Task 10 — Deployment & Growth Roadmap

## Deployment Philosophy
- CI/CD mandatory, staging & production environments
- Version control: Git repository, branching strategy

## Pre-Launch Checklist
- Content verification, forms tested, analytics configured, SEO & accessibility checks, performance targets met

## Post-Launch Monitoring
- Uptime, Core Web Vitals, conversion tracking, error monitoring

## Growth & Expansion
- Adding new sub-brands using modular template
- Parent brand updates for credibility
- Controlled feature additions

## Operational Handoff
- Documentation for developers & CMS admins
- Monitoring dashboards for analytics & uptime

## Success Criteria
- Parent communicates identity, sub-brands convert, site fast/SEO-ready/accessibile, seamless new business addition

---

**End of Montana Fubox Group Website Development Blueprint**

