# Chronos Landing Page — Premium Foundation

## TL;DR

> **Quick Summary**: Build the scalable premium foundation for Chronos by Katalis landing page — project initialization, design system, layout utilities, navbar with glassmorphism, hero section scaffold, and Framer Motion animation presets. Apple x Stripe x Linear aesthetic.
>
> **Deliverables**:
> - Initialized Next.js 16.2.6 project with TypeScript, TailwindCSS v4, shadcn/ui
> - Global design tokens (colors, spacing, radius, shadows) in CSS variables
> - Reusable layout utilities (Container, Section, heading styles, button variants)
> - Premium sticky navbar with glassmorphism blur-on-scroll + mobile menu
> - Hero section scaffold with Indonesian copy, CTA buttons, visual placeholders
> - Framer Motion animation preset library (fade-up, stagger, blur-reveal, floating)
>
> **Estimated Effort**: Short
> **Parallel Execution**: YES — 2 waves
> **Critical Path**: T1 → T2 → T3 → T4,5,6,7 → T8

---

## Context

### Original Request
Create the initial setup and foundational structure for a premium Apple-inspired landing page for "Chronos by Katalis" — a smart IoT-based PlayStation rental automation system. Focus ONLY on project structure, global styling, layout system, typography, reusable UI foundation, navbar, hero section scaffold, animation utilities, and responsive setup.

### Interview Summary
**Key Discussions**:
- **Design Direction**: Apple x Stripe x Linear — premium SaaS, light mode default, minimalist, elegant spacing, cinematic layout, white background with subtle blue gradients
- **Brand**: "Chronos" by "Katalis"
- **Product**: IoT-based PS rental with self-checkout, digital payment, auto timer, device automation, revenue monitoring, real-time dashboard
- **Language**: Indonesian for all UI copy
- **Font**: Geist via next/font/google
- **Package Manager**: npm

### Metis Review
Metis unavailable (billing). Self-conducted gap analysis applied.

---

## Work Objectives

### Core Objective
Create a scalable, premium design foundation that enables rapid development of remaining landing page sections with consistent Apple-quality aesthetics.

### Concrete Deliverables
- `package.json` with all dependencies installed and verified
- `src/app/globals.css` with complete design token system
- `src/app/layout.tsx` with Geist font, smooth scrolling, metadata
- `src/components/ui/container.tsx` — responsive max-width wrapper
- `src/components/ui/section.tsx` — section wrapper with spacing
- `src/components/ui/button.tsx` — shadcn button with premium variants
- `src/components/landing/navbar.tsx` — sticky glassmorphism navbar
- `src/components/landing/hero.tsx` — hero section scaffold
- `src/lib/utils.ts` — cn() class merging utility
- `src/lib/animations.ts` — Framer Motion preset variants
- `src/hooks/use-scroll.ts` — scroll position hook for navbar blur

### Definition of Done
- [ ] `npm run build` completes with zero errors
- [ ] `npm run dev` starts successfully on localhost:3000
- [ ] Navbar renders with blur effect on scroll (verified via Playwright)
- [ ] Hero section renders with correct Indonesian copy and layout (verified via Playwright)
- [ ] All design tokens applied and visible in computed styles
- [ ] Mobile responsive: navbar collapses to hamburger at <768px

### Must Have
- TailwindCSS v4 with CSS-based `@theme` configuration
- Geist font loaded via next/font/google
- CSS custom properties for all design tokens
- Framer Motion "use client" components properly configured
- shadcn/ui initialized with correct Tailwind v4 paths
- Mobile-first responsive approach
- Semantic HTML structure

### Must NOT Have (Guardrails)
- NO dark mode toggle or dark mode styling
- NO gaming/esports aesthetic (no neon, no aggressive gradients)
- NO full landing page sections beyond hero
- NO placeholder lorem ipsum — use real Indonesian copy
- NO inline styles — use Tailwind classes + CSS variables only
- NO excessive animations — keep subtle and premium
- NO hardcoded pixel values for spacing — use Tailwind spacing scale
- NO giant monolithic files — keep components modular (<200 lines each)

---

## Verification Strategy

### Test Decision
- **Infrastructure exists**: NO (greenfield)
- **Automated tests**: None for this phase (foundation/scaffolding — visual verification via Playwright)
- **Framework**: N/A
- **Agent-Executed QA**: ALWAYS (mandatory for all tasks)

### QA Policy
Every task MUST include agent-executed QA scenarios. Evidence saved to `.sisyphus/evidence/task-{N}-{scenario-slug}.{ext}`.

- **Frontend/UI**: Playwright — Navigate, assert DOM, screenshot
- **Build/Dev Server**: Bash — Run build/dev commands, assert output
- **Responsive**: Playwright — Set viewport, assert layout

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Start Immediately — project init + design system):
├── Task 1: Project scaffolding + dependencies [quick]
├── Task 2: Global CSS + design tokens [quick]
├── Task 3: Layout utilities (Container, Section) [quick]
└── Task 4: shadcn button + cn utility + animations lib [quick]

Wave 2 (After Wave 1 — components):
├── Task 5: use-scroll hook + Navbar component [unspecified-high]
├── Task 6: Hero section scaffold [visual-engineering]
├── Task 7: Layout.tsx with font + metadata [quick]
└── Task 8: Build verification + responsive QA [quick]

