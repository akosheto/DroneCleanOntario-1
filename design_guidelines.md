# Design Guidelines: Drone Clean Ontario

## Design Approach
**Reference-Based**: Drawing inspiration from innovative B2B service companies (Stripe's trust-building, Tesla's technology showcase, modern solar companies' before/after presentations) combined with local service business credibility.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Sky Blue: 210 85% 45% (trust, technology, sky/drones)
- Deep Navy: 220 40% 15% (professionalism, authority)
- Pure White: 0 0% 100% (cleanliness, clarity)

**Accent & Supporting:**
- Bright Cyan: 190 70% 50% (innovation, energy - use sparingly for CTAs)
- Light Gray: 220 10% 95% (section backgrounds)
- Success Green: 145 60% 45% (before/after improvements)

### B. Typography
**Font Families:**
- Headers: 'Inter' (700, 600) - modern, technology-forward
- Body: 'Inter' (400, 500) - excellent readability
- Accents: 'Space Grotesk' (600) for technical callouts

**Hierarchy:**
- H1: 3.5rem/4rem desktop, bold - Hero statements
- H2: 2.5rem/3rem desktop - Section headers
- H3: 1.75rem - Service cards, subsections
- Body: 1.125rem - Generous for readability
- Small: 0.875rem - Captions, technical specs

### C. Layout System
**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 20, 24, 32 for consistent vertical rhythm
- Section padding: py-20 desktop, py-12 mobile
- Component spacing: gap-8 for grids, space-y-6 for stacked content
- Container: max-w-7xl for full sections, max-w-4xl for content focus

### D. Component Library

**Hero Section (Full-Viewport Impact):**
- Full-bleed background: Drone in action against GTA skyline
- Split layout: 60% bold headline/CTA left, 40% hero image/video right
- Floating stat badges: "500+ Buildings Cleaned" "Licensed & Insured"
- Dual CTA: Primary "Get Free Quote" + Secondary "Watch Demo"
- Subtle animated drone icon/element

**Services Grid (3-Column Desktop, 1-Column Mobile):**
- Large icon/image top
- Service title + description
- "Learn More" links
- Cards: High-Rise Window Cleaning, Solar Panel Cleaning, Hard-to-Reach Areas

**Before/After Showcase:**
- Split-screen slider comparison
- 2x2 grid of transformations
- Captions with building type/location
- Visual proof of cleaning quality

**Technology Section:**
- Side-by-side: Drone tech specs + Safety features
- Icon list of benefits (No scaffolding, Eco-friendly, Fast completion)
- Equipment imagery with callouts

**Service Areas Map:**
- Interactive or static GTA coverage map
- List of municipalities served
- "Serving all of Greater Toronto Area" headline

**Trust Builders:**
- Client logo strip (if available, otherwise industry certifications)
- Safety badges: Licensed, Insured, Certified operators
- "Why Choose Us" 4-column feature grid

**Testimonials:**
- 2-column card layout with building manager quotes
- Company logos + building photos
- Star ratings prominently displayed

**Contact/Quote Form:**
- 2-column: Form left (Service type dropdown, Building details, Contact info) + Info right (Response time, Service hours, Phone/Email)
- Sticky "Get Quote" button on mobile scroll

**Footer (Comprehensive):**
- 4-column: Services, Company, Service Areas, Contact
- Newsletter signup: "Industry Tips & Updates"
- Social links, Licensing info, Privacy policy

### E. Images Strategy

**Required Images:**
1. **Hero**: Dramatic drone cleaning high-rise windows with GTA cityscape background (full-bleed, high-impact)
2. **Services Section**: 3 distinct images - drone on condo window, solar panel cleaning, industrial building
3. **Before/After Gallery**: 4-6 comparison images showing dirty vs clean windows/panels
4. **Technology Section**: Professional drone equipment close-up, safety gear
5. **Team/About**: Operators with drones (builds trust and human connection)
6. **Service Areas**: GTA map graphic or aerial view of Toronto
7. **Background Accents**: Subtle glass/window textures, sky gradients

**Image Treatment:**
- Sharp, professional photography
- Consistent color grading toward cool/blue tones
- Overlays on hero: dark gradient (60% opacity) for text contrast
- Hover effects: Subtle scale (1.05) on service cards

### F. Animations
**Minimal, Purposeful:**
- Fade-up on scroll for section reveals (0.3s ease)
- Drone icon subtle float in hero
- Before/after slider interaction
- Button hover: slight lift + shadow increase
- NO distracting auto-playing animations

## Navigation
**Desktop:** Horizontal transparent-to-solid on scroll, Logo left, Menu center (Services dropdown, About, Service Areas, Contact), "Get Quote" CTA right
**Mobile:** Hamburger menu, full-screen overlay with large touch targets

## Accessibility & Performance
- WCAG AA contrast ratios (especially white text on blue)
- Focus indicators on all interactive elements
- Alt text for all service/technology images
- Lazy loading for below-fold images
- Optimized image formats (WebP with fallbacks)

## Key Differentiators
- Lead with innovation angle while maintaining professional credibility
- Emphasize safety and no-scaffolding benefits
- GTA-specific language and imagery throughout
- Technology-forward but not intimidating to traditional property managers
- Strong visual proof through before/after comparisons