# IFC INSTITUTIONAL WEBSITE - AI DEVELOPMENT MASTER PROMPT

## SYSTEM INSTRUCTION FOR AI MODEL

You are tasked with building a professional, multi-page institutional website for the International Finance Corporation (IFC). Follow this development task list precisely to recreate the exact design, functionality, and code structure.

---

## PROJECT OVERVIEW

**Type:** Corporate Institutional Website  
**Purpose:** Professional development finance organization public-facing website  
**Tone:** Authoritative, trustworthy, government-facing, corporate  
**Pages:** 6 main pages (Home, About, Services, Eligibility, News, Contact)

### Technology Stack
- **Framework:** React 18+ with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 3.x
- **Animations:** Framer Motion
- **Routing:** React Router DOM v6
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

---

## PHASE 1: PROJECT SETUP & CONFIGURATION

### Task 1.1: Initialize Project
```bash
npm create vite@latest ifc-website -- --template react-ts
cd ifc-website
npm install
```

### Task 1.2: Install Dependencies
```bash
npm install react-router-dom framer-motion lucide-react
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-slot @radix-ui/react-label @radix-ui/react-toast
```

### Task 1.3: Configure Tailwind CSS

**File: `tailwind.config.ts`**
```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        navy: {
          deep: "hsl(var(--navy-deep))",
          medium: "hsl(var(--navy-medium))",
          light: "hsl(var(--navy-light))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          light: "hsl(var(--gold-light))",
        },
        slate: {
          warm: "hsl(var(--slate-warm))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

---

## PHASE 2: DESIGN SYSTEM SETUP

### Task 2.1: Define CSS Variables & Global Styles

**File: `src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

@layer base {
  :root {
    /* Primary Navy Palette */
    --primary: 213 58% 17%;
    --primary-foreground: 0 0% 100%;
    
    /* Background & Surface */
    --background: 0 0% 100%;
    --foreground: 213 40% 15%;
    
    --card: 210 20% 98%;
    --card-foreground: 213 40% 15%;
    
    --popover: 0 0% 100%;
    --popover-foreground: 213 40% 15%;
    
    /* Secondary - Slate */
    --secondary: 210 14% 95%;
    --secondary-foreground: 213 40% 20%;
    
    /* Muted */
    --muted: 210 14% 96%;
    --muted-foreground: 215 16% 47%;
    
    /* Accent - Gold */
    --accent: 43 74% 49%;
    --accent-foreground: 213 58% 12%;
    
    /* Destructive */
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    
    /* Borders & Inputs */
    --border: 214 20% 88%;
    --input: 214 20% 88%;
    --ring: 213 58% 17%;
    
    --radius: 0.5rem;
    
    /* Custom tokens */
    --navy-deep: 213 58% 12%;
    --navy-medium: 213 50% 25%;
    --navy-light: 213 40% 35%;
    --gold: 43 74% 49%;
    --gold-light: 43 74% 60%;
    --slate-warm: 210 14% 97%;
    
    /* Gradients */
    --gradient-navy: linear-gradient(135deg, hsl(213 58% 12%) 0%, hsl(213 50% 22%) 100%);
    --gradient-hero: linear-gradient(180deg, hsl(213 58% 12% / 0.95) 0%, hsl(213 50% 18% / 0.98) 100%);
    --gradient-gold: linear-gradient(135deg, hsl(43 74% 49%) 0%, hsl(43 74% 55%) 100%);
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 hsl(213 58% 12% / 0.05);
    --shadow-md: 0 4px 6px -1px hsl(213 58% 12% / 0.08), 0 2px 4px -2px hsl(213 58% 12% / 0.05);
    --shadow-lg: 0 10px 15px -3px hsl(213 58% 12% / 0.1), 0 4px 6px -4px hsl(213 58% 12% / 0.05);
    --shadow-card: 0 4px 20px -2px hsl(213 58% 12% / 0.08);
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-sans antialiased;
    font-family: 'Inter', system-ui, sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Playfair Display', Georgia, serif;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  
  .gradient-navy {
    background: var(--gradient-navy);
  }
  
  .gradient-hero {
    background: var(--gradient-hero);
  }
  
  .gradient-gold {
    background: var(--gradient-gold);
  }
  
  .shadow-card {
    box-shadow: var(--shadow-card);
  }
}

@layer components {
  .section-header {
    @apply text-3xl md:text-4xl font-semibold text-primary mb-4 pb-4 border-b border-border;
  }
  
  .section-subheader {
    @apply text-lg text-muted-foreground font-light max-w-2xl;
  }
  
  .container-section {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24;
  }
}

/* Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}

.animation-delay-100 { animation-delay: 100ms; }
.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-300 { animation-delay: 300ms; }
.animation-delay-400 { animation-delay: 400ms; }
```

---

## PHASE 3: COLOR PALETTE REFERENCE

### Primary Colors (Navy)
| Token | HSL Value | Hex Equivalent | Usage |
|-------|-----------|----------------|-------|
| `--primary` | 213 58% 17% | #17345A | Primary navy, headers, hero backgrounds |
| `--navy-deep` | 213 58% 12% | #0F2A47 | Darkest navy for footer |
| `--navy-medium` | 213 50% 25% | #1E4066 | Medium navy accents |
| `--navy-light` | 213 40% 35% | #3A5A7C | Lighter navy for hover states |

### Accent Colors (Gold)
| Token | HSL Value | Hex Equivalent | Usage |
|-------|-----------|----------------|-------|
| `--accent` | 43 74% 49% | #D4A024 | Primary gold, CTAs, highlights |
| `--gold-light` | 43 74% 60% | #E0B84A | Hover states for gold elements |

### Neutral Colors
| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--background` | 0 0% 100% | Page background (white) |
| `--foreground` | 213 40% 15% | Body text |
| `--secondary` | 210 14% 95% | Section backgrounds |
| `--muted` | 210 14% 96% | Muted backgrounds |
| `--muted-foreground` | 215 16% 47% | Secondary text |
| `--card` | 210 20% 98% | Card backgrounds |
| `--border` | 214 20% 88% | Borders and dividers |

---

## PHASE 4: TYPOGRAPHY SYSTEM

### Font Families
```css
/* Body Text */
font-family: 'Inter', system-ui, sans-serif;

/* Headings */
font-family: 'Playfair Display', Georgia, serif;
```

### Typography Scale
| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| H1 (Hero) | Playfair Display | 4xl-7xl | Bold (700) | White or Primary |
| H2 (Section) | Playfair Display | 3xl-4xl | Semibold (600) | Primary |
| H3 (Card Title) | Inter | xl | Semibold (600) | Foreground |
| Body | Inter | base (16px) | Regular (400) | Foreground |
| Body Muted | Inter | base | Regular (400) | Muted-foreground |
| Small | Inter | sm (14px) | Medium (500) | Muted-foreground |
| Overline | Inter | sm | Medium (500) | Accent (uppercase, tracking-wider) |

---

## PHASE 5: BUTTON COMPONENT WITH VARIANTS

### Task 5.1: Create Button Component

**File: `src/components/ui/button.tsx`**

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Institutional variants
        hero: "bg-accent text-accent-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
        heroOutline: "border-2 border-white/30 text-white bg-transparent hover:bg-white/10 font-medium",
        gold: "bg-accent text-accent-foreground font-semibold hover:bg-accent/90 shadow-md",
        navy: "bg-primary text-primary-foreground font-medium hover:bg-primary/80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-md px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

### Button Variant Usage Guide
| Variant | Usage |
|---------|-------|
| `hero` | Primary CTAs on dark hero sections (gold background) |
| `heroOutline` | Secondary CTAs on dark hero sections (transparent with white border) |
| `gold` | Primary CTAs on light backgrounds |
| `navy` | Secondary CTAs on light backgrounds |
| `default` | Standard buttons |

---

## PHASE 6: LAYOUT COMPONENTS

### Task 6.1: Header Component

**File: `src/components/layout/Header.tsx`**

**Structure:**
- Fixed position, full-width header
- Background with backdrop blur (`bg-background/95 backdrop-blur-md`)
- Height: `h-20` (80px)
- Logo: Circular container with "IFC" text + organization name
- Navigation: Horizontal links (hidden on mobile)
- CTA Button: "Get Started" (gold variant)
- Mobile: Hamburger menu toggle with slide-down navigation

**Navigation Items:**
```typescript
const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "What We Do", path: "/services" },
  { label: "News", path: "/news" },
  { label: "Eligibility", path: "/eligibility" },
  { label: "Contact", path: "/contact" },
];
```

### Task 6.2: Footer Component

**File: `src/components/layout/Footer.tsx`**

**Structure:**
- Background: `bg-primary` (navy)
- Grid layout: 4 columns on desktop, stacked on mobile
- Sections: Brand/Logo, Quick Links, Services, Contact
- Bottom bar with copyright and legal links

**Footer Links:**
- Quick Links: About, Services, Eligibility, Contact
- Services: Investment Services, Advisory Services, Trade Finance, Blended Finance
- Legal: Privacy Policy, Terms of Use, Disclaimer

### Task 6.3: Layout Wrapper

**File: `src/components/layout/Layout.tsx`**

```tsx
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
```

---

## PHASE 7: FRAMER MOTION ANIMATIONS

### Task 7.1: Animation Configuration Objects

Use these reusable animation configurations across all pages:

```typescript
// Fade in with upward movement
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