Wave FINAL (After ALL tasks — 4 parallel reviews):
├── Task F1: Plan compliance audit (oracle)
├── Task F2: Code quality review (unspecified-high)
├── Task F3: Real manual QA (unspecified-high)
└── Task F4: Scope fidelity check (deep)
```

### Dependency Matrix
- **1**: — → 2, 3, 4
- **2**: 1 → 3, 4, 5, 6, 7
- **3**: 1, 2 → 5, 6
- **4**: 1, 2 → 5, 6
- **5**: 2, 3, 4 → 8
- **6**: 2, 3, 4 → 8
- **7**: 1, 2 → 8
- **8**: 5, 6, 7 → F1-F4

### Agent Dispatch Summary
- **Wave 1**: 4 tasks — T1-T4 → `quick`
- **Wave 2**: 4 tasks — T5 → `unspecified-high`, T6 → `visual-engineering`, T7 → `quick`, T8 → `quick`
- **FINAL**: 4 tasks — F1 → `oracle`, F2 → `unspecified-high`, F3 → `unspecified-high`, F4 → `deep`

---

## TODOs

- [x] 1. Project Scaffolding + Dependencies

  **What to do**:
  - Run `npx create-next-app@latest chronos-landing` with flags: `--typescript --eslint --tailwind --app --src-dir --import-alias "@/*" --use-npm`
  - Install dependencies: `npm install framer-motion lucide-react class-variance-authority clsx tailwind-merge`
  - Initialize shadcn: `npx shadcn@latest init` with config: style "new-york", tailwind config "tailwind.config.ts", CSS "src/app/globals.css", alias "@/*"
  - Verify `package.json` has all dependencies listed
  - Verify `npm run build` succeeds (baseline)

  **Must NOT do**:
  - Do NOT modify any generated files yet (that's subsequent tasks)
  - Do NOT install additional packages beyond those specified
  - Do NOT start building components

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Straightforward CLI commands, no complex logic
  - **Skills**: `[]`
  - **Skills Evaluated but Omitted**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: NO (must complete first — all other tasks depend on it)
  - **Parallel Group**: Sequential (Wave 1, Task 1)
  - **Blocks**: Tasks 2, 3, 4
  - **Blocked By**: None (can start immediately)

  **References**:
  - Next.js docs: `https://nextjs.org/docs/app/getting-started/installation` — create-next-app flags
  - shadcn/ui docs: `https://ui.shadcn.com/docs/installation/next` — init configuration
  - Framer Motion: `https://www.framer.com/motion/` — installation for Next.js App Router

  **Acceptance Criteria**:
  - [ ] `npx create-next-app` completes without errors
  - [ ] `npm install` adds framer-motion, lucide-react, cva, clsx, tailwind-merge
  - [ ] `npx shadcn@latest init` completes with correct config
  - [ ] `npm run build` succeeds with zero errors

  **QA Scenarios**:

  ```
  Scenario: Build succeeds after project initialization
    Tool: Bash
    Preconditions: Project created, dependencies installed, shadcn initialized
    Steps:
      1. Run `npm run build` in project root
      2. Assert exit code is 0
      3. Assert output contains "✓ Compiled successfully"
    Expected Result: Build completes with zero errors and zero warnings
    Failure Indicators: Exit code non-zero, TypeScript errors, missing dependency errors
    Evidence: .sisyphus/evidence/task-1-build-success.txt
  ```

  **Evidence to Capture**:
  - [ ] Terminal output of create-next-app
  - [ ] Terminal output of npm install
  - [ ] Terminal output of shadcn init
  - [ ] Terminal output of npm run build

  **Commit**: YES
  - Message: `chore: initialize Next.js project with TailwindCSS v4, shadcn/ui, Framer Motion`
  - Files: All generated files from create-next-app + package.json changes
  - Pre-commit: `npm run build`

---

