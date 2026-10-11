# PROJECT ARCHITECTURE & GOVERNANCE RULES
# Lead Software Engineer, UX Architect, and Technical SEO Auditor Directives

## Status: ACTIVE & ENFORCED
## Scope: Universal across all source code, assets, routing, styling, SEO, and deployment pipelines

---

### PREAMBLE
This document codifies the non-negotiable architectural, design, SEO, and engineering standards for this repository. Every developer, AI agent, and automated pipeline operating within this repository must strictly adhere to these rules without exception. Deviations, shortcuts, and synthetic filler ("AI slop") are strictly prohibited.

---

## SECTION 1: ANTI-"VIBE CODING" & DESIGN CONSTRAINTS (ZERO AI-SLOP)

### 1.1 Colors & Styling
- **No Purple Radial/Linear Gradients on Dark Backgrounds**: Absolutely NO cliché AI-aesthetic violet, purple, or magenta radial/linear gradient glow effects over dark backgrounds.
- **No Pill-Shaped Action Buttons**: Standard call-to-action (CTA) buttons must NOT use `rounded-full` or pill silhouettes. Use disciplined, structural, modern border radii (4px to 8px) that convey engineering precision.
- **No Gimmicky Cursor or Canvas Effects**: Custom cursor animations, floating particle trails, sparkle effects, interactive physics canvas backgrounds, and distracting cursor tracking overlays are strictly forbidden.
- **Color Discipline**: Rely on intentional, high-contrast, professional palettes with deliberate neutral balancing (slate, zinc, or true monochrome) with purposeful accent colors.

### 1.2 Motion & Scroll Behavior
- **Restrained Native CSS Scrolling**: Implement clean, native CSS scroll behavior (`scroll-behavior: smooth`).
- **No Scroll-Jacking or Parallax Abuse**: Do not hijack natural user scrolling. Parallax effects, delayed scroll inertia, and resource-heavy JavaScript scroll listeners are banned.
- **Snappy Transitions**: All UI state transitions, hovers, and toggles must be snappy and functional (under 200ms duration). Never force users to wait for elaborate layout reveal animations.
- **Accessibility**: Honor `prefers-reduced-motion` media queries across all motion and transition declarations.

### 1.3 Typography & Content Copy
- **Zero Em Dashes**: Absolutely NO em dashes. Use standard hyphens (-) or rephrase sentences using crisp, direct, professional structure.
- **No Emojis in Interface Elements**: Emoji characters are strictly banned from UI headings, navigation bars, feature cards, badges, and action buttons. Use semantic, scalable vector iconography (e.g., Lucide, Phosphor, Heroicons).
- **No Vague Hero Text**: Hero sections must never use empty buzzword soup such as "Revolutionize your workflow with AI-driven synergy" or "Unleash the power of next-gen productivity". Use concrete, value-first, problem-solving statements that clearly state what the product does.
- **No Synthetic Filler Copy**: Zero conversational fluff, corporate waffle, or unverified claims. Banned patterns include fake counters (e.g., "10,000+ happy users", "Trusted by Fortune 500") unless verified by explicit database records.
- **No Fake Social Proof**: Synthetic customer reviews, generated testimonial cards, and arbitrary 5-star rating bars are strictly prohibited.
- **No Framework Placeholder Strings**: The browser tab title and document body must NEVER display default starter text such as "Vite", "React App", "Next.js Starter", "Create Next App", or "Lorem Ipsum".

### 1.4 Media & Imagery
- **No Uncanny AI-Generated Stock Media**: Plastic portraits, neon cyberpunk illustrations, floating 3D isometric glass shapes, and uncanny synthetic renders are prohibited. Use high-fidelity product UI captures, crisp technical architecture diagrams, or authentic photography.
- **Strict Image Accessibility & Layout Stability**: Every `<img>` tag and Next.js/framework Image component must provide descriptive, contextual `alt` text. Explicit dimensions (`width`, `height`, or CSS `aspect-ratio`) must be declared to prevent Cumulative Layout Shift (CLS).

---

## SECTION 2: TECHNICAL SEO & ARCHITECTURE STANDARDS

### 2.1 Document Hierarchy & Route Structure
- **Single `<h1>` Invariance**: Every page and route must render exactly one semantic `<h1>` tag defining the core subject of the document.
- **Strict Heading Nesting**: Headings must strictly descend hierarchically (`<h1>` -> `<h2>` -> `<h3>` -> `<h4>`). Never skip levels for visual sizing; use utility classes for typography size instead.
- **Route-Unique Metadata**: Every route must supply a unique, hand-crafted `<title>` tag and `<meta name="description">` precisely describing that route.
- **Self-Referencing Canonical Tags**: Every indexable route must include a valid `<link rel="canonical" href="...">` tag referencing its canonical URL.
- **Internal Linking & Breadcrumbs**: Maintain clean, crawlable internal linking via semantic anchor tags (`<a>`). Deep page routes (depth > 1) must include structured breadcrumb navigation.

### 2.2 Technical Discovery Files (Root Level)
The public web root must maintain valid discovery files:
- **`sitemap.xml`**: Well-formed, accessible XML sitemap indexing all valid canonical routes with accurate `lastmod` timestamps.
- **`robots.txt`**: Production indexing directives explicitly linking to `sitemap.xml` and disallowing non-public, internal, or administrative paths.
- **`llms.txt`**: Machine-readable markdown document formatted for LLM indexers and AI search crawlers, detailing the core site purpose, structure, and API/documentation endpoints.
- **Favicons & Brand Assets**: Production-grade SVG and ICO favicon files (`favicon.ico`, `favicon.svg`, `apple-touch-icon.png`) properly declared in document `<head>`. Default framework or hosting provider icons are forbidden.

### 2.3 Structured Data (Schema.org)
- Key page templates must inject valid, parseable JSON-LD scripts (`<script type="application/ld+json">`).
- Root template: `WebSite` and `Organization` schemas.
- Route-specific templates: Appropriate schemas (`Product`, `SoftwareApplication`, `LocalBusiness`, `Article`, or `BreadcrumbList`) adhering to Google Rich Results guidelines.

### 2.4 Social Graph Metadata
- Open Graph tags on all public pages: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, and `og:site_name`.
- Twitter Cards: `twitter:card` set to `summary_large_image`, paired with `twitter:title`, `twitter:description`, and `twitter:image`.
- All preview images must use absolute URLs with verified HTTPS protocol and recommended dimensions (1200x630px).

---

## SECTION 3: CODE QUALITY, ASSET BUNDLING & PERFORMANCE

### 3.1 Zero Console Errors & Runtime Health
- **Zero Runtime Errors**: Zero unresolved console warnings, hydration mismatches, duplicate React key warnings, unhandled promise rejections, or memory leaks.
- **Type Safety & Linting**: Maintain strict TypeScript configuration (`strict: true`). All build-time lint rules and type checks must pass cleanly with zero ignored flags.

### 3.2 Production Hygiene & Asset Bundling
- **Strip Production Source Maps**: Disable source map emission for production bundles (`productionSourceMap: false`, `sourcemap: false`, or framework equivalent) to protect intellectual property and minimize deployment weight.
- **Bundle Optimization**: Implement aggressive tree-shaking, vendor chunk splitting, and dynamic imports for heavy non-critical modules. Avoid monolithic dependency packages when lightweight, modular utilities suffice.
- **Structured Source Tree**: Source code must maintain modular, predictable separation:
  - `/src/components` (Reusable, atomized UI elements and layouts)
  - `/src/lib` (Utilities, API clients, helpers, and configurations)
  - `/src/pages` or `/src/app` (Route definitions and page views)
  - `/src/styles` (Global stylesheets, design tokens, and CSS variables)

---

## SECTION 4: PRODUCTION LAUNCH GATES

No branch, preview deployment, or build may be certified as production-ready until every item below is fully verified:

1. **Custom Domain Resolution**: Canonical domains, DNS records, and SSL/TLS certificates configured without fallback hosting subdomains.
2. **Dedicated 404 Route**: A customized, responsive 404 error page (`not-found.tsx` or `404.html`) matching the design system with navigation recovery links.
3. **Static Legal Documentation**: Live, fully authored, and accessible legal pages at `/privacy` (Privacy Policy) and `/terms` (Terms of Service).
4. **Complete Watermark Removal**: Complete excision of third-party builder tags, platform watermarks, "Made with AI", "Powered by Lovable", "Built with v0", or default starter branding.
5. **Audited Verification Checklists**: 100% pass rate on SEO validation, accessibility, performance scores, and layout integrity across desktop and mobile viewports.

---

## SECTION 5: AGENT PROTOCOL & EXECUTION CLAUSE

- Any AI agent, pair programmer, or contributor operating in this workspace must read and internalize this document before proposing or executing changes.
- Every proposed edit must be verified against the design constraints, copy guidelines, technical SEO requirements, and bundle policies outlined above.
- Any violation of these clauses constitutes a failed deployment and must be corrected immediately.