// Stagger children animations
const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  viewport: { once: true },
};
```

### Task 7.2: Hero Section Parallax Effect

```typescript
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const heroRef = useRef(null);
const { scrollYProgress } = useScroll({
  target: heroRef,
  offset: ["start start", "end start"],
});

// Parallax transforms
const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
```

### Task 7.3: Scroll-triggered Card Animations

```typescript
// Individual card animation (use with stagger)
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  whileHover={{ y: -8, transition: { duration: 0.2 } }}
>
```

### Task 7.4: Scroll Indicator Animation

```typescript
<motion.div 
  className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 1.5, repeat: Infinity }}
>
  <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
    <motion.div 
      className="w-1.5 h-3 bg-white/60 rounded-full"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </div>
</motion.div>
```

---

## PHASE 8: PAGE STRUCTURE & CONTENT

### Task 8.1: Homepage (Index.tsx)

**Sections in order:**
1. **Hero Section** - Full-height with parallax background, title, subtitle, dual CTAs, scroll indicator
2. **Stats Section** - 4-column grid with animated counters (180+ Member Countries, 100+ Countries Served, $30B+ Annual Investments, 65+ Years)
3. **About Preview** - 2-column layout with image and text description
4. **Finance Impact Section** - Dark navy background with infographic image and stats
5. **Services Grid** - 4 service cards with icons
6. **Why Partner Section** - Numbered list of partnership benefits
7. **CTA Section** - Dark navy with dual CTAs

**Key Stats Data:**
```typescript
const stats = [
  { value: "180+", label: "Member Countries" },
  { value: "100+", label: "Countries Served" },
  { value: "$30B+", label: "Annual Investments" },
  { value: "65+", label: "Years of Impact" },
];
```

**Services Data:**
```typescript
const services = [
  { icon: TrendingUp, title: "Investment Services", description: "..." },
  { icon: Users, title: "Advisory Services", description: "..." },
  { icon: Globe, title: "Global Reach", description: "..." },
  { icon: Shield, title: "Risk Management", description: "..." },
];
```

### Task 8.2: About Page (About.tsx)

**Sections:**
1. **Hero** - Navy background with title "Who We Are"
2. **Our Story** - 2-column with image and multi-paragraph text
3. **Mission & Mandate** - Centered text section
4. **Core Values** - 6 value cards in 3-column grid
5. **Key Milestones** - Alternating timeline
6. **CTA Section**

**Values Data:**
```typescript
const values = [
  { icon: Target, title: "Impact-Driven", description: "..." },
  { icon: Globe, title: "Global Perspective", description: "..." },
  { icon: Users, title: "Partnership", description: "..." },
  { icon: Award, title: "Excellence", description: "..." },
  { icon: Building, title: "Private Sector Focus", description: "..." },
  { icon: Leaf, title: "Sustainability", description: "..." },
];
```

**Milestones Data:**
```typescript
const milestones = [
  { year: "1956", event: "IFC founded as part of the World Bank Group" },
  { year: "1961", event: "First investment in Latin America" },
  { year: "1989", event: "Launch of advisory services program" },
  { year: "2000", event: "Expanded focus on sustainability and ESG" },
  { year: "2010", event: "Record investment commitments reached" },
  { year: "Present", event: "Operating in 100+ countries globally" },
];
```

### Task 8.3: Services Page (Services.tsx)

**Sections:**
1. **Hero** - "Products & Services"
2. **Investment Services** - 4 cards (Long-term Loans, Equity Investments, Structured Finance, Trade Finance)
3. **Advisory Services** - 4 cards (Business Advisory, ESG Advisory, PPP Advisory, Financial Sector)
4. **Sector Expertise** - 6 numbered items (Infrastructure, Agribusiness, Manufacturing, Health & Education, Financial Services, Innovation)
5. **CTA Section**

### Task 8.4: Eligibility Page (Eligibility.tsx)

**Sections:**
1. **Hero** - "Eligibility & Process"
2. **Eligibility Principles** - 5 criteria cards with checkmarks
3. **Application Process** - 5-step timeline (Initial Inquiry → Eligibility Screening → Due Diligence → Internal Review → Disbursement)
4. **Important Disclaimer** - Alert box with legal notice
5. **CTA Section**

**Disclaimer Text:**
> "Meeting eligibility criteria does not guarantee approval of financing or advisory support. All applications undergo rigorous due diligence and are subject to IFC's standard terms, conditions, and internal approval processes. Specific outcomes cannot be promised or guaranteed."

### Task 8.5: News Page (News.tsx)

**Sections:**
1. **Hero** - "News & Updates" with parallax background
2. **Category Filter** - Horizontal scrollable filter chips (All, Climate Finance, Financial Inclusion, Infrastructure, Health, Agribusiness, Energy, Gender Equality)
3. **Featured Article** - Large 2-column layout
4. **Articles Grid** - 3-column card grid with 6 articles
5. **Newsletter CTA** - Email subscription form

**Featured Article Example:**
```typescript
const featuredArticle = {
  title: "IFC Announces $2 Billion Climate Investment Initiative for Emerging Markets",
  excerpt: "A landmark commitment to accelerate clean energy transitions...",
  category: "Climate Finance",
  date: "December 28, 2024",
  readTime: "5 min read",
};
```

### Task 8.6: Contact Page (Contact.tsx)

**Sections:**
1. **Hero** - "Contact Us"
2. **Contact Form & Info** - 3-column grid (1/3 info, 2/3 form)
3. **Map Placeholder** - Visual placeholder for DC headquarters

**Contact Information:**
```typescript
const contactInfo = [
  { icon: MapPin, title: "Headquarters", details: ["2121 Pennsylvania Avenue, NW", "Washington, DC 20433", "United States"] },
  { icon: Phone, title: "Phone", details: ["+1 (202) 473-1000"] },
  { icon: Mail, title: "Email", details: ["ifc@worldbankgroup.org"] },
];
```

**Form Fields:**
- Full Name (required)
- Email Address (required)
- Organization (optional)
- Subject (required)
- Message (required, textarea)

---

## PHASE 9: ROUTING CONFIGURATION

**File: `src/App.tsx`**

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Eligibility from "./pages/Eligibility";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
```

---

## PHASE 10: IMAGE ASSETS

### Required Images
1. **Hero Banner** (`hero-ifc-banner.png`) - Main homepage hero background
2. **Team Event** (`ifc-team-event.jpg`) - About section image showing team/collaboration
3. **Finance Infographic** (`ifc-finance-infographic.png`) - Short-term finance data visualization
4. **Global Development** (`hero-global.jpg`) - Secondary hero/background image
5. **About Development** (`about-development.jpg`) - About page image

### Image Specifications
- **Hero Images:** 1920x1080px minimum, high-quality, institutional photography
- **Section Images:** 800x600px minimum, 16:9 or 4:3 aspect ratio
- **Style:** Professional, corporate, global development themes
- **Colors:** Should complement navy and gold palette

---

## PHASE 11: SEO CONFIGURATION

**File: `index.html`**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>International Finance Corporation | Driving Private Sector Growth</title>
    <meta name="title" content="International Finance Corporation | Driving Private Sector Growth" />
    <meta name="description" content="IFC is the largest global development institution focused on the private sector in emerging markets. We provide investment, advisory, and asset management services." />
    <meta name="keywords" content="IFC, International Finance Corporation, World Bank Group, development finance, emerging markets, private sector, investment, advisory services" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.ifc.org/" />
    <meta property="og:title" content="International Finance Corporation | Driving Private Sector Growth" />
    <meta property="og:description" content="IFC is the largest global development institution focused on the private sector in emerging markets." />
    <meta property="og:image" content="/og-image.png" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.ifc.org/" />
    <meta property="twitter:title" content="International Finance Corporation" />
    <meta property="twitter:description" content="Driving Private Sector Growth in Emerging and Developing Markets" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## PHASE 12: COMPONENT PATTERNS

### Section Header Pattern
```tsx
<p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
  {overline}
</p>
<h2 className="section-header inline-block border-0 pb-0">
  {title}
</h2>
<p className="section-subheader mx-auto mt-4">
  {description}
</p>
```

### Card Pattern
```tsx
<div className="bg-card p-8 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border">
  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
    <Icon className="w-7 h-7 text-primary" />
  </div>
  <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
  <p className="text-muted-foreground leading-relaxed">{description}</p>
</div>
```

### Hero Section Pattern
```tsx
<section className="bg-primary py-24 md:py-32">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
      {overline}
    </p>
    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
      {title}
    </h1>
    <p className="text-white/70 text-lg max-w-3xl mx-auto">
      {description}
    </p>
  </div>
</section>
```

### CTA Section Pattern
```tsx
<section className="bg-primary py-20">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
      {title}
    </h2>
    <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
      {description}
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button variant="hero" size="lg" asChild>
        <Link to="/eligibility">{primaryCTA}</Link>
      </Button>
      <Button variant="heroOutline" size="lg" asChild>
        <Link to="/contact">{secondaryCTA}</Link>
      </Button>
    </div>
  </div>
</section>
```

---

## PHASE 13: FILE STRUCTURE

```
src/
├── assets/
│   ├── hero-ifc-banner.png
│   ├── ifc-team-event.jpg
│   ├── ifc-finance-infographic.png
│   ├── hero-global.jpg
│   └── about-development.jpg
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── label.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       └── use-toast.ts
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/
│   └── utils.ts
├── pages/
│   ├── Index.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Eligibility.tsx
│   ├── News.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── App.tsx
├── App.css
├── index.css
├── main.tsx
└── vite-env.d.ts
```

---

## PHASE 14: QUALITY CHECKLIST

### Before Completion, Verify:

#### Design Consistency
- [ ] All colors use CSS variables from design system
- [ ] Typography follows the defined scale
- [ ] Spacing is consistent (use container-section, standard gaps)
- [ ] All buttons use appropriate variants

#### Responsiveness
- [ ] Mobile navigation works correctly
- [ ] All grids collapse properly on mobile
- [ ] Touch targets are adequate (min 44px)
- [ ] Text is readable on all screen sizes

#### Animations
- [ ] Hero parallax effect is smooth
- [ ] Scroll-triggered animations fire once
- [ ] Card hover effects work properly
- [ ] No layout shifts during animations

#### Functionality
- [ ] All navigation links work
- [ ] Contact form submits with toast notification
- [ ] Category filters are interactive (News page)
- [ ] Mobile menu opens/closes correctly

#### SEO
- [ ] Page titles are unique and descriptive
- [ ] Meta descriptions are present
- [ ] Proper heading hierarchy (single H1 per page)
- [ ] Images have alt attributes

#### Performance
- [ ] Images are optimized
- [ ] Fonts are loaded with display=swap
- [ ] No unnecessary re-renders
- [ ] Lazy loading where appropriate

---

## DEVELOPMENT ORDER

Execute tasks in this sequence:

1. **Setup** - Initialize project, install dependencies, configure Tailwind
2. **Design System** - Create index.css with all CSS variables
3. **Core UI** - Build Button, Input, Textarea, Label, Toast components
4. **Layout** - Create Header, Footer, Layout wrapper
5. **Homepage** - Build Index.tsx with all sections and animations
6. **Secondary Pages** - About, Services, Eligibility, Contact
7. **News Page** - With category filters and article grid
8. **Routing** - Configure App.tsx with all routes
9. **Polish** - Add remaining animations, verify responsiveness
10. **SEO** - Update index.html meta tags, verify accessibility

---

## CONTENT TONE GUIDELINES

- **Authoritative** - Position IFC as the leading global development finance institution
- **Professional** - Corporate language suitable for government and institutional audiences
- **Trustworthy** - Emphasis on governance, compliance, and decades of experience
- **Informative** - Clear explanations without promises or guarantees
- **Global** - Inclusive language reflecting worldwide operations
- **Sustainability-focused** - Highlight ESG and development impact

---

## END OF MASTER PROMPT

This document provides all specifications needed to recreate the IFC institutional website exactly as built. Follow each phase sequentially, implementing components and pages according to the patterns and data structures defined above.