- [x] 2. Global CSS + Design Tokens

  **What to do**:
  - Edit `src/app/globals.css` to include TailwindCSS v4 `@import "tailwindcss"` and `@theme` block
  - Define CSS custom properties for all design tokens:
    - `--background: #ffffff`, `--foreground: #0f172a`
    - `--primary: #2563eb`, `--primary-hover: #1d4ed8`, `--primary-foreground: #ffffff`
    - `--muted: #f8fafc`, `--muted-foreground: #64748b`
    - `--border: #e2e8f0`, `--ring: #2563eb`
    - `--card: #ffffff`, `--card-foreground: #0f172a`
    - `--radius-sm: 0.5rem`, `--radius-md: 0.75rem`, `--radius-lg: 1rem`, `--radius-xl: 1.5rem`, `--radius-2xl: 1.5rem`, `--radius-3xl: 2rem`
  - Add global styles:
    - `html { scroll-behavior: smooth }`
    - `::selection { background: rgba(37, 99, 235, 0.15) }`
    - Font rendering: `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale`
    - Body defaults: `bg-background text-foreground`
  - Add subtle background gradient utility class
  - Add custom scrollbar styling (thin, subtle)
  - Add reusable spacing utilities (`.section-padding`, `.container-padding`)

  **Must NOT do**:
  - Do NOT add dark mode variables or media queries
  - Do NOT use Tailwind v3 config syntax (no tailwind.config.js theme block)
  - Do NOT add component-specific styles here

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: CSS file editing with well-defined token values
  - **Skills**: `[]`
  - **Skills Evaluated but Omitted**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: NO (depends on Task 1 — project must exist)
  - **Parallel Group**: Wave 1 (with Tasks 3, 4 after Task 1 completes)
  - **Blocks**: Tasks 3, 4, 5, 6, 7
  - **Blocked By**: Task 1

  **References**:
  - TailwindCSS v4 docs: `https://tailwindcss.com/docs` — `@theme` directive syntax
  - shadcn/ui theme: `https://ui.shadcn.com/docs/theming` — CSS variable conventions
  - `src/app/globals.css` (generated) — starting point to modify

  **Acceptance Criteria**:
  - [ ] `globals.css` contains `@import "tailwindcss"` and `@theme` block
  - [ ] All CSS custom properties defined with correct values
  - [ ] Smooth scrolling enabled
  - [ ] Custom selection color applied
  - [ ] Font smoothing applied to body
  - [ ] `npm run build` still succeeds

  **QA Scenarios**:

  ```
  Scenario: Design tokens are accessible in computed styles
    Tool: Playwright
    Preconditions: Dev server running on localhost:3000
    Steps:
      1. Navigate to http://localhost:3000
      2. Execute: `window.getComputedStyle(document.body).getPropertyValue('--background')`
      3. Assert value equals "#ffffff" or "rgb(255, 255, 255)"
      4. Execute: `window.getComputedStyle(document.body).getPropertyValue('--primary')`
      5. Assert value equals "#2563eb" or "rgb(37, 99, 235)"
    Expected Result: All design tokens return correct values
    Evidence: .sisyphus/evidence/task-2-design-tokens.txt

  Scenario: Smooth scrolling is enabled
    Tool: Playwright
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:3000
      2. Execute: `window.getComputedStyle(document.documentElement).scrollBehavior`
      3. Assert value equals "smooth"
    Expected Result: scroll-behavior is "smooth"
    Evidence: .sisyphus/evidence/task-2-smooth-scroll.txt
  ```

  **Evidence to Capture**:
  - [ ] globals.css file content
  - [ ] Computed style verification output

  **Commit**: YES (groups with 3, 4)
  - Message: `style(tokens): add premium design tokens and global styles`
  - Files: `src/app/globals.css`
  - Pre-commit: `npm run build`

---

- [x] 3. Layout Utilities (Container + Section)

  **What to do**:
  - Create `src/components/ui/container.tsx`:
    - Responsive max-width wrapper component
    - Props: `children`, `className`, `size` ("sm" | "md" | "lg" | "xl" | "full", default "xl")
    - Default max-width: `max-w-7xl` for xl, with responsive padding `px-4 sm:px-6 lg:px-8`
    - Centered with `mx-auto`
  - Create `src/components/ui/section.tsx`:
    - Section wrapper with consistent vertical spacing
    - Props: `children`, `className`, `id`, `padding` ("sm" | "md" | "lg" | "xl", default "lg")
    - Default padding: `py-16 sm:py-20 lg:py-24`
    - Semantic `<section>` element

  **Must NOT do**:
  - Do NOT add business logic or content
  - Do NOT create more than these two utility components
  - Do NOT use inline styles

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple React components with props and Tailwind classes
  - **Skills**: `[]`
  - **Skills Evaluated but Omitted**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Task 4 after Task 1, 2 complete)
  - **Parallel Group**: Wave 1 (with Tasks 2, 4)
  - **Blocks**: Tasks 5, 6
  - **Blocked By**: Tasks 1, 2

  **References**:
  - Tailwind spacing: `https://tailwindcss.com/docs/customizing-spacing` — spacing scale
  - shadcn patterns: Look at generated shadcn components for prop patterns

  **Acceptance Criteria**:
  - [ ] `container.tsx` created with correct props and responsive classes
  - [ ] `section.tsx` created with correct props and responsive padding
  - [ ] Both components use TypeScript interfaces for props
  - [ ] Both components export as default

  **QA Scenarios**:

  ```
  Scenario: Container renders with correct max-width
    Tool: Playwright
    Preconditions: Dev server running, Container imported in page
    Steps:
      1. Navigate to http://localhost:3000
      2. Find element with Container wrapper
      3. Assert computed style max-width equals "80rem" (max-w-7xl = 1280px)
      4. Assert margin-left and margin-right are "auto"
    Expected Result: Container is centered with correct max-width
    Evidence: .sisyphus/evidence/task-3-container-width.txt

  Scenario: Section renders with correct padding
    Tool: Playwright
    Preconditions: Dev server running, Section imported in page
    Steps:
      1. Navigate to http://localhost:3000
      2. Find element with Section wrapper
      3. Assert computed style padding-top is "6rem" (py-24 default)
      4. Assert computed style padding-bottom is "6rem"
    Expected Result: Section has correct vertical padding
    Evidence: .sisyphus/evidence/task-3-section-padding.txt
  ```

  **Evidence to Capture**:
  - [ ] container.tsx file content
  - [ ] section.tsx file content
  - [ ] Computed style verification

  **Commit**: YES (groups with 2, 4)
  - Message: `feat(ui): add Container and Section layout utilities`
  - Files: `src/components/ui/container.tsx`, `src/components/ui/section.tsx`
  - Pre-commit: `npm run build`

---

- [x] 4. shadcn Button + cn Utility + Animation Library

  **What to do**:
  - Create `src/lib/utils.ts`:
    - Export `cn(...inputs)` function using `clsx` and `tailwind-merge`
    - Standard shadcn utility pattern
  - Install shadcn button component: `npx shadcn@latest add button`
    - Verify button variants: default, destructive, outline, secondary, ghost, link
    - Customize button to match premium aesthetic (rounded-xl, subtle shadows)
  - Create `src/lib/animations.ts`:
    - Export Framer Motion variant presets:
      - `fadeInUp`: opacity 0→1, y: 20→0, duration 0.6s, ease: [0.25, 0.1, 0.25, 1]
      - `fadeInDown`: opacity 0→1, y: -20→0, duration 0.6s
      - `blurReveal`: opacity 0→1, filter blur(10px)→blur(0), duration 0.8s
      - `staggerContainer`: staggerChildren 0.1s, staggerDirection 1
      - `staggerItem`: opacity 0→1, y: 16→0, duration 0.5s
      - `floating`: y: [0, -10, 0], duration 6s, repeat: Infinity, ease: "easeInOut"
      - `scaleIn`: opacity 0→1, scale: 0.95→1, duration 0.4s
    - Export `transition` presets:
      - `defaultTransition`: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
      - `slowTransition`: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
      - `staggerTransition`: { staggerChildren: 0.1 }

  **Must NOT do**:
  - Do NOT modify shadcn button beyond necessary styling tweaks
  - Do NOT add animation components (only variants/config)
  - Do NOT add other shadcn components yet

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Utility function + config file + single component installation
  - **Skills**: `[]`
  - **Skills Evaluated but Omitted**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Task 3 after Task 1, 2 complete)
  - **Parallel Group**: Wave 1 (with Tasks 2, 3)
  - **Blocks**: Tasks 5, 6
  - **Blocked By**: Tasks 1, 2

  **References**:
  - shadcn button: `https://ui.shadcn.com/docs/components/button` — component API
  - clsx + tailwind-merge: `https://github.com/lukeed/clsx`, `https://github.com/dcastil/tailwind-merge`
  - Framer Motion variants: `https://www.framer.com/motion/animation/#variants`

  **Acceptance Criteria**:
  - [ ] `src/lib/utils.ts` exports working `cn()` function
  - [ ] shadcn button installed and importable from `@/components/ui/button`
  - [ ] `src/lib/animations.ts` exports all 7 variant presets + 3 transition presets
  - [ ] All animation variants are valid Framer Motion TargetAndTransition objects
  - [ ] `npm run build` succeeds

  **QA Scenarios**:

  ```
  Scenario: cn() utility merges classes correctly
    Tool: Bash (Node REPL)
    Preconditions: Project built, dependencies installed
    Steps:
      1. Run `node -e "const { cn } = require('./src/lib/utils.ts'); console.log(cn('px-4', 'px-8'))"`
      2. Assert output contains "px-8" (tailwind-merge resolves conflict)
      3. Assert output contains "px-4" is NOT present (overridden)
    Expected Result: tailwind-merge correctly resolves conflicting classes
    Evidence: .sisyphus/evidence/task-4-cn-utility.txt

  Scenario: Animation variants are valid Framer Motion objects
    Tool: Bash (Node REPL)
    Preconditions: Project built, framer-motion installed
    Steps:
      1. Import all variants from `src/lib/animations.ts`
      2. Assert each export is a non-null object
      3. Assert fadeInUp has `initial` and `animate` properties
      4. Assert floating has `y` array with 3 values
    Expected Result: All variants are valid and importable without errors
    Evidence: .sisyphus/evidence/task-4-animation-variants.txt
  ```

  **Evidence to Capture**:
  - [ ] utils.ts file content
  - [ ] animations.ts file content
  - [ ] shadcn button component file
  - [ ] QA verification output

  **Commit**: YES (groups with 2, 3)
  - Message: `feat(lib): add cn utility, shadcn button, and Framer Motion animation presets`
  - Files: `src/lib/utils.ts`, `src/lib/animations.ts`, `src/components/ui/button.tsx`
  - Pre-commit: `npm run build`

---

- [x] 5. useScroll Hook + Premium Navbar Component

  **What to do**:
  - Create `src/hooks/use-scroll.ts`:
    - Custom React hook that tracks scroll position
    - Returns `{ isScrolled: boolean, scrollY: number }`
    - Threshold: `isScrolled` becomes true when scrollY > 20
    - Uses `useState` + `useEffect` with scroll event listener
    - Cleanup: remove event listener on unmount
    - Throttle: use `requestAnimationFrame` or simple threshold check
  - Create `src/components/landing/navbar.tsx`:
    - "use client" directive at top
    - Sticky positioning: `sticky top-0 z-50`
    - Glassmorphism effect when scrolled: `backdrop-blur-xl bg-white/80 border-b border-border/50`
    - Transparent when not scrolled: `bg-transparent`
    - Smooth transition: `transition-all duration-300`
    - Layout:
      - Left: Logo "Chronos" (bold, text-xl) + "by Katalis" (muted, text-sm)
      - Center: Nav links — Produk, Fitur, Dashboard, Cara Kerja, Harga (hidden on mobile)
      - Right: "Request Demo" CTA button (primary variant) + mobile menu button (visible only on mobile)
    - Mobile menu:
      - Hamburger icon (Lucide `Menu` / `X`)
      - Slide-in panel from right with backdrop
      - Same nav links stacked vertically
      - Close on link click or backdrop click
    - All nav links use smooth scroll to section anchors (href="#produk", etc.)
    - Premium spacing: `h-16` or `h-20`, generous horizontal padding

  **Must NOT do**:
  - Do NOT add dropdown menus or mega menus
  - Do NOT add active state highlighting for nav links (out of scope)
  - Do NOT add search functionality
  - Do NOT use `position: fixed` — use `sticky`

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: Requires React hooks, state management, responsive design, and glassmorphism styling — more complex than quick tasks
  - **Skills**: `[]`
  - **Skills Evaluated but Omitted**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 6, 7 after Wave 1 complete)
  - **Parallel Group**: Wave 2 (with Tasks 6, 7)
  - **Blocks**: Task 8
  - **Blocked By**: Tasks 2, 3, 4

  **References**:
  - `src/hooks/` — directory for hooks
  - `src/components/landing/navbar.tsx` — target file
  - `src/components/ui/button.tsx` — use for CTA button
  - `src/lib/utils.ts` — use cn() for class merging
  - `src/lib/animations.ts` — use for mobile menu animation
  - Lucide React: `https://lucide.dev/icons/` — Menu, X icons

  **Acceptance Criteria**:
  - [ ] `use-scroll.ts` hook correctly tracks scroll position with threshold
  - [ ] Navbar renders with logo, nav links, and CTA button
  - [ ] Navbar becomes glassmorphic on scroll (backdrop-blur + background)
  - [ ] Mobile menu opens/closes with hamburger toggle
  - [ ] Mobile menu closes on link click or backdrop click
  - [ ] Nav links hidden on mobile, visible on desktop (responsive)
  - [ ] Navbar is sticky and stays at top on scroll

  **QA Scenarios**:

  ```
  Scenario: Navbar renders correctly on desktop
    Tool: Playwright
    Preconditions: Dev server running, Navbar imported in layout
    Steps:
      1. Navigate to http://localhost:3000 with viewport 1920x1080
      2. Assert element with text "Chronos" is visible
      3. Assert element with text "by Katalis" is visible
      4. Assert nav links "Produk", "Fitur", "Dashboard", "Cara Kerja", "Harga" are all visible
      5. Assert button with text "Request Demo" is visible
      6. Assert hamburger menu button is NOT visible
    Expected Result: All desktop navbar elements are visible, hamburger is hidden
    Evidence: .sisyphus/evidence/task-5-navbar-desktop.png

  Scenario: Navbar glassmorphism activates on scroll
    Tool: Playwright
    Preconditions: Dev server running, page has scrollable content
    Steps:
      1. Navigate to http://localhost:3000 with viewport 1920x1080
      2. Scroll down 100 pixels
      3. Assert navbar has backdrop-blur class or computed backdrop-filter
      4. Assert navbar background has opacity (rgba or bg-white/80)
    Expected Result: Navbar shows glassmorphism effect after scrolling past threshold
    Evidence: .sisyphus/evidence/task-5-navbar-scrolled.png

  Scenario: Mobile menu opens and closes
    Tool: Playwright
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:3000 with viewport 375x812 (mobile)
      2. Assert hamburger menu button is visible
      3. Assert nav links are NOT visible (hidden on mobile)
      4. Click hamburger button
      5. Assert mobile menu panel is visible with all nav links
      6. Click backdrop or close button
      7. Assert mobile menu is hidden
    Expected Result: Mobile menu toggles correctly
    Evidence: .sisyphus/evidence/task-5-mobile-menu.gif
  ```

  **Evidence to Capture**:
  - [ ] use-scroll.ts file content
  - [ ] navbar.tsx file content
  - [ ] Desktop navbar screenshot
  - [ ] Scrolled navbar screenshot
  - [ ] Mobile menu interaction recording

  **Commit**: YES (groups with 6, 7)
  - Message: `feat(landing): add useScroll hook and premium glassmorphism navbar`
  - Files: `src/hooks/use-scroll.ts`, `src/components/landing/navbar.tsx`
  - Pre-commit: `npm run build`

---

- [x] 6. Hero Section Scaffold

  **What to do**:
  - Create `src/components/landing/hero.tsx`:
    - "use client" directive at top
    - Full viewport height section: `min-h-screen` or `min-h-[90vh]`
    - Centered content with Apple-style generous spacing
    - Layout:
      - Top: Badge/pill with text "IoT-Powered Rental Automation" (muted bg, small text)
      - Headline: "Rental PlayStation Kini Bisa Berjalan Sendiri." (large, bold, tracking-tight)
        - Typography: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight`
      - Subheadline: "Self-checkout, pembayaran digital, dan kontrol otomatis dalam satu sistem pintar."
        - Typography: `text-lg sm:text-xl text-muted-foreground max-w-2xl mt-6`
      - CTA Buttons (horizontal, gap-4, mt-10):
        - Primary: "Request Demo" → links to contact/demo section
        - Secondary/Outline: "Lihat Cara Kerja" → links to #cara-kerja
      - Visual Area (below CTAs, mt-16 or mt-20):
        - Placeholder container for floating PS Box render
        - Placeholder container for analytics dashboard preview
        - Floating UI card placeholders (2-3 small cards with stats)
        - Soft blue gradient background: `bg-gradient-to-b from-blue-50/50 to-white`
    - Animation:
      - Wrap content in `motion.div` with `fadeInUp` variant
      - Use `staggerContainer` for staggered children animation
      - Visual area uses `floating` animation for floating cards
    - Responsive:
      - Mobile: stacked layout, smaller text, full-width buttons
      - Tablet: two-column layout optional
      - Desktop: centered single column with large visual area
    - Background: subtle radial gradient or blue tint at top

  **Must NOT do**:
  - Do NOT add actual images or 3D renders (placeholders only)
  - Do NOT add other sections (features, pricing, etc.)
  - Do NOT add complex 3D animations
  - Do NOT use dark mode or dark backgrounds

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Hero section is the primary visual component — requires careful attention to spacing, typography scale, visual hierarchy, and premium aesthetic
  - **Skills**: `[]`
  - **Skills Evaluated but Omitted**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 5, 7 after Wave 1 complete)
  - **Parallel Group**: Wave 2 (with Tasks 5, 7)
  - **Blocks**: Task 8
  - **Blocked By**: Tasks 2, 3, 4

  **References**:
  - `src/components/landing/hero.tsx` — target file
  - `src/components/ui/container.tsx` — wrap hero content
  - `src/components/ui/button.tsx` — use for CTA buttons
  - `src/lib/animations.ts` — use fadeInUp, staggerContainer, floating variants
  - Apple.com hero sections — reference for spacing and typography scale
  - Linear.app landing page — reference for premium SaaS aesthetic

  **Acceptance Criteria**:
  - [ ] Hero section renders with correct Indonesian headline and subheadline
  - [ ] Two CTA buttons render with correct labels and styles
  - [ ] Visual placeholder area renders with gradient background
  - [ ] Floating card placeholders are visible with floating animation
  - [ ] Content is centered and responsive across breakpoints
  - [ ] Fade-up animation triggers on page load
  - [ ] Stagger animation applies to children elements

  **QA Scenarios**:

  ```
  Scenario: Hero section renders with correct content
    Tool: Playwright
    Preconditions: Dev server running, Hero imported in page
    Steps:
      1. Navigate to http://localhost:3000 with viewport 1920x1080
      2. Assert text "Rental PlayStation Kini Bisa Berjalan Sendiri." is visible
      3. Assert text "Self-checkout, pembayaran digital, dan kontrol otomatis dalam satu sistem pintar." is visible
      4. Assert button "Request Demo" is visible
      5. Assert button "Lihat Cara Kerja" is visible
      6. Assert visual placeholder area exists (check for gradient background element)
    Expected Result: All hero content renders correctly
    Evidence: .sisyphus/evidence/task-6-hero-content.png

  Scenario: Hero animations trigger on load
    Tool: Playwright
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:3000
      2. Wait 1 second for animations to start
      3. Assert hero content has opacity > 0 (faded in)
      4. Assert floating cards have animation applied (check transform property changes)
    Expected Result: Animations trigger and complete smoothly
    Evidence: .sisyphus/evidence/task-6-hero-animation.gif

  Scenario: Hero is responsive on mobile
    Tool: Playwright
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:3000 with viewport 375x812
      2. Assert headline text is visible (may be smaller)
      3. Assert subheadline text wraps correctly
      4. Assert CTA buttons are stacked or fit within viewport width
      5. Assert no horizontal overflow
    Expected Result: Hero renders correctly on mobile without overflow
    Evidence: .sisyphus/evidence/task-6-hero-mobile.png
  ```

  **Evidence to Capture**:
  - [ ] hero.tsx file content
  - [ ] Desktop hero screenshot
  - [ ] Mobile hero screenshot
  - [ ] Animation recording

  **Commit**: YES (groups with 5, 7)
  - Message: `feat(landing): add hero section with Indonesian copy and Framer Motion animations`
  - Files: `src/components/landing/hero.tsx`, `src/app/page.tsx`
  - Pre-commit: `npm run build`

---

- [x] 7. Layout.tsx with Font + Metadata + Page Integration

  **What to do**:
  - Edit `src/app/layout.tsx`:
    - Import `Geist` from `next/font/google`
    - Configure Geist: `subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"]`
    - Apply font to body via `className={geist.className}`
    - Update metadata:
      - title: "Chronos by Katalis — Rental PlayStation Pintar"
      - description: "Self-checkout, pembayaran digital, dan kontrol otomatis dalam satu sistem IoT pintar untuk rental PlayStation."
      - viewport: standard responsive viewport
      - icons: default Next.js favicon (no custom icon needed yet)
    - Ensure `globals.css` is imported
    - Ensure semantic `<html>` and `<body>` tags
    - Body classes: `bg-background text-foreground antialiased`
  - Edit `src/app/page.tsx`:
    - Import and render `Navbar` component
    - Import and render `Hero` component
    - Wrap in `<main>` semantic element
    - Keep page minimal — just the two components for now
  - Create `src/app/not-found.tsx` (optional but recommended):
    - Simple 404 page with "Back to Home" link

  **Must NOT do**:
  - Do NOT add other pages or routes
  - Do NOT add Open Graph images or complex metadata yet
  - Do NOT add analytics scripts

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple file edits with well-defined Next.js patterns
  - **Skills**: `[]`
  - **Skills Evaluated but Omitted**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 5, 6 after Wave 1 complete)
  - **Parallel Group**: Wave 2 (with Tasks 5, 6)
  - **Blocks**: Task 8
  - **Blocked By**: Tasks 1, 2

  **References**:
  - `src/app/layout.tsx` (generated) — file to edit
  - `src/app/page.tsx` (generated) — file to edit
  - Next.js font docs: `https://nextjs.org/docs/app/building-your-application/optimizing/fonts`
  - Next.js metadata: `https://nextjs.org/docs/app/building-your-application/optimizing/metadata`

  **Acceptance Criteria**:
  - [ ] Geist font is loaded and applied to body
  - [ ] Metadata title and description are correct
  - [ ] Navbar and Hero render on homepage
  - [ ] Page uses semantic `<main>` element
  - [ ] `npm run build` succeeds

  **QA Scenarios**:

  ```
  Scenario: Geist font is applied to body
    Tool: Playwright
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:3000
      2. Execute: `window.getComputedStyle(document.body).fontFamily`
      3. Assert result contains "Geist"
    Expected Result: Geist font is applied to body text
    Evidence: .sisyphus/evidence/task-7-geist-font.txt

  Scenario: Metadata is correct
    Tool: Playwright
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:3000
      2. Execute: `document.title`
      3. Assert equals "Chronos by Katalis — Rental PlayStation Pintar"
      4. Execute: `document.querySelector('meta[name="description"]')?.content`
      5. Assert contains "Self-checkout" and "IoT pintar"
    Expected Result: Title and description metadata are correct
    Evidence: .sisyphus/evidence/task-7-metadata.txt

  Scenario: Navbar and Hero both render on homepage
    Tool: Playwright
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:3000
      2. Assert navbar is visible (check for "Chronos" text)
      3. Assert hero is visible (check for headline text)
      4. Assert both are within <main> element
    Expected Result: Both components render within semantic main element
    Evidence: .sisyphus/evidence/task-7-page-render.png
  ```

  **Evidence to Capture**:
  - [ ] layout.tsx file content
  - [ ] page.tsx file content
  - [ ] Font verification output
  - [ ] Metadata verification output
  - [ ] Page render screenshot

  **Commit**: YES (groups with 5, 6)
  - Message: `feat(app): configure Geist font, metadata, and integrate Navbar + Hero`
  - Files: `src/app/layout.tsx`, `src/app/page.tsx`
  - Pre-commit: `npm run build`

---

- [x] 8. Build Verification + Responsive QA

  **What to do**:
  - Run `npm run build` and verify zero errors
  - Run `npm run dev` and verify dev server starts
  - Perform comprehensive responsive QA across breakpoints:
    - Mobile (375px): iPhone SE viewport
    - Tablet (768px): iPad viewport
    - Desktop (1920px): Full HD viewport
  - Verify all components render correctly at each breakpoint
  - Verify navbar responsive behavior (hamburger on mobile, links on desktop)
  - Verify hero responsive behavior (text scaling, button layout)
  - Capture screenshots at each breakpoint
  - Verify no console errors or warnings
  - Verify all CSS variables are accessible

  **Must NOT do**:
  - Do NOT fix issues found — report them for subsequent tasks
  - Do NOT add new features
  - Do NOT modify any component files

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Verification and QA task — run commands, capture evidence, report results
  - **Skills**: `[]`
  - **Skills Evaluated but Omitted**: None needed

  **Parallelization**:
  - **Can Run In Parallel**: NO (depends on all Wave 2 tasks completing)
  - **Parallel Group**: Wave 2 (final task, runs after 5, 6, 7)
  - **Blocks**: Final Verification Wave (F1-F4)
  - **Blocked By**: Tasks 5, 6, 7

  **References**:
  - All created files from Tasks 1-7
  - Playwright viewport documentation

  **Acceptance Criteria**:
  - [ ] `npm run build` completes with zero errors and zero warnings
  - [ ] `npm run dev` starts successfully
  - [ ] All components render at mobile (375px), tablet (768px), desktop (1920px)
  - [ ] No console errors in browser dev tools
  - [ ] All design tokens accessible in computed styles
  - [ ] Navbar responsive behavior works (hamburger ↔ links)
  - [ ] Hero responsive behavior works (text scaling, layout)

  **QA Scenarios**:

  ```
  Scenario: Build succeeds with zero errors
    Tool: Bash
    Preconditions: All tasks 1-7 completed
    Steps:
      1. Run `npm run build`
      2. Assert exit code is 0
      3. Assert no TypeScript errors in output
      4. Assert no ESLint errors in output
    Expected Result: Clean build with zero errors and zero warnings
    Evidence: .sisyphus/evidence/task-8-final-build.txt

  Scenario: Responsive layout at all breakpoints
    Tool: Playwright
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:3000 at 375px viewport
      2. Screenshot and assert no horizontal overflow
      3. Navigate at 768px viewport
      4. Screenshot and assert navbar shows links (or hamburger at exact breakpoint)
      5. Navigate at 1920px viewport
      6. Screenshot and assert full desktop layout
    Expected Result: Clean responsive layout at all three breakpoints
    Evidence: .sisyphus/evidence/task-8-responsive-mobile.png
             .sisyphus/evidence/task-8-responsive-tablet.png
             .sisyphus/evidence/task-8-responsive-desktop.png

  Scenario: No console errors
    Tool: Playwright
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:3000
      2. Collect all console.error and console.warn messages
      3. Assert no errors related to React, Framer Motion, or missing imports
    Expected Result: Zero console errors
    Evidence: .sisyphus/evidence/task-8-console-errors.txt
  ```

  **Evidence to Capture**:
  - [ ] Build output
  - [ ] Mobile screenshot (375px)
  - [ ] Tablet screenshot (768px)
  - [ ] Desktop screenshot (1920px)
  - [ ] Console error log

  **Commit**: YES
  - Message: `chore: verify build and responsive layout across all breakpoints`
  - Files: No file changes (verification only)
  - Pre-commit: `npm run build`

---

## Final Verification Wave (MANDATORY — after ALL implementation tasks)

> 4 review agents run in PARALLEL. ALL must APPROVE. Present consolidated results to user and get explicit "okay" before completing.
>
> **Do NOT auto-proceed after verification. Wait for user's explicit approval before marking work complete.**
> **Never mark F1-F4 as checked before getting user's okay.** Rejection or user feedback -> fix -> re-run -> present again -> wait for okay.

- [x] F1. **Plan Compliance Audit** — `oracle`
  Read the plan end-to-end. For each "Must Have": verify implementation exists (read file, curl endpoint, run command). For each "Must NOT Have": search codebase for forbidden patterns — reject with file:line if found. Check evidence files exist in .sisyphus/evidence/. Compare deliverables against plan.
  Output: `Must Have [N/N] | Must NOT Have [N/N] | Tasks [N/N] | VERDICT: APPROVE/REJECT`

- [x] F2. **Code Quality Review** — `unspecified-high`
  Run `tsc --noEmit` + linter + `npm run build`. Review all changed files for: `as any`/`@ts-ignore`, empty catches, console.log in prod, commented-out code, unused imports. Check AI slop: excessive comments, over-abstraction, generic names (data/result/item/temp).
  Output: `Build [PASS/FAIL] | Lint [PASS/FAIL] | Tests [N pass/N fail] | Files [N clean/N issues] | VERDICT`

- [x] F3. **Real Manual QA** — `unspecified-high` (+ `playwright` skill if UI)
  Start from clean state. Execute EVERY QA scenario from EVERY task — follow exact steps, capture evidence. Test cross-task integration (features working together, not isolation). Test edge cases: empty state, invalid input, rapid actions. Save to `.sisyphus/evidence/final-qa/`.
  Output: `Scenarios [N/N pass] | Integration [N/N] | Edge Cases [N tested] | VERDICT`

- [x] F4. **Scope Fidelity Check** — `deep`
  For each task: read "What to do", read actual diff (git log/diff). Verify 1:1 — everything in spec was built (no missing), nothing beyond spec was built (no creep). Check "Must NOT do" compliance. Detect cross-task contamination: Task N touching Task M's files. Flag unaccounted changes.
  Output: `Tasks [N/N compliant] | Contamination [CLEAN/N issues] | Unaccounted [CLEAN/N files] | VERDICT`

---

## Commit Strategy

- **1**: `chore: initialize Next.js project with TailwindCSS v4, shadcn/ui, Framer Motion` — all generated files
- **2-4**: `style(tokens): add premium design tokens and global styles` + `feat(ui): add Container and Section layout utilities` + `feat(lib): add cn utility, shadcn button, and Framer Motion animation presets` — grouped as single commit for Wave 1
- **5-7**: `feat(landing): add useScroll hook, glassmorphism navbar, hero section, and page integration` — grouped as single commit for Wave 2
- **8**: `chore: verify build and responsive layout across all breakpoints` — no file changes

---

## Success Criteria

### Verification Commands
```bash
npm run build        # Expected: ✓ Compiled successfully, 0 errors, 0 warnings
npm run dev          # Expected: Ready in XXXms, Local: http://localhost:3000
npm run lint         # Expected: ✔ No ESLint warnings or errors
npx tsc --noEmit     # Expected: No type errors
```

### Final Checklist
- [ ] All "Must Have" present (TailwindCSS v4, Geist font, CSS variables, Framer Motion, shadcn, mobile-first, semantic HTML)
- [ ] All "Must NOT Have" absent (no dark mode, no gaming aesthetic, no full sections, no lorem ipsum, no inline styles, no excessive animations)
- [ ] All tasks have evidence files in .sisyphus/evidence/
- [ ] Build passes with zero errors
- [ ] Navbar glassmorphism works on scroll
- [ ] Hero section renders with correct Indonesian copy
- [ ] Responsive at 375px, 768px, 1920px
- [ ] All Framer Motion animations trigger on load
- [ ] All design tokens accessible in computed styles